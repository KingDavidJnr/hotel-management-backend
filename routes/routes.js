const express = require('express');

const router = express.Router()

router.post('/api/v1/rooms-types', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// To get all data from the database
router.get('/api/v1/rooms-types', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//To get data from the database based on ID
router.get('/api/v1/rooms/{roomId}', async (req, res) => {
    try{
        const data = await Model.findByroomId(req.params.roomId);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


// To update and delete data based on ID
//Update by ID Method
router.patch('/api/v1/rooms/{roomId}', async (req, res) => {
    try {
        const roomId = req.params.roomId;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


// To delete data from the database
router.delete('/api/v1/rooms/{roomId}', async (req, res) => {
    try {
        const id = req.params.roomId;
        const data = await Model.findByIdAndDelete(roomId)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;