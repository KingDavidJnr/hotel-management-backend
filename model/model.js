const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    roomsTypes: {
        "_id": Number,
        "name": String
    },
    rooms: {
        "_id": Number,
        "name": String,
        "roomType": Number,
        "price": Number
    }
})

module.exports = mongoose.model('Data', dataSchema)