const express = require('express')
const port = 4000
const app = express()
const db = require('./db')
db.connect()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const userRouter = require('./user.router')
app.use('/user', userRouter)

const itemRouter = require('./item.router')
const { default: mongoose } = require('mongoose')
app.use('/item', itemRouter)

app.listen(port, () => console.log(`***Server is up at ${port}***`))