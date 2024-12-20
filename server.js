const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Task = require('./models/taskModel')
const app = express()

app.use(cors());

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes
app.get('/', (req, res) => {
    res.send('hi!! :3')
})

app.get('/blog', (req, res) => {
    res.send('blogbltgoglgosyasssqueenoglgogg')
})

// create/add new task
app.post('/tasks', async(req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task);
    
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// get all tasks
app.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);

    } catch (error) {
        res. status(500).json({message: error.message})
    }
})

// get task by id
app.get('/tasks/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({message: `cannot find any task with ID ${id}`})
        }
        res.status(200).json(task);

    } catch (error) {
        res. status(500).json({message: error.message})
    }
})

// edit task
app.put('/tasks/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body);
        // we cannot find any task in database
        if(!task){
            return res.status(404).json({message: `cannot find any task with ID ${id}`})
        }
        const updatedTask = await Task.findById(id);
        res.status(200).json(updatedTask);
        
    } catch (error) {
        res. status(500).json({message: error.message})
    }
})

// delete task
app.delete('/tasks/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json({message: `cannot find any task with ID ${id}`})
        }
        res.status(200).json(task);

    } catch (error) {
        res. status(500).json({message: error.message})
    }
})

mongoose.
connect('mongodb+srv://admin:admin123@alexdoesnotexistapi.dhlup.mongodb.net/Node-API?retryWrites=true&w=majority&appName=alexdoesnotexistAPI')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(5000, ()=> {
        console.log(`Node API app is running on port 5000`)
    });
}).catch((error) => {
    console.log(error)
})