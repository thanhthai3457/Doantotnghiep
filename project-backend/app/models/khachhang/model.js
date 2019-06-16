'use strict'

import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const KhachHangSchema = new Schema(schema, options)

KhachHangSchema.virtual('dsphieubans',{
  ref: 'PhieuBan',
  localField: '_id',
  foreignField: 'khachHangID'
})

export default mongoose.model('KhachHang', KhachHangSchema)