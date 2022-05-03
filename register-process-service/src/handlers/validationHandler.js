const yup = require('yup');
const CryptoJS = require('crypto-js');
const UserService = require('../services/userServices');
const NotifierService = require('../services/notifierService');

class ValidationHandler {
  static async validate({ template, userId }) {
    setTimeout(() => {
      body.notification = {
        type: 'email',
        template: template,
      };

      NotifierService.send(body);
    }, 30000);

    return res.status(200).json({
      messsage: 'User validated!',
      userId: userId,
    });
  }
}

module.exports = ValidationHandler;
