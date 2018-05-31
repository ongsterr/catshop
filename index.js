// How are we going to build the database model?

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const catRouter = require('./cats/cat-router')

app.use('/cats', bodyParser.json(), catRouter)

app.get('/', function (req, res) {
    res.redirect('/cats')
})

/* This part has been transferred to the cat-router
app.get('/cats', function myMiddleware(req, res, next) {
    next() 
}, function (req, res) {
    const cats = Cat.all()
    res.status(200).json(cats)
})

app.post('/cats', bodyParser.json(), function (req, res) {
    const cat = req.body
    res.status(201).json(cat)
})

app.get('/cats/:id', function (req, res) {
    const id = req.params.id
    const cat = Cat.find(id)
    res.status(200).json(cat)
    console.log(req)
})
*/

app.listen(3000, () => {
    console.log('Express server is running on port 3000.')
})

// app.all('/secret', function (req, res, next) {
//     console.log('Accessing the secret section ...')
//     next() // pass control to the next handler
// })
