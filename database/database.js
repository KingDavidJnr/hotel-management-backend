const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const constants = require('../app/constants')
const Uri = "mongodb+srv://DavidOduse:David1996%40@cluster0.pl4a4kq.mongodb.net/?retryWrites=true&w=majority"

function database() {
    mongoose
    .connect(Uri, { 
        dbName: "hotel-management",
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log(`${constants.MESSAGES.CONNECTED}: Database Connected!`);
    })
    .catch((err) => {
        console.error(`${constants.MESSAGES.ERROR}: ${err}`);
    })
}

module.exports = database