const yup = require("yup");
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
    // If driver role some fields are required
    
		const user = await UserService.insert(body);

		return res.status(200).json({
			messsage: "User created!",
			userId: user.id,
		});
	}
}

module.exports = UserController;
