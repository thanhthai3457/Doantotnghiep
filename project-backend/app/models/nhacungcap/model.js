
import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const NhaCungCapSchema = new Schema(schema, options)

NhaCungCapSchema.virtual('dsphieunhaps',{
  ref: 'PhieuNhap',
  localField: '_id',
  foreignField: 'nhaCungCapID'
})

// LoaiHangHoaSchema.virtual('dshanghoas',{
//   ref: 'HangHoa',
//   localField: '_id',
//   foreignField: 'loaiHangHoaID',
// })

NhaCungCapSchema.virtual('dsCungCapHangHoas',{
  ref: 'HangHoa',
  localField: '_id',
  foreignField: 'NhaCungCapID',
})
export default mongoose.model('NhaCungCap', NhaCungCapSchema)