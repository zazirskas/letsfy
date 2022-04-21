const mongoose = require('mongoose');

class User {
  static getConnection() {
    const connection = mongoose.connection;

    return connection.db.collection('users');
  }
}

module.exports = User;
