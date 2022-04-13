const { Router } = require('express')
const httpProxy = require('express-http-proxy')
const gitHubProxy = httpProxy('https://api.github.com/users/esdrasac')
const router = new Router()


router.get('/user', gitHubProxy)

module.exports =  router