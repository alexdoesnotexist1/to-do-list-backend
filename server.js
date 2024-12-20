const express = require('express')
const mongoose = require('mongoose')
// const Product = require('./models/productModel')
const Task = require('./models/taskModel')
const app = express()

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

// app.get('/products', async(req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res. status(500).json({message: error.message})
//     }
// })

// app.get('/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res. status(500).json({message: error.message})
//     }
// })

// app.post('/products', async(req, res) => {
//     try {
//         const product = await Product.create(req.body)
//         res.status(200).json(product);
    
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message})
//     }
// })

// // update a product
// app.put('/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         // we cannot find any product in database
//         if(!product){
//             return res.status(404).json({message: `cannot find any product with ID ${id}`})
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
        
//     } catch (error) {
//         res. status(500).json({message: error.message})
//     }
// })

// // delete a product
// app.delete('/products/:id', async(req, res) =>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message: `cannot find any product with ID ${id}`})
//         }
//         res.status(200).json(product);

//     } catch (error) {
//         res. status(500).json({message: error.message})
//     }
// })

// -------------------------------

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
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})