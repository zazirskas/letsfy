var jwt = require('jsonwebtoken');

class UserAuthController {
  static async store(req, res) {
    try {
      const { headers } = req;
      const token = headers['authorization'].split(' ')[1];
      const { id, role } = jwt.verify(token, process.env.SECRET_KEY);
      res.status(200).json({ id, role });
    } catch (error) {
      res.status(401).json({ error, error });
    }
  }
}

module.exports = UserAuthController;
