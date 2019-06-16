import {Schema} from 'mongoose'

const schema = {
  loaiHangHoaID: {
    type: Schema.Types.ObjectId,
    ref: 'LoaiHangHoa'
  },
  nhaCungCap:[{
    nhaCungCapID: {
      type: Schema.Types.ObjectId,
      ref: 'NhaCungCap'
    },
    soLuong: Number
  }],
  tenHangHoa: String,
  danhPhap: String,
  donViTinh: String,
  trongLuong: Number,
  tongSoLuong: Number,
}

const options = {
  collection: 'hanghoas',
  timestamps: true
}

export {schema, options}