'use strict'

import { join } from 'path';

//muon dung object thi Joi phai khai bao la const chu k import
//neu import phai nho lenh
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const LoaiHangHoaVal = {
    save: {
        payload:{
            _id: Joi.string(),
            tenLoai: Joi.string().required(),
            dienGiai: Joi.string().required(),
            hinhAnhs: Joi.object().required()
        }
    },
    options:{
        allowUnknown: true
    }
}
export default {...LoaiHangHoaVal}