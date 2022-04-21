const User = require('../models/user');

class UserView {
  static async findByEmail(email) {
    const userModel = User.getConnection();
    return await userModel.findOne({ email });
  }
}

module.exports = UserView;
