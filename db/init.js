/* Without mongoose
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'catshop'

async function connect(collectionName) {
    const options = {
        useNewUrlParser: true
    }
    const client = await MongoClient.connect(url, options)
    const db = client.db(dbName)
    const collection = db.collection(collectionName)
    return collection
}

module.exports = {
    catsCollection: connect('cats')
}
*/

// With mongoose

const mongoose = require('mongoose')
const url = 'mongodb://localhost/test' // Auto create database if it does not exist
const connection = mongoose.connection

mongoose.connect(url)

connection.on('connected', () => {
    console.log('Establish connection to MongoDB')
})

module.exports = mongoose