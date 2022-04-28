const nodemailer = require("nodemailer");
const emailTemplate = require('../Templates/emailTemplate')

// async..await is not allowed in global scope, must use a wrapper
async function main(email, notification) {

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: `${process.env.EMAIL_ADDRESS}`,
      pass: `${process.env.EMAIL_PASSWORD}`
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${process.env.USER_EMAIL}`, // sender address
    to: `${email}`, // list of receivers
    subject: `${emailTemplate[notification.template].title}`, // Subject line
    html: `<b>${emailTemplate[notification.template].text}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}


module.exports = main