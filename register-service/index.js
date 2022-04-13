const express = require('express')

const app = express()

app.post('/user', (req, res) => {
    res.send('Usuário criado')
})

app.listen(3002, () => {
    console.log('App listening on port 3002')
})