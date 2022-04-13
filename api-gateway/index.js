require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const router = require('./src/router')

app.use(router)

app.listen(3001, () => console.log('listening on port 3001'))