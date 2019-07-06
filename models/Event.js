const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    studentId: String,
    checkInTime: String,
    checkOutTime: String,
    isChecked: Boolean
  },
  { _id: false }
);
mongoose.model("student", studentSchema, "student");

const eventSchema = new Schema({
  eventId: String,
  classId: Schema.Types.ObjectId,
  classCode: String,
  calendarLink: String,
  title: String,
  location: String,
  start: String,
  end: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  students: [studentSchema]
});
const toEventObject = data => {
  let { id, classId, htmlLink, summary, location, start, end, students } = data;
  // TITLE of Event on Calendar must contain : #CLASS_CODE# before course name title.
  let classCode = summary.substring(
    summary.indexOf("#") + 1,
    summary.lastIndexOf("#")
  );
  let title = summary.substring(summary.lastIndexOf("#") + 1);
  return {
    eventId: id,
    classId,
    classCode,
    title,
    location,
    start: start.dateTime,
    end: end.dateTime,
    students
  };
};
mongoose.model("event", eventSchema, "event");
module.exports = toEventObject;
