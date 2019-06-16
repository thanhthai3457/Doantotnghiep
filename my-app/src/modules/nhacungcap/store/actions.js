import NhaCungCapService from '../service'

const getDsNhaCungCap = async (context) =>{
  let {data} = await NhaCungCapService.getDsNhaCungCap()
  context.commit('loadDsNhaCungCap', data)
}

const addNhaCungCap = async (context, payload) =>{
  let {data} = await NhaCungCapService.addNhaCungCap(payload)
  context.commit('updateDsNhaCungCap', data)
}

export default {
  getDsNhaCungCap, addNhaCungCap
}