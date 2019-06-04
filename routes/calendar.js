const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const gcal = require('google-calendar');
const Event = mongoose.model('event');
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
                    let convertedEvents = [];

                    events.map(event => {
                        convertedEvents.push(toEventObject(event));
                    });
                    let data = await Event.insertMany(convertedEvents);

                    return res.json(data);
                } catch (err) {
                    return res.status(500, err);
                }
                // return res.json(events);
            }
        },
    );
});

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
