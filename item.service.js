const { items } = require('./item.data')

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

module.exports = { getAllItems, getItemById, deleteItem, updateItem }