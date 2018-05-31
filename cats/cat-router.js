const express = require('express')
const router = express.Router()
const Cat = require('./Cat')

// GET all cats
router.get('/', (req, res) => {
    const cats = Cat.all()
    res.status(200).json(cats)
})

router.post('/', (req, res) => {
    const cat = new Cat(req.body)
    cat.save()
        .then( () => {
            res.status(201).json(cat)
        })
        .catch( () => {
            res.status(500).json({err: err.message})
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const cat = Cat.find(id)
    res.status(200).json(cat)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Cat.delete(id)
        .then(() => {
            res.status(204).json({
                deleted: true
            })
        })
        .catch( err => {
            res.status(500).json({
                error: error.message
            })
        })
})

module.exports = router