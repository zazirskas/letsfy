const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: String,
		cpf: String,
		birthday: String,
		email: String,
		passwordHash: String,
		phone: String,
		verified: { type: Boolean, default: false },
		role: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('users', UserSchema);
