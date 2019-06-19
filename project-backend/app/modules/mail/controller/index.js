import Mongoose from 'mongoose'
import Boom from 'boom'
const Mail = Mongoose.model('Mail')
import SendMail from '../../../lib/mail.js'
import MailLienHe from '../../../lib/mailLienHe.js'
const sendMail = async (req, h) => {
  try {
    let data = req.payload
    let item
      if (!data._id) {
          item = new Mail(data)
          await item.save()
      }
      let options = {
        subject: 'Hello',
        text: 'Hello',
        content: await MailLienHe.mailLienHe(data)
      }
      await SendMail.sendMail(options)
    return item
  } catch (error) {
    return Boom.forbidden(error)
  }
}


export default {
  sendMail,
}