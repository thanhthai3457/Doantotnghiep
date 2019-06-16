function loadDsNhaCungCap(state, data){
  state.nhacungcaps = data
}

function updateDsNhaCungCap(state, data){
  let index = state .nhacungcaps.findIndex(item => item._id === data._id)
  if(index !==1){
    state.nhacungcaps[index] = data
    state.nhacungcaps = [...state.nhacungcaps]
  }
  else
  {
    state.nhacungcaps = [...state.nhacungcaps, ...[data]]
  }
}


export default {
  loadDsNhaCungCap,
  updateDsNhaCungCap
}