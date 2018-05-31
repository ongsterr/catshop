const express = require('express')
const Cat = require('./Cat')
const router = express.Router()

// GET all cats
router.get('/', (req, res) => {
    // const cats = Cat.all()
    // res.status(200).json(cats)

    Cat.all()
        .then(cats => {
            res.status(200).json(cats)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

router.post('/', (req, res) => {
    const cat = new Cat(req.body)
    req.body.dob = new Date(req.body.dob)
    req.body.price = parseInt(req.body.price, 10)

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
    // const cat = Cat.find(id)
    // res.status(200).json(cat)

    try {
        const cat = Cat.find(id)
        res.status(200).json(cat)
    } catch (err) {
        res.status(500).json(err)
    }
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