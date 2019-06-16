'use strict'

import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const HangHoaSchema = new Schema(schema, options)

HangHoaSchema.virtual('ctphieunhaps',{
  ref: 'PhieuNhap',
  localField: '_id',
  foreignField: 'ctPhieuNhaps.item',
})

HangHoaSchema.virtual('ctphieubans',{
  ref: 'PhieuBan',
  localField: '_id',
  foreignField: 'ctPhieuBans.item',
})

export default mongoose.model('HangHoa', HangHoaSchema)