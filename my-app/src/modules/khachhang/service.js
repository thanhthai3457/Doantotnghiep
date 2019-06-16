import Axios from 'axios'

const getDsKhachHang = async () =>{
  let {data} = await Axios.get('http://localhost:9002/api/thanh/get-khachhang')
  return data
}

const addKhachHang = async (payload)=>{
  return await Axios.post('http://localhost:9002/api/thanh/khachhang', payload)
}

export default {
  getDsKhachHang,
  addKhachHang
}