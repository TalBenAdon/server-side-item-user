const itemModel = require('./item.model')

async function create() {
    return await itemModel.create()
}
async function read(filter) {
    return await itemModel.find(filter) //={price:{$lt:2.3}}
}

async function readOne(filter) {
    return await itemModel.findOne(filter)
}

async function del(_id) {
    return await itemModel.deleteOne({ _id })

}

async function updateOne(filter, newData) {
    return await itemModel.updateOne(filter, newData)
}
async function updateOne(filter, newData) {
    return await itemModel.updateOne(filter, newData)
}

updateMany()







module.exports = { read, readOne, create, del }