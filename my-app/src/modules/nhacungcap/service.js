import Axios from 'axios'

const getDsNhaCungCap = async () =>{
  let {data} = await Axios.get('http://localhost:9002/api/thanh/get-nhacungcap')
  return data
}

const addNhaCungCap = async (payload)=>{
  let {data} =  await Axios.post('http://localhost:9002/api/thanh/nhacungcap', payload)
  return data
}

export default {
  getDsNhaCungCap,
  addNhaCungCap
}