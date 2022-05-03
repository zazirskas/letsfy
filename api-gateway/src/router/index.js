const { Router, application } = require('express');
const { registerService, sessionService } = require('../routes');
const { auth, authLogged } = require('../middleware');

const httpProxy = require('express-http-proxy');

const router = new Router();

router.post('/user', auth, httpProxy(`${registerService}/user`));
router.post(
  '/login',
  authLogged,
  httpProxy(`${sessionService}/login`, {
    proxyReqOptDecorator: (proxyReqOpts, sourceReq) => {
      proxyReqOpts.headers.user = sourceReq.user;
      return proxyReqOpts;
    },
  })
);

module.exports = router;
