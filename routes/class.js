const mongoose = require("mongoose");

const express = require("express");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin");
const Class = mongoose.model("class");
const Event = mongoose.model("event");
const AccessCode = mongoose.model("access_code");

router.get("/", requireLogin, async (req, res) => {
  let pageNo = parseInt(req.query.pageNo);
  let size = parseInt(req.query.size);
  let query = {};
  let errors = {};
  if (pageNo <= 0) {
    errors.message = "invalid page number, should start with 1";
    return res.status(422).json(errors);
  }
  query.skip = size * (pageNo - 1);
  query.limit = size;

  try {
    let totalCount = await Class.count({});

    await Class.find({}, {}, query)
      .where("status")
      .equals("active")
      .populate("course")
      .exec((err, classes) => {
        let totalPages = Math.ceil(totalCount / size);
        if (err) return res.status(422).json(err);
        res.json({ classes, pages: totalPages });
      });
  } catch (err) {
    res.status(422).json(err);
  }
});
router.get("/:classId/students", requireLogin, async (req, res) => {
  try {
    let classId = new mongoose.Types.ObjectId(req.params.classId);
    await AccessCode.find({
      class: classId
    })
      .populate("user")
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

router.get("/:classId/events", requireLogin, async (req, res) => {
  try {
    let classId = new mongoose.Types.ObjectId(req.params.classId);
    let data = await Event.find({
      classId: classId
    });
    res.json(data);
  } catch (err) {
    res.status(422).json(err);
  }
});
router.get("/:classId", requireLogin, async (req, res) => {
  try {
    let classId = new mongoose.Types.ObjectId(req.params.classId);
    let data = await Class.findOne({
      _id: classId
    });
    res.json(data);
  } catch (err) {
    res.status(422).json(err);
  }
});
module.exports = router;
