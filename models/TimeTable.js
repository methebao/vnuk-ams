const mongoose = require('mongoose');
const { Schema } = mongoose;

const timeTableSchema = new Schema({
    _id: Schema.Types.ObjectId,
    classCode: String,
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: 'event',
        },
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
mongoose.model('time_table', timeTableSchema, 'time_table');
