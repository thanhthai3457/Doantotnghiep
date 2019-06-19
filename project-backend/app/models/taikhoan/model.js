'use strict'

import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const TaiKhoanSchema = new Schema(schema, options)

export default mongoose.model('TaiKhoan', TaiKhoanSchema)