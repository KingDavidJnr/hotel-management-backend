require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

const app = express();
app.use(express.json());

const routes = require('./routes/routes');
app.use('/api', routes)

const PORT = 8080;

const Model = require('./model/model');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})