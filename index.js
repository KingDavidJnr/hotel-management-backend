const express = require('express')
const cors = require('cors')
const constants = require('./app/constants')
const database = require('./database/database')
const app = express()
const { MESSAGES } = constants;
const PORT = 8080;

app.use(cors())
app.use(express.json())

// base api
app.get("/", (req, res) => {
    res.status(200).send({message: MESSAGES.CONNECTED && "Welcome to my hotel management system..", success: true})
})

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    database() 
})

module.exports = app