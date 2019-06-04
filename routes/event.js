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
router.get('/:eventId/', requireLogin, async (req, res) => {
    try {
        let eventId = new mongoose.Types.ObjectId(req.params.eventId);
        let data = await Event.findOne({ _id: eventId });
        return res.json(data);
    } catch (err) {
        return res.status(422, err);
    }
});

module.exports = router;
