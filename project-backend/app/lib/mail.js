"use strict";

const nodemailer = require("nodemailer")

const sendMail = async (options) => {
  console.log('bo day mail')  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'ngocthu34571@gmail.com', // generated ethereal user
      pass: 'toilatoi123' // generated ethereal password
    }
  })
  let optionsMail = {
    from: '"Fred Foo 👻" <ngocthu34571@gmail.com>', // sender address
    to: 'thanhthai3457@gmail.com', // list of receivers
    subject: options.subject, // Subject line
    text: options.text, // plain text body
    html: options.content // html body
  }
  // send mail with defined transport object
  await transporter.sendMail(optionsMail, function (err, res) {
    if(err) {
      console.log('Loi gui mail', err);
    } else {
      console.log("Message sent: %s", res.messageId)
    }
  })

}

export default {
  sendMail,
}  
