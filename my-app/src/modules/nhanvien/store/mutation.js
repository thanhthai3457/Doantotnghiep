function loadDsNhanVien(state, data){
  state.nhanviens = data
}

function updateDsNhanVien(state, data){
  let index = state .nhanviens.findIndex(item => item._id === data._id)
  if(index !==1){
    state.nhanviens[index] = data
    state.nhanviens = [...state.nhanviens]
  }
  else
  {
    state.nhanviens = [...state.nhanviens, ...[data]]
  }
}


export default {
  loadDsNhanVien,
  updateDsNhanVien
}