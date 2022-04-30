const { Router } = require('express');
const router = Router()
const UserAuthController = require('../controller/authControler')

router.post('/auth', UserAuthController.store);

module.exports = router;
