import {Schema} from 'mongoose'
import { truncate } from 'fs';

const schema = {
  tenNhanVien: String,
  chucVu: String,
  sDT: String,
  luong: Number,
}

const options = {
  collection: 'nhanviens',
  timestamps: true
}

export {schema, options}