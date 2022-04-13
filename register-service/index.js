const express = require('express')

const app = express()
app.use(express.json())

app.post('/user', (req, res) => {
    console.log(req.headers)
    res.send(`Usuário criado ${req}`)
})

app.listen(3002, () => {
    console.log('App listening on port 3002')
})