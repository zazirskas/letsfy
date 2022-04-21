const mongoose = require('mongoose');

exports.start = async (callback) => {
  await mongoose
    .connect(process.env.DB_MONGO_URL)
    .then(() => console.log(`Database succesfully connected!`))
    .catch((error) => console.log(error));

  return callback();
};
