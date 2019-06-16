import PhieuNhapService from '../service'

const getDsPhieuNhap = async (context) =>{
  let {data} = await PhieuNhapService.getDsPhieuNhap()
  context.commit('loadDsPhieuNhap', data)
}

const addPhieuNhap = async (context, payload) =>{
  let {data} = await PhieuNhapService.addPhieuNhap(payload)
  context.commit('updateDsPhieuNhap', data)
}

export default {
  getDsPhieuNhap, addPhieuNhap
}