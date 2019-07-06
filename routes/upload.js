const mongoose = require("mongoose");

const express = require("express");
const router = express.Router();
const multerConfig = require("../config/multer");

router.post("/image", multerConfig.saveToUploads, (req, res) => {
  try {
    return res.send(req.file);
  } catch (err) {
    return res.send(400);
  }
});

module.exports = router;
