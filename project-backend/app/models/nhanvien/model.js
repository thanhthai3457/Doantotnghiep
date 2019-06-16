'use strict'

import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const NhanVienSchema = new Schema(schema, options)

NhanVienSchema.virtual('dsphieubans',{
  ref: 'PhieuBan',
  localField: '_id',
  foreignField: 'nhanVienID'
})


export default mongoose.model('NhanVien', NhanVienSchema)