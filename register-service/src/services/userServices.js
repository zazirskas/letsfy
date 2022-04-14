const User = require("../models/user");

class UserService {
	static async insert(user) {
		return await User.create(user);
	}

	static async get(id) {
		return await User.findById(id);
	}

	static async userExists(cpf) {
		const user = await User.findOne({ where: { cpf } });
		return user ? true : false;
	}
}

module.exports = UserService;
