const express = require('express')
const { getAllItems, getItemById, deleteItem, updateItem } = require('./item.service')

const router = express.Router()


router.get('/', (req, res) => {
    res.send(getAllItems())
})

router.get('/:id', (req, res) => {
    let item = getItemById(req.params.id)
    if (!item) res.status(400).send('item not found')
    res.send(item)
})

router.delete('/:id', (req, res) => {
    try {
        res.send(deleteItem(req.params.id))
    } catch (error) {
        res.status(999).send(error)
    }
})

router.put('/:id', (req, res) => {
    try {
        updateItem(req.params.id, req.body.data)
        res.send('Item has been updated')
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router