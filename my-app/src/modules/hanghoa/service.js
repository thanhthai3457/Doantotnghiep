import Axios from 'axios'

const getDsMatHang = async () =>{
  let {data} = await Axios.get('http://localhost:9002/api/thanh/get-hanghoa')
  return data
}

const addMatHang = async (payload)=>{
  return await Axios.post('http://localhost:9002/api/thanh/hanghoa', payload)
}

const getHangHoaByNCCvaLoaiHang = async (payload) => {
  try {
    return await Axios.post('http://localhost:9002/api/thanh/get-hanghoa-bynccvaloaihang', payload)
  } catch (err) {
    return err
  }
}

const getDsMatHangvaLoaiHang = async (payload) => {
  try {
    return await Axios.post('http://localhost:9002/api/thanh/hanghoavsloaihang', payload)
  } catch (err) {
    return err
  }
}

const getHangHoaByNCC = async (payload) => {
  try {
    return await Axios.post('http://localhost:9002/api/thanh/get-hanghoa-byncc', payload)
  } catch (err) {
    return err
  }
}

export default {
  getDsMatHang,
  addMatHang,
  getHangHoaByNCCvaLoaiHang,
  getHangHoaByNCC,
  getDsMatHangvaLoaiHang
}