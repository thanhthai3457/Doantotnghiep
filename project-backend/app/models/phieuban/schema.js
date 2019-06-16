import {Schema} from 'mongoose'
import { truncate } from 'fs';

const schema = {
  tenPhieu: String,
  ngayLap: {
    type: Date,
    default: Date.now()
  },
  thanhTien: Number,
  khachHangID: {
    type: Schema.Types.ObjectId, 
    ref: 'KhachHang'
  },
  nhanVienID: {
    type: Schema.Types.ObjectId, 
    ref: 'NhanVien'
  },
  ctPhieuBans: [{
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
  collection: 'phieubands',
  timestamps: true
}

export {schema, options}