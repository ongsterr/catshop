
// const shortid = require('shortid')
// const db = require('../db/cats.json')

const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'catshop';

function fetchAll() {
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const catsCollection = db.collection('cats')

        const cat = catsCollection.find({})
        insertDocuments(db, function () {
            client.close();
        });
    });
}

class Cat {
    constructor(cat) {
        // this.id = cat.id || shortid.generate()
        this.name = cat.name.trim()
        this.breed = cat.breed
        this.sex = cat.sex
        this.dob = new Date(cat.dob)
        this.price = parseInt(cat.price)
    }

    save() {
        // Save it to the db and return a promise
        return Promise.resolve(this)
    }

    static all() {
        return fetchAll() // Node.js native JavaScript converts JSON into JavaScript object
    }

    static find(id) {
        const catDetails = db.find( cat => {
            return cat.id === id
        })
        return new Cat (catDetails)
    }
}

const catDetails = {
    name: 'Kitty',
    breed: 'bengal',
    sex: 'male',
    dob: '2017-12-12',
    price: '250000'
}
const cat = new Cat (catDetails)
// console.log(cat)
// console.log(Cat.all())

module.exports = Cat