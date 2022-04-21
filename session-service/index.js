require('dotenv').config();
const express = require('express');
const db = require('./src/config/db');
const routes = require('./src/routes');

const app = express();
app.use(express.json());
app.use(routes);

db.start(() =>
  app.listen(3003, () => {
    console.log('Session Service listening on port 3003');
  })
);
