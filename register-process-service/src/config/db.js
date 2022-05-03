const mongoose = require('mongoose');

exports.start = () => mongoose.connect(process.env.DB_MONGO_URL).then(() => console.log(`Database succesfully connected!`));