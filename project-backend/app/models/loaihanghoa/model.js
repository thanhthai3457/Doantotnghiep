'use strict'

import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const LoaiHangHoaSchema = new Schema(schema, options)

LoaiHangHoaSchema.virtual('dshanghoas',{
  ref: 'HangHoa',
  localField: '_id',
  foreignField: 'loaiHangHoaID',
})

export default mongoose.model('LoaiHangHoa', LoaiHangHoaSchema)