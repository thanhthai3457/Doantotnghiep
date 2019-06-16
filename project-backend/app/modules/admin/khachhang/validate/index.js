'use strict'

import { join } from 'path';

//muon dung object thi Joi phai khai bao la const chu k import
//neu import phai nho lenh
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const KhachHangVal = {
    save: {
        payload:{
            _id: Joi.string(),
            tenKH: Joi.string().required(),
            mST: Joi.string(),
            sDT: Joi.string().required(),
            diaChi: Joi.string().required(),
            email: Joi.string().required(),
            congNo: Joi.number(),
        }
    },
    options:{
        allowUnknown: true
    }
}
export default {...KhachHangVal}