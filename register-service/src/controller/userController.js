const yup = require('yup');
const CryptoJS = require('crypto-js');
const UserService = require('../services/userServices');
const QueueService = require('../services/queueService');

class UserController {
  static async store(req, res) {
    const { body } = req;
    const schema = yup.object().shape({
      name: yup.string().required(),
      cpf: yup.string().required(),
      birthday: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required(),
      phone: yup.string().required(),
      role: yup.string().required(),
      driverLicense: yup.string().when('role', {
        is: (role) => role.toLowerCase() === 'driver',
        then: yup.string().required('Driver required'),
      }),
      model: yup.string().when('role', {
        is: (role) => role.toLowerCase() === 'driver',
        then: yup.string().required('Driver required'),
      }),
      manufacturer: yup.string().when('role', {
        is: (role) => role.toLowerCase() === 'driver',
        then: yup.string().required('Driver required'),
      }),
      plate: yup.string().when('role', {
        is: (role) => role.toLowerCase() === 'driver',
        then: yup.string().required('Driver required'),
      }),
    });

    try {
      await schema.validate(body);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }

    body.passwordHash = CryptoJS.HmacSHA256(
      `${body.password}`,
      'lets-code'
    ).toString();

    delete body.password;

    const user = await UserService.insert(body);

    body.notification = {
      type: 'email',
      template: 'register-confirmation',
    };

    QueueService.send(process.env.NOTIFICATION_QUEUE, body);
    QueueService.send(process.env.REGISTER_PROCESS_QUEUE, body);

    return res.status(200).json({
      messsage: 'User created!',
      userId: user.id,
    });
  }
}

module.exports = UserController;
