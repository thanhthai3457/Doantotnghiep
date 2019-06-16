import Axios from 'axios'

const getDsNhanVien = async () =>{
  let {data} = await Axios.get('http://localhost:9002/api/thanh/get-nhanvien')
  return data
}

const addNhanVien = async (payload)=>{
  return await Axios.post('http://localhost:9002/api/thanh/nhanvien', payload)
}

export default {
  getDsNhanVien,
  addNhanVien
}