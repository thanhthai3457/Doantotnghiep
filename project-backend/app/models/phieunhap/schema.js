import {Schema} from 'mongoose'
import { truncate } from 'fs';

const schema = {
  tenPhieu: String,
  ngayLap: {
    type: Date,
    default: Date.now()
  },
  thanhTien: Number,
  nhaCungCapID: {type: Schema.Types.ObjectId, ref: 'NhaCungCap'},
  ctPhieuNhaps: [{
    item: {
      type: Schema.Types.ObjectId,
      ref: 'HangHoa'
    },
    donViTinh: String,
    soLuong: Number,
    donGia: Number,
  }]
}

const options = {
  collection: 'phieunhapds',
  timestamps: true
}

export {schema, options}