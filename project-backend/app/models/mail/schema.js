import {Schema} from 'mongoose'

const schema = {
  tenNguoiGui: String,
  email: String,
  sDT: String,
  fax: String,
  noiDung: String
}

const options = {
  collection: 'mails',
  timestamps: true
}

export {schema, options}