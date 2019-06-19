function loadDsMatHang(state, data){
  state.mathangs = data
}

function updateDsMatHang(state, data){
  let index = state .mathangs.findIndex(item => item._id === data._id)
  if(index !==1){
    state.mathangs[index] = data
    state.mathangs = [...state.mathangs]
  }
  else
  {
    state.mathangs = [...state.mathangs, ...[data]]
  }
}


export default {
  loadDsMatHang,
  updateDsMatHang
}