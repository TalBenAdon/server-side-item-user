const { items } = require('./item.data')
const itemController = require('./item.controller')

async function itemFilterByData(data) {
    const readItem = await itemController.read(data)
    return console.log(readItem);
}

itemFilterByData({ $expr: { $gt: [{ $strLenCP: '$name' }, 5] } })


// async function getItemByPrice(body){
//     {minPrice:'' ,maxPrice:''}
//     let item = await itemController.read({price: {$lt:body.maxPrice,$gt:body.minPrice}})
// }


const getAllItems = () => {
    let notEmptyItems = items.filter(item => Boolean(item))
    return notEmptyItems
}

const getItemById = (id) => {
    let foundItem = items.find(item => item.id == id)
    return foundItem
}
const deleteItem = (id) => {
    let foundItem = items.findIndex(item => item.id == id)
    if (foundItem === -1)
        throw "Item not found"
    delete items[foundItem]
    return "Item deleted"
}

const updateItem = (id, data) => {
    try {

        let itemIndex = items.findIndex(item => item.id == id)
        if (itemIndex === -1) throw 'Item does not exist'

        const validKeys = [
            "name",
            "category",
            "color",
            "emoji",
            "price",
            "image"]
        const areKeysValid = Object.keys(data).every(key => validKeys.includes(key));
        console.log(areKeysValid);
        if (!areKeysValid) throw 'Invalid data inputted'

        items[itemIndex] = { ...items[itemIndex], ...data }
    } catch (error) {
        throw error
    }
}

const getCategoryItems = (category) => {
    validCategories = [
        "fruits",
        "vegetables",
        "dairy",
        "alcohol"]
    let categoryItems = items.filter(item => item.category === category && validCategories.some(validCategory => validCategory === category))

    if (categoryItems.length === 0) throw "Invalid category"
    return categoryItems
}

module.exports = { getAllItems, getItemById, deleteItem, updateItem, getCategoryItems }