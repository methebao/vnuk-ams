const express = require("express");
const mongoose = require("mongoose");
const getFormattedTime = require("../helpers/formatTime");
const router = express.Router();
const gcal = require("google-calendar");
const Event = mongoose.model("event");
const Class = mongoose.model("class");
const TimeTable = mongoose.model("time_table");
const AccessCode = mongoose.model("access_code");
const toEventObject = require("../models/Event");
router.all("/", function(req, res) {
  if (!req.session.access_token) return res.redirect("/api/users/auth");

  //Create an instance from accessToken
  let accessToken = req.session.access_token;

  gcal(accessToken).calendarList.list(function(err, data) {
    if (err) return res.send(500, err);
    return res.send(data);
  });
});
router.all("/:calendarId", async (req, res) => {
  if (!req.session.access_token) return res.redirect("/api/users/auth");

  //Create an instance from accessToken
  let accessToken = req.session.access_token;
  let calendarId = req.params.calendarId;
  let events = [];
  gcal(accessToken).events.list(
    calendarId,
    { maxResults: 2500, singleEvents: true },
    async (err, data) => {
      if (err) return res.send(500, err);
      events = events.concat(data.items);
      if (data.nextPageToken) {
        gcal(accessToken).events.list(
          calendarId,
          {
            maxResults: 2500,
            singleEvents: true,
            pageToken: data.nextPageToken
          },
          function(err, data) {
            events = events.concat(data.items);
            return res.json(events);
          }
        );
      } else {
        try {
          let classCodeHashMap = await processEvents(events);

          return res.json(classCodeHashMap);
        } catch (err) {
          return res.status(422).json(err);
        }

        // TODO: Insert All event ids to a TimeTable document with classCode
      }
    }
  );
});
// processEvents is func will insert and update all events fetched and produe a classCodeHashMap for timetable insert.
const processEvents = async events => {
  let classCodeHashMap = {};

  for (let event of events) {
    let classCodeFromEvent = event.summary.substring(
      event.summary.indexOf("#") + 1,
      event.summary.lastIndexOf("#")
    );
    let classItem = await Class.findOne({ classCode: classCodeFromEvent });
    if (!!classItem) {
      let students = await getAllStudentsOfClass(classItem._id);
      event.students = students;
      event.classId = classItem._id;
      let eventObject = toEventObject(event);
      let eventFetched = await Event.findOne({ eventId: eventObject.eventId });
      if (eventFetched) {
        for (var id in eventObject) {
          eventFetched[id] = eventObject[id];
        }
        await eventFetched.save();
      } else {
        let newEvent = new Event(eventObject);
        eventFetched = await newEvent.save();
      }

      if (classCodeHashMap[classItem.classCode]) {
        classCodeHashMap[classItem.classCode].push(eventFetched._id);
      } else {
        classCodeHashMap[classItem.classCode] = [eventFetched._id];
      }
    }
  }

  return await processTimeTable(classCodeHashMap);
};

const getAllStudentsOfClass = async classId => {
  try {
    const accessCodes = await AccessCode.find({ class: classId })
      .populate("user")
      .exec();
    let users = accessCodes
      .map(accessCode => {
        return {
          user: accessCode.user._id,
          checkInTime: null,
          checkOutTime: null,
          isChecked: false
        };
      })
      .filter(user => {
        return user !== undefined;
      });
    return users;
  } catch (err) {
    return err;
  }
};

const processTimeTable = async classCodeHashMap => {
  for (const classCode in classCodeHashMap) {
    if (classCodeHashMap.hasOwnProperty(classCode)) {
      const events = classCodeHashMap[classCode];
      let timeTable = await TimeTable.findOne({ classCode });
      if (timeTable) {
        timeTable.events = events;
        await timeTable.save();
      } else {
        const classTimeTable = new TimeTable({
          classCode,
          events
        });
        await classTimeTable.save();
      }
    }
  }
};

router.all("/:calendarId/:eventId", function(req, res) {
  if (!req.session.access_token) return res.redirect("/auth");

  //Create an instance from accessToken
  let accessToken = req.session.access_token;
  let calendarId = req.params.calendarId;
  let eventId = req.params.eventId;

  gcal(accessToken).events.get(calendarId, eventId, function(err, data) {
    if (err) return res.send(500, err);
    return res.send(data);
  });
});

module.exports = router;
