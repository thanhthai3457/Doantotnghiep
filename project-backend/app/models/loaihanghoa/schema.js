import {Schema} from 'mongoose'

const schema = {
  tenLoai: String,
  dienGiai: String,
  hinhAnhs: String,
}

const options = {
  collection: 'loaihanghoas',
  timestamps: true
}

export {schema, options}