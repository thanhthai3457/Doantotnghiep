'use strict'

import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const PhieuBanSchema = new Schema(schema, options)

export default mongoose.model('PhieuBan', PhieuBanSchema)