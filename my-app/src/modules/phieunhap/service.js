import Axios from 'axios'

const getDsPhieuNhap = async () =>{
  let {data} = await Axios.get(`${window.apiUrl}/thanh/get-phieunhap`)
  return data
}

const addPhieuNhap = async (payload)=>{
  let {data} =  await Axios.post(`${window.apiUrl}/thanh/phieunhap`, payload)
  return data
}

export default {
  getDsPhieuNhap,
  addPhieuNhap
}