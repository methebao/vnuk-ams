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
    try {
        let classId = new mongoose.Types.ObjectId(req.params.classId);
        await AccessCode.find({
            class: classId,
        })
            .populate('user')
            .exec((err, accessCodes) => {
                if (err) return res.status(422).json(err);
                let users = accessCodes
                    .map(accessCode => {
                        return accessCode.user;
                    })
                    .filter(user => {
                        return user !== undefined;
                    });
                res.json(users);
            });
    } catch (err) {
        res.status(422).json(err);
    }
});

module.exports = router;
