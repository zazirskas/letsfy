const yup = require('yup');
const CryptoJS = require('crypto-js');
var jwt = require('jsonwebtoken');
const UserService = require('../services/userServices');

class UserController {
  static async store(req, res) {
    const { body } = req;
    const schema = yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required(),
    });

    try {
      await schema.validate(body);
      const user = await UserService.findByEmail(body.email);
      if (!user) {
        return res.status(404).send({ Error: 'User not found!' });
      }

      const passwordHash = CryptoJS.HmacSHA256(
        `${body.password}`,
        process.env.CRYPTO_KEY
      ).toString();

      if (passwordHash !== user.passwordHash) {
        return res.status(401).send({ Error: 'Invalid email/password!' });
      }

      return res.status(200).send({
        user: user.name,
        email: user.email,
        token: jwt.sign(
          { id: user._id, role: user.role },
          process.env.SECRET_KEY,
          { expiresIn: '4h' }
        ),
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}

module.exports = UserController;
