import Joi from 'joi'
Joi.ObjectId = require('joi-objectid')(Joi)


const usersVal = {
  save: {
    payload: {
      tenTK: Joi.string().required(),
      matKhau: Joi.string().required()
    }
  },
  login: {
    payload: {
      tenTK: Joi.string().required(),
      matKhau: Joi.string().required()
    }
  }
}



export default usersVal