var jwt = require('jsonwebtoken');
var axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    const data = await axios.post(
      'http://localhost:3005/auth',
      {},
      {
        headers: {
          authorization: req.headers.authorization,
        },
      }
    );
    req.user = data.data;
  } catch (error) {
    throw error;
  }

  next();
};
