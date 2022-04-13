const express = require('express')
const app = express()

const routes = require('./src/routes')

app.use(routes)

app.listen(3001, () => console.log('listening on port 3001'))