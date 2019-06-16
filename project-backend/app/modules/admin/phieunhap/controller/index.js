import Mongoose from 'mongoose'
import Boom from 'boom'
const PhieuNhap = Mongoose.model('PhieuNhap')

const save = async (request, h) => {
  try {
      let data = request.payload
      //--------------------------------------------------------------------------
      let item
      if (!data._id) {
          item = new PhieuNhap(data)
          await item.save()
      } else {
          item = await PhieuNhap.findByIdAndUpdate(data._id, { 
              tenPhieu: data.tenPhieu,
              ngayLap: data.ngayLap,
              nhaCungCapID: data.nhaCungCapID._id,
              thanhTien: data.thanhTien
          })
      }
      // console.log('da', data);
      return item
  } catch (error) {
      throw (error)
  }
}


const getPhieuNhapByNCC = async (request, h) => {
  try {
    let data = request.payload
    // let PhieuNhap = {tenPhieuNhap:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCapID:[data.idNCC],loaiPhieuNhapID: data.idLoaiHang}
    // let newPhieuNhap = new PhieuNhap(PhieuNhap)
    // await newPhieuNhap.save()

    // let PhieuNhap = {tenPhieuNhap:'thep',danhPhap:'a',donViTinh:'ký',trongLuong:'10',tongSoLuong:100,nhaCungCap:[{nhaCungCapID:data.idNCC, soLuong:20}],loaiPhieuNhapID: data.idLoaiHang}
    // let newPhieuNhap = new PhieuNhap(PhieuNhap)
    // await newPhieuNhap.save()

    let dsPhieuNhap =  await PhieuNhap.find({'nhaCungCap.nhaCungCapID':data.idNCC}).populate(['nhaCungCap.nhaCungCapID']).lean() || Boom.notFound()
    console.log('da',dsPhieuNhap);
    return dsPhieuNhap
    //  return newPhieuNhap
  } catch (err) {
    return Boom.forbidden(err)
  }
}

const getPhieuNhap = async (request, h) => {
  try {
    let dsPhieuNhap =  await PhieuNhap.find().populate(['nhaCungCapID']).lean() || Boom.notFound()
    return dsPhieuNhap
  } catch (err) {
    return Boom.forbidden(err)
  }
}

const Delete = async (request, h) => {
  return await PhieuNhap.findOneAndRemove({ _id: request.params.id })
}

const getPhieuNhapByid = async (request, h) => {
  return await PhieuNhap.findById({ _id: request.params.id })
}

export default {
  getPhieuNhapByNCC,
  getPhieuNhap,
  Delete,
  getPhieuNhapByid,
  save
}