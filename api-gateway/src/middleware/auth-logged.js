var jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    const { id, role } = jwt.verify(token, process.env.SECRET_KEY);

    req.headers = { ...req.headers, id, role };
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};
