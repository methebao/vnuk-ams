const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const gcal = require('google-calendar');
const Event = mongoose.model('event');
const Class = mongoose.model('class');
const TimeTable = mongoose.model('time_table');
const AccessCode = mongoose.model('access_code');
const toEventObject = require('../models/Event');
router.all('/', function(req, res) {
    if (!req.session.access_token) return res.redirect('/api/users/auth');

    //Create an instance from accessToken
    let accessToken = req.session.access_token;

    gcal(accessToken).calendarList.list(function(err, data) {
        if (err) return res.send(500, err);
        return res.send(data);
    });
});
router.all('/:calendarId', async (req, res) => {
    if (!req.session.access_token) return res.redirect('/api/users/auth');

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
                        pageToken: data.nextPageToken,
                    },
                    function(err, data) {
                        events = events.concat(data.items);
                        return res.json(events);
                    },
                );
            } else {
                try {
                    let validEvents = await getAllValidEvents(events);
                    let insertedEvents = await Event.insertMany(validEvents);
                    return res.json(insertedEvents);
                } catch (err) {
                    return res.status(422).json(err);
                }

                // TODO: Insert All event ids to a TimeTable document with classCode
            }
        },
    );
});
const getAllValidEvents = async events => {
    let newEvents = [];

    for (let event of events) {
        let classCode = event.summary.substring(
            event.summary.indexOf('#') + 1,
            event.summary.lastIndexOf('#'),
        );
        let classItem = await Class.findOne({ classCode });
        if (!!classItem) {
            let students = await getAllStudentsOfClass(classItem._id);
            event.students = students;
            newEvents.push(toEventObject(event));
        }
    }
    return newEvents;
};
const getAllStudentsOfClass = async classId => {
    try {
        const accessCodes = await AccessCode.find({ class: classId })
            .populate('user')
            .exec();
        let users = accessCodes
            .map(accessCode => {
                return accessCode.user;
            })
            .filter(user => {
                return user !== undefined;
            });
        return users;
    } catch (err) {
        return err;
    }
};
const insertClassEventToTimeTable = async (classCode, events) => {
    try {
        const classTimeTable = new TimeTable({
            _id: Schema.Types.ObjectId,
            classCode: classCode,
            events,
        });
        return await classTimeTable.save();
    } catch (err) {
        return err;
    }
};
router.all('/:calendarId/:eventId', function(req, res) {
    if (!req.session.access_token) return res.redirect('/auth');

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
