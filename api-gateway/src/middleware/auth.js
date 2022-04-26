//Valida x-api-key - unlogged routes

module.exports = async (req, res, next) => {
  const xApiKey = req.headers['x-api-token'];

  if (xApiKey !== process.env.X_API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};
