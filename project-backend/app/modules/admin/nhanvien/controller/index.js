'use strict'

import mongoose from 'mongoose'

const NhanVien = mongoose.model('NhanVien')

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
            item = await NhanVien.create(data)
        } else {
            item = await NhanVien.findByIdAndUpdate(data._id, {
                tenNhanVien: data.tenNhanVien,
                chucVu: data.chucVu,
                sDT: data.sDT,
                luong: data.luong,
            })
        }
        return item
    } catch (error) {
        throw (error)
    }
}


const Delete = async (request, h) => {
    return await NhanVien.findOneAndRemove({ _id: request.params.id })
}

const get = async (request, h) =>{
    return await NhanVien.find()
}

const getByid = async (request, h) => {
    return await NhanVien.findById({ _id: request.params.id })
}

export default { save, get, getByid, Delete }