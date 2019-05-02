const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();

const Class = mongoose.model('class');
const AccessCode = mongoose.model('access_code');

router.get('/', async (req, res) => {
    try {
        await Class.find({})
            .where('status')
            .equals('active')
            .populate('course')
            .exec((err, classes) => {
                if (err) return res.status(422).json(err);
                res.json(classes);
            });
    } catch (err) {
        res.status(422).json(err);
    }
});
router.get('/:classId/', async (req, res) => {
    let classId = new mongoose.Types.ObjectId(req.params.classId);
    try {
        await AccessCode.find({
            class: classId,
        })
            .populate('user')
            .exec((err, accessCodes) => {
                if (err) return res.status(422).json(err);
                res.json(accessCodes);
            });
    } catch (err) {
        res.status(422).json(err);
    }
});

module.exports = router;
