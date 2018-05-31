
// const shortid = require('shortid')
// const db = require('../db/cats.json')

// const MongoClient = require('mongodb').MongoClient;
// Connection URL
// const url = 'mongodb://localhost:27017';

// function fetchAll() {
//     // Use connect method to connect to the server
//     MongoClient.connect(url, function (err, client) {
//         console.log("Connected successfully to server");
//         const db = client.db(dbName);
//         const catsCollection = db.collection('cats')

//         const cat = catsCollection.find({})
//         insertDocuments(db, function () {
//             client.close();
//         });
//     });
// }

/* Using native MongoDB
const dbName = 'catshop';

// const { catsCollection } = require('../db/init')
// const { ObjectID } = require('mongodb')

class Cat {
    constructor(cat) {
        // this.id = cat.id || shortid.generate()
        this.name = cat.name.trim()
        this.breed = cat.breed
        this.sex = cat.sex
        this.dob = new Date(cat.dob)
        this.price = parseInt(cat.price)
    }

    async save() {
        const collection = await catsCollection
        const cat = await collection.insertOne(this)
        return cat
        // Save it to the db and return a promise
        // return Promise.resolve(this)
    }

    static async all() {
        // fetch cats collection
        const collection = await catsCollection
        const cats = await collection.find({})
        return cats.toArray()

        // return fetchAll() // Node.js native JavaScript converts JSON into JavaScript object
    }

    static async find(id) {
        const collection = await catsCollection
        const _id = new ObjectID(id)
        const cat = await collection.findOne(_id)
        return cat

        // const catDetails = db.find( cat => {
        //     return cat.id === id
        // })
        // return new Cat (catDetails)
    }
}

module.exports = Cat
*/

// Using mongoose
const mongoose = require('../db/init')
const timestamps = require('mongoose-timestamp')
const Schema = mongoose.Schema

const catSchema = new Schema({
    name: String,
    price: Number,
    breed: String,
    sex: String,
    dob: Date
    // hobbies: [String]
})

catSchema.plugin(timestamps)

catSchema.statics.findBreed = function (breed) {
    return this.find({breed: breed})
}

const catModel = mongoose.model('cats', catSchema)

module.exports = catModel