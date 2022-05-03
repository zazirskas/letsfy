const express = require('express');
const { userAuthRouter } = require('./routes');
const server = express();

server.use(express.json());
server.use(userAuthRouter);

server.listen(3005, () => console.log(`listening on port ${process.env.PORT}`));
