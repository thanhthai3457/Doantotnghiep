import Axios from 'axios'

const getDsLoaiMatHang = async () =>{
  let {data} = await Axios.get('http://localhost:9002/api/thanh/get-loaihanghoa')
  return data
}

const addLoaiMatHang = async (payload)=>{
  let {data} =  await Axios.post('http://localhost:9002/api/thanh/loaihanghoa', payload)
  return data
}

export default {
  getDsLoaiMatHang,
  addLoaiMatHang
}