function loadDsPhieuNhap(state, data){
  state.phieunhaps = data
}

function updateDsPhieuNhap(state, data){
  let index = state .phieunhaps.findIndex(item => item._id === data._id)
  if(index !==1){
    state.phieunhaps[index] = data
    state.phieunhaps = [...state.phieunhaps]
  }
  else
  {
    state.phieunhaps = [...state.phieunhaps, ...[data]]
  }
}


export default {
  loadDsPhieuNhap,
  updateDsPhieuNhap
}