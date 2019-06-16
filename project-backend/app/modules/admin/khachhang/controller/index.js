'use strict'

import mongoose from 'mongoose'

const KhachHang = mongoose.model('KhachHang')

const save = async (request, h) => {
    try {
        let data = request.payload
        // //tách img bên payload form thành image và base64
        // let base64 = data && data.hinhAnhs && data.hinhAnhs.imageURL
        // //convert base64 to image------------------------------------------------
        // if (base64 && base64.match(/data(.*?)base64,/)) {
        //     // data.hinhAnhs.imageURL = "app/lib/img/" + data.hinhAnhs.image
        //     let base64Data = base64.replace(/data(.*?)base64,/, "");
        //     require("fs").writeFile("app/lib/img/" + data.hinhAnhs.image, base64Data, 'base64', function (err) {
        //     });
        //     data.hinhAnhs = data.hinhAnhs.image
        //}
        //--------------------------------------------------------------------------
        let item
        if (!data._id) {
            item = await KhachHang.create(data)
        } else {
            item = await KhachHang.findByIdAndUpdate(data._id, {
                tenKH: data.tenKH,
                mST: data.mST,
                sDT: data.sDT,
                diaChi: data.diaChi,
                email: data.email,
                congNo: data.congNo,
            })
        }
        return item
    } catch (error) {
        throw (error)
    }
}


const Delete = async (request, h) => {
    return await KhachHang.findOneAndRemove({ _id: request.params.id })
}

const get = async (request, h) =>{
    return await KhachHang.find()
}

const getByid = async (request, h) => {
    return await KhachHang.findById({ _id: request.params.id })
}

export default { save, get, getByid, Delete }