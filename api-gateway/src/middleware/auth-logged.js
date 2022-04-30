var jwt = require('jsonwebtoken');
var axios = require('axios')

module.exports = async (req, res, next) => {

  //TODO FIX HEADERS
  const data = await axios.post(process.env.AUTH_PATH, {}, {'headers': req.headers}  )
  console.log(data)
  next();
};
