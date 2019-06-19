import Mongoose from 'mongoose'
import Boom from 'boom'
const TaiKhoan = Mongoose.model('TaiKhoan')
import jwt from 'jsonwebtoken'
import aguid from 'aguid'
import { request, Server } from 'http';

const save = async (req, h) => {
  try {
    let data = req.payload
    let item = new TaiKhoan(data)
    await item.save()
    return item
  } catch (error) {
    return Boom.forbidden(error)
  }
}

const getDsTaiKhoan = async () => {
  try {
    let dsTaiKhoan = await TaiKhoan.find()
    return dsTaiKhoan
  } catch (error) {
    return Boom.forbidden(error)
  }
}
const login = async (request, h) => {
  try {
    let data = request.payload
    let getUser = await TaiKhoan.findOne({tenTK: data.tenTK})
    let credentials = {}
    let isValid = false
    if(getUser) {
      credentials = {tenTK:getUser.tenTK}
      console.log('user', getUser);
      if(data.matKhau === getUser.matKhau) {
        let session = {
          valid: true,
          id: aguid(),
          expires: new Date().getTime() + 30 * 60 * 1000,
          credentials
        }
        isValid = true
        request.server.redis.set(session.id, JSON.stringify(session))
        let token = jwt.sign(session, global.CONFIG.get('web.key'))
        return h.response({auth: true, credentials, isValid, token}).header('Authorization', token) 
      } else {
        return {credentials, isValid}
      }
    } else {
      return {credentials, isValid}
    }
  } catch (err) {
    return Boom.forbidden(err)
  }
}

export default {
  save,
  getDsTaiKhoan,
  login
}