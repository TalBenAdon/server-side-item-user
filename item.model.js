const mongoose = require('mongoose')

const db = require('./db')
db.connect()

const itemSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true,
        unique: true
    },
    emoji: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
})

const itemModel = mongoose.model('item', itemSchema)

module.exports = itemModel

// //CRUD
// // create
// async function create() {
//     const { items } = require('./item.data')
//     let newItem = await itemModel.create(items)
//     console.log(newItem);
// }
// // create()



// //read
// async function read() {

//     let items = await itemModel.find({})
//     // items.forEach(i => console.log(i.name, i.price))

// }
// // read()
// //update
// // delete