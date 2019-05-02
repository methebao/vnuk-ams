const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    courseCode: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
mongoose.model('course', courseSchema, 'course');
