const yup = require("yup");
const CryptoJS = require("crypto-js");
const UserService = require("../services/userServices");

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
		});
		if (!(await schema.isValid(body))) {
			return res.status(400).json({ error: "Validation error!" });
		}
		// Generate password hash from password
		const passwordHash = CryptoJS.HmacSHA256(
			`${body.password}`,
			"lets-code"
		).toString();
		// If driver role some fields are required
		if (body.role.toLowerCase() === "driver") {
			const driverSchema = yup.object({
				driverLicense: yup.string().required(),
				vehicle: yup.object({
						model: yup.string().required(),
						manufacturer: yup.string().required(),
						plate: yup.string().required(),
					})
					.required(),
			});
			if (!(await driverSchema.isValid(body))) {
				return res.status(400).json({ error: "Validation error!" });
			}
		}

		const user = await UserService.insert(body);

		return res.status(200).json({
			messsage: "User created!",
			userId: user.id,
		});
	}
}

module.exports = UserController;
