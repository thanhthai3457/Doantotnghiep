'use strict'
//muon dung object thi Joi phai khai bao la const chu k import
//neu import phai nho lenh
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const NhaCungCapVal = {
    save: {
        payload:{
            _id: Joi.string(),
            tenNCC: Joi.string().required(),
            diaChi: Joi.string().required(),
            sDT: Joi.string().required(),
            hinhAnhs: Joi.object().required()
        }
    },
    options:{
        allowUnknown: true
    }
}
export default {...NhaCungCapVal}