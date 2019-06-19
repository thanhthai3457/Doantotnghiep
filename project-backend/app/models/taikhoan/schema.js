import {Schema} from 'mongoose'

const schema = {
  tenTK: String,
  matKhau: String,
}

const options = {
  collection: 'taikhoans',
  timestamps: true
}

export {schema, options}