function loadDsLoaiMatHang(state, data){
  state.loaimathangs = data
}

function updateDsLoaiMatHang(state, data){
  let index = state .loaimathangs.findIndex(item => item._id === data._id)
  if(index !==1){
    state.loaimathangs[index] = data
    state.loaimathangs = [...state.loaimathangs]
  }
  else
  {
    state.loaimathangs = [...state.loaimathangs, ...[data]]
  }
}


export default {
  loadDsLoaiMatHang,
  updateDsLoaiMatHang
}