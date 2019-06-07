const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    _id: Schema.Types.ObjectId,
    eventId: String,
    classCode: String,
    calendarLink: String,
    title: String,
    location: String,
    start: String,
    end: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    students: [
        {
            user: Schema.Types.ObjectId,
            checkInTime: String,
            checkOutTime: String,
            status: String,
        },
    ],
});
const toEventObject = data => {
    let { id, htmlLink, summary, location, start, end, users } = data;
    // TITLE of Event on Calendar must contain : #CLASS_CODE# before course name title.
    let classCode = summary.substring(
        summary.indexOf('#') + 1,
        summary.lastIndexOf('#'),
    );
    let title = summary.substring(summary.lastIndexOf('#') + 1);
    return {
        eventId: id,
        classCode,
        title,
        location,
        start: start.dateTime,
        end: end.dateTime,
        students: users,
    };
};
mongoose.model('event', eventSchema, 'event');
module.exports = toEventObject;
