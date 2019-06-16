import {Schema} from 'mongoose'

const schema = {
  tenNCC: String,
  diaChi: String,
  sDT: String,
  hinhAnhs: String
}

const options = {
  collection: 'nhacungcaps',
  timestamps: true
}

export {schema, options}