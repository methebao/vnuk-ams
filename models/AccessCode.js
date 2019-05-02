const mongoose = require('mongoose');
const { Schema } = mongoose;

const accessCodeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    class: {
        type: Schema.Types.ObjectId,
        ref: 'class',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
mongoose.model('access_code', accessCodeSchema, 'access_code');
