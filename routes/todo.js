const {Router} = require('express');
const Todo = require('../models/todo');
const router = Router();

// get list of tasks
router.get('/', (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.status(200).json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        })
    }
});

// create new task
router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create({
            title: req.body.title,
            done: false
        });

        res.status(201).json({todo});
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
});

// change task
router.put('/:id', (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        })
    }
});

// remove task
router.delete('/:id', (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        })
    }
});

module.exports = router;