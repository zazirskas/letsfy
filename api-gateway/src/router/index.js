const { Router, application } = require('express')
const { registerService } = require('../routes')
const authMiddleware = require('../middleware/auth')

const router = new Router()

router.post('/user', authMiddleware, registerService)

module.exports =  router