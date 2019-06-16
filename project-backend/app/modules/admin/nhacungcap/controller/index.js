'use strict'

import mongoose from 'mongoose'

const NhaCungCap = mongoose.model('NhaCungCap')

const save = async (request, h) => {
    try {
        let data = request.payload
        console.log('data',data);
        //tách img bên payload form thành image và base64
        let base64 = data && data.hinhAnhs && data.hinhAnhs.imageUrl
        //convert base64 to image------------------------------------------------
        if (base64 && base64.match(/data(.*?)base64,/)) {
            // data.hinhAnhs.imageURL = "app/lib/img/" + data.hinhAnhs.image
            let base64Data = base64.replace(/data(.*?)base64,/, "");
            require("fs").writeFile("app/lib/img/" + data.hinhAnhs.image, base64Data, 'base64', function (err) {
            });
            data.hinhAnhs = data.hinhAnhs.image
        }
        //--------------------------------------------------------------------------
        let item
        if (!data._id) {
            item = await NhaCungCap.create(data)
        } else {
            item = await NhaCungCap.findByIdAndUpdate(data._id, {
                tenNCC: data.tenNCC,
                diaChi: data.diaChi,
                sDT: data.sDT,
                hinhAnhs: data.hinhAnhs
            })
        }
        return item
    } catch (error) {
        throw (error)
    }
}



const Delete = async (request, h) => {
    return await NhaCungCap.findOneAndRemove({ _id: request.params.id })
}

// const get = async (request, h) =>{
//     return await NhaCungCap.find()
// }

const get = async (request, h) =>{
    return await NhaCungCap.find()
}

const getByid = async (request, h) => {
    return await NhaCungCap.findById({ _id: request.params.id })
}

export default { save, get, getByid, Delete }