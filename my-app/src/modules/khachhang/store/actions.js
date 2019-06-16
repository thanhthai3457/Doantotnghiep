import KhachHangService from '../service'

const getDsKhachHang = async (context) =>{
  let {data} = await KhachHangService.getDsKhachHang()
  context.commit('loadDsKhachHang', data)
}

const addKhachHang = async (context, payload) =>{
  let {data} = await KhachHangService.addKhachHang(payload)
  context.commit('updateDsKhachHang', data)
}

export default {
  getDsKhachHang, addKhachHang
}