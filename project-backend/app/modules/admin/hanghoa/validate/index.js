import Joi from 'joi'
Joi.ObjectId = require('joi-objectid')(Joi)


const hangHoaVal = {
  byNCCvaLoaiHang : {
    payload: {
      idNCC: Joi.ObjectId().required(),
      idLoaiHang: Joi.ObjectId().required()
    }
  },
  byMatHangvaLoaiHang : {
    payload: {
      idMatHang: Joi.ObjectId().required()
    }
  },
  byNCC : {
    payload: {
      idNCC: Joi.ObjectId().required()
    }
  },
  byidvadelete : {
    payload: {
      id: Joi.ObjectId().required()
    }
  },
  save: {
    payload:{
        _id: Joi.ObjectId(),
        loaiHangHoaID: Joi.object().required(),
        tenHangHoa: Joi.string().required(),
        danhPhap: Joi.string().required(),
        donViTinh: Joi.string().required(),
        trongLuong: Joi.number().required(),
        tongSoLuong: Joi.number()
    },
    options: {
      allowUnknown: true
    }
  },
  options:{
    allowUnknown: true
  }
}



export default hangHoaVal