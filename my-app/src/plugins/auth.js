let isLogin = (to, from, next) => {
  if(localStorage.getItem('token')) {
    next()
  } else {
    next('/login.html')
  }
}

export default {
  isLogin
}