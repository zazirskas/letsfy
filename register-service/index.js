require("dotenv").config();
const express = require("express");
const db = require('./src/config/db');
const routes = require('./src/routes');

db.start();
const app = express();
app.use(express.json());
app.use(routes);

app.listen(3002, () => {
	console.log("App listening on port 3002");
});
