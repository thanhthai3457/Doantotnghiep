import Joi from 'joi'
Joi.ObjectId = require('joi-objectid')(Joi)


const phieuNhapVal = {
  save: {
    payload:{
        _id: Joi.string(),
        tenPhieu: Joi.string().required(),
        ngayLap: Joi.date().required(),
        nhaCungCapID: Joi.object().required(),
        thanhTien: Joi.number(),
    }
  },
  options:{
    allowUnknown: true
  }
}



export default phieuNhapVal