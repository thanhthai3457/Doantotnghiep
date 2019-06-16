import LoaiMatHangService from '../service'

const getDsLoaiMatHang = async (context) =>{
  let {data} = await LoaiMatHangService.getDsLoaiMatHang()
  context.commit('loadDsLoaiMatHang', data)
}

const addLoaiMatHang = async (context, payload) =>{
  let {data} = await LoaiMatHangService.addLoaiMatHang(payload)
  context.commit('updateDsLoaiMatHang', data)
}

export default {
  getDsLoaiMatHang, addLoaiMatHang
}