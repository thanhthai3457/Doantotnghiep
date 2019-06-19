
import mongoose, {Schema} from 'mongoose'
import {schema, options} from './schema'

const MailSchema = new Schema(schema, options)

export default mongoose.model('Mail', MailSchema)