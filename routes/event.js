const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const Event = mongoose.model('event');
const students = require('./student');

router.get('/', requireLogin, async (req, res) => {
    try {
        let data = await Event.find();
        return res.json(data);
    } catch (err) {
        return res.status(422, err);
    }
});
router.get('/:eventId/', requireLogin, async (req, res) => {
    try {
        let eventId = new mongoose.Types.ObjectId(req.params.eventId);
        let data = await Event.findOne({ _id: eventId });
        return res.json(data);
    } catch (err) {
        return res.status(422, err);
    }
});
router.use(
    '/:eventId/students',
    (req, res, next) => {
        req.eventId = req.params.eventId;
        next();
    },
    students,
);
module.exports = router;