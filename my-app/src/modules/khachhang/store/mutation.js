function loadDsKhachHang(state, data){
  state.khachhangs = data
}

function updateDsKhachHang(state, data){
  let index = state .khachhangs.findIndex(item => item._id === data._id)
  if(index !==1){
    state.khachhangs[index] = data
    state.khachhangs = [...state.khachhangs]
  }
  else
  {
    state.khachhangs = [...state.khachhangs, ...[data]]
  }
}


export default {
  loadDsKhachHang,
  updateDsKhachHang
}