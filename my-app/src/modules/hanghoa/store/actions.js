import MatHangService from '../service'

const getDsMatHang = async (context) =>{
  let {data} = await MatHangService.getDsMatHang()
  context.commit('loadDsMatHang', data)
}

const addMatHang = async (context, payload) =>{
  let {data} = await MatHangService.addMatHang(payload)
  context.commit('updateDsMatHang', data)
}

export default {
  getDsMatHang, addMatHang
}