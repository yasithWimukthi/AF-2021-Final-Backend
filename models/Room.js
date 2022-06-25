const mongoose = require('mongoose');

const {Schema} = mongoose;

const roomSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    },
    wing:{
        type: String,
        required: true
    },
    pax: {
        type: Number,
        required: true
    },
},{timestamps: true});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;