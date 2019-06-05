const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const Event = mongoose.model('event');

router.get('/', requireLogin, async (req, res) => {
    try {
        let data = await Event.find();
        return res.json(data);
    } catch (err) {
        return res.status(422, err);
    }
});
router.get('/:studentId/', requireLogin, async (req, res) => {
    try {
        let eventId = new mongoose.Types.ObjectId(req.params.eventId);
        let studentId = new mongoose.Types.ObjectId(req.params.studentId);
        // TODO: Handle
        let data = await Event.findOne({ _id: studentId });
        return res.json(data);
    } catch (err) {
        return res.status(422, err);
    }
});
module.exports = router;
