import NhanVienService from '../service'

const getDsNhanVien = async (context) =>{
  let {data} = await NhanVienService.getDsNhanVien()
  context.commit('loadDsNhanVien', data)
}

const addNhanVien = async (context, payload) =>{
  let {data} = await NhanVienService.addNhanVien(payload)
  context.commit('updateDsNhanVien', data)
}

export default {
  getDsNhanVien, addNhanVien
}