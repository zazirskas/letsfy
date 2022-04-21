const { Router } = require('express');
const UserController = require('../controller/userController');
const routes = new Router();

routes.post('/login', UserController.store);

module.exports = routes;
