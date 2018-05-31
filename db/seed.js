/*
const {
    catsCollection
} = require('./init')

const Cat = require('../cats/Cat')

const cats = require('./cattable.json')
const manyCats = cats.map(cat => {
    return new Cat(cat)
})

catsCollection.then(collection => {
    return collection.insertMany(manyCats)
})
    .then(res => console.log(res))
    .catch(err => console.error(err))
*/

const Cat = require('../cats/Cat')

// remove any feral cats
// create 5 cats
// find any cats for particular breed and print those

const connection = require('./init')


const catsJSON = require('./cats.json')

const cats = catsJSON.map(cat => {
    cat.dob = new Date(cat.dob)
    cat.price = parseInt(cat.price, 10)
    return new Cat(cat)
})
const filter = 'bengal'

// Cat.remove({})
//     .then( cats => console.log(cats))

// Cat.insertMany(cats)
//     .then( cat => {
//         console.log('Cat inserted into database!')
//         return Cat.findBreed('Bengal')
//     })

async function seedCats() {
    await Cat.remove({})
    await Cat.insertMany(cats)
    await Cat.findBreed(filter)
    console.log('Database recreated')
    return Cat.findBreed(filter)
}

seedCats()
    .then(cat => {
        console.log('')
        console.log(cat)
    })
    .catch(err => console.log(err))