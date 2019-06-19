import Joi from 'joi'
Joi.ObjectId = require('joi-objectid')(Joi)


const hangHoaVal = {
  sendMail : {
    payload: {
      email: Joi.string().required(),
      tenNguoiGui: Joi.string().required(),
      noiDung: Joi.string().required(),
      sDT: Joi.string().required(),
    },
    options:{
      allowUnknown: true
    }
  },
  
}



export default hangHoaVal