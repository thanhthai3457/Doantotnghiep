'use strict'

import { join } from 'path';

//muon dung object thi Joi phai khai bao la const chu k import
//neu import phai nho lenh
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const NhanVienVal = {
    save: {
        payload:{
            _id: Joi.string(),
            tenNhanVien: Joi.string().required(),
            chucVu: Joi.string().required(),
            sDT: Joi.string().required(),
            luong: Joi.number().required(),
        }
    },
    options:{
        allowUnknown: true
    }
}
export default {...NhanVienVal}