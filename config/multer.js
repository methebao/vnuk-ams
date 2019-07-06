const multer = require("multer");
const formatTime = require("../helpers/formatTime");

const diskStorageToUploads = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./face-attendance/pictures/raw");
  },
  filename: (req, file, cb) => {
    let originalname = file.originalname;
    let now = new Date();
    let timestamp = now.getTime();
    let finalFileName = `${timestamp}-${originalname}`;
    cb(null, finalFileName);
  }
});

const saveToUploads = multer({
  storage: diskStorageToUploads
});

module.exports = {
  saveToUploads: saveToUploads.single("file")
};
