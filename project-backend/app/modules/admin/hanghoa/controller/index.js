import Mongoose from 'mongoose'
import Boom from 'boom'
const HangHoa = Mongoose.model('HangHoa')

const save = async (request, h) => {
  console.log('a', request.payload);
  try {
      let data = request.payload
      
      //--------------------------------------------------------------------------
      let item
      if (!data._id) {
          item = new HangHoa(data)
          await item.save()
      } else {
          item = await HangHoa.findByIdAndUpdate(data._id, {
              loaiHangHoaID: data.loaiHangHoaID._id,
              tenHangHoa: data.tenHangHoa,
              danhPhap: data.danhPhap,
              donViTinh: data.donViTinh,
              trongLuong: data.trongLuong,
              tongSoLuong: data.tongSoLuong
          })
      }
      // console.log('da', data);
      return item
  } catch (error) {
      throw (error)
  }
}

const getLoaiHangHoaByHangHoa = async (request, h) => {
  try {
    let data = request.payload

    let dsHangHoa =  await HangHoa.find({_id:data.idMatHang}).populate(['loaiHangHoaID']).lean() || Boom.notFound()
    console.log('da',dsHangHoa);
    return dsHangHoa
    //  return newHangHoa
  } catch (err) {
    return Boom.forbidden(err)
  }
}

const getHangHoaByNCCvaLoaiHang = async (request, h) => {
  try {
    let data = request.payload
    // let hanghoa = {tenHangHoa:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCapID:[data.idNCC],loaiHangHoaID: data.idLoaiHang}
    // let newHangHoa = new HangHoa(hanghoa)
    // await newHangHoa.save()

    // let hanghoa = {tenHangHoa:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCap:[{nhaCungCapID:data.idNCC, soLuong:20}],loaiHangHoaID: data.idLoaiHang}
    // let newHangHoa = new HangHoa(hanghoa)
    // await newHangHoa.save()

    let dsHangHoa =  await HangHoa.find({'nhaCungCap.nhaCungCapID':data.idNCC, loaiHangHoaID:data.idLoaiHang}).populate(['nhaCungCap.nhaCungCapID', 'loaiHangHoaID']).lean() || Boom.notFound()
    console.log('da',dsHangHoa);
    return dsHangHoa
    //  return newHangHoa
  } catch (err) {
    return Boom.forbidden(err)
  }
}

const getHangHoaByNCC = async (request, h) => {
  try {
    let data = request.payload
    // let hanghoa = {tenHangHoa:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCapID:[data.idNCC],loaiHangHoaID: data.idLoaiHang}
    // let newHangHoa = new HangHoa(hanghoa)
    // await newHangHoa.save()

    // let hanghoa = {tenHangHoa:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCap:[{nhaCungCapID:data.idNCC, soLuong:20}],loaiHangHoaID: data.idLoaiHang}
    // let newHangHoa = new HangHoa(hanghoa)
    // await newHangHoa.save()

    let dsHangHoa =  await HangHoa.find({'nhaCungCap.nhaCungCapID':data.idNCC}).populate(['nhaCungCap.nhaCungCapID']).lean() || Boom.notFound()
    console.log('da',dsHangHoa);
    return dsHangHoa
    //  return newHangHoa
  } catch (err) {
    return Boom.forbidden(err)
  }
}

const getHangHoa = async (request, h) => {
  try {
    // let data = request.payload

    // let hanghoa = {tenHangHoa:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCap:[{nhaCungCapID:data.idNCC, soLuong:20}],loaiHangHoaID: data.idLoaiHang}
    // let newHangHoa = new HangHoa(hanghoa)
    // await newHangHoa.save()

    let dsHangHoa =  await HangHoa.find().populate(['loaiHangHoaID']).lean() || Boom.notFound()
    return dsHangHoa
    //  return newHangHoa
  } catch (err) {
    return Boom.forbidden(err)
  }
}

const Delete = async (request, h) => {
  return await HangHoa.findOneAndRemove({ _id: request.params.id })
}

const getHangHoaByid = async (request, h) => {
  return await HangHoa.findById({ _id: request.params.id })
}

export default {
  getHangHoaByNCCvaLoaiHang,
  getHangHoaByNCC,
  getHangHoa,
  Delete,
  getHangHoaByid,
  save,
  getLoaiHangHoaByHangHoa
}