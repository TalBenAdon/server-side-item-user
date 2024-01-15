const express = require('express')
const router = express.Router()
const send = require('send')
const { getAllUsers, getUserById, deleteUser, updateUser, createUser } = require('./user.service')
const { log } = require('console')

router.get('/', (req, res) => {
    res.send(getAllUsers())
})

router.get('/:id', (req, res) => {
    let user = getUserById(req.params.id)
    if (!user) res.status(400).send('User not found')
    res.send(user)

})

router.delete('/:id', (req, res) => {
    try {
        res.send(deleteUser(req.params.id))
    } catch (error) {
        res.status(999).send(error)
    }


})

router.put('/:id', (req, res) => {
    try {
        updateUser(req.params.id, req.body.data)
        res.send('User has been updated')

    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', (req, res) => {
    try {
        res.send(createUser(req.body.data))

    } catch (error) {
        res.status(999).send(error)
    }
})
module.exports = router
