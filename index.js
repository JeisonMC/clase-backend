const express = require('express');
const cors = require ('cors')

const app = express();

app.use(cors());

const todo = [
    {
        userId: 1,
        id : 1,
        title: 'Pepito Perez',
        completed: false 
    },{
        userId: 1,
        id : 2,
        title: 'Carlos Bayesteros',
        completed: false 
    },{
        userId: 1,
        id : 3,
        title: 'Yobany Ayala',
        completed: false 
    },{
        userId: 1,
        id : 4,
        title: 'Pedro Vargas',
        completed: false 
    },{
        userId: 1,
        id : 5,
        title: 'Camilo Rodriguez',
        completed: false 
    }
]

app.get('/', (req, res)=> {
    res.json(todo);
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server started on http://localhost:3000')
})