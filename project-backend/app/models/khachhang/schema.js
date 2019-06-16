import {Schema} from 'mongoose'
import { truncate } from 'fs';

const schema = {
  tenKH: String,
  mST: String,
  sDT: String,
  diaChi: String,
  email: String,
  congNo: Number,
}

const options = {
  collection: 'khachhangs',
  timestamps: true
}

export {schema, options}