const mongoose = require('mongoose');
const { Schema } = mongoose;

const classSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    classCode: String,
    description: String,
    course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
mongoose.model('class', classSchema, 'class');
