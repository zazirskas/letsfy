const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
	{
		cpf: String,
    driverLicense: String,
    vehicle: {
      model: String,
      manufacturer: String,
      plate: String,
    }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('drivers', driverSchema);
