'use strict'

import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const PhieuNhapSchema = new Schema(schema, options)

export default mongoose.model('PhieuNhap', PhieuNhapSchema)