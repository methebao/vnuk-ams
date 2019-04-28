const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    fullName: String,
    email: String,
    username: String,
    password: String,
    isActive: Boolean,
    userRole: {
        type: Schema.Types.ObjectId,
        ref: 'userRole',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
mongoose.model('user', userSchema, 'user');

const userRoleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
mongoose.model('userRole', userSchema, 'user_role');
