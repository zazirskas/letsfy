const emailService = require('../services/email') 

class EmailHandler {
    static async send({ email, notification } ) {
        emailService(email, notification)
    }
}

module.exports = EmailHandler