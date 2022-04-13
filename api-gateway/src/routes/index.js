const httpProxy = require('express-http-proxy')
const registerService = httpProxy('http://localhost:3002')

module.exports = {
    registerService
}