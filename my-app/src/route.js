import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// components admin
import Admin from './views/Admin/index.vue'
import LoaiMatHangRoute from './modules/loaimathang/index.js'
import KhachHangRoute from './modules/khachhang/index.js'
import NhanVienRoute from './modules/nhanvien/index.js'
import NhaCungCapRoute from './modules/nhacungcap/index.js'
import MatHangRoute from './modules/hanghoa/index.js'
import PhieuNhapRoute from './modules/phieunhap/index.js'
import DashboardRoute from './modules/dashboard/index.js'

// components client
import Client from './views/Client/index.vue'
import Login from './views/Login/index.vue'
import CheckLogin from './plugins/auth.js'
export default new Router({
  mode: 'history',
  routes: [
      {
       path:'/',
       name:'client',
       component: Client,
      //  children:[
    
      //  ] 
      }, 
      {
        path:'/login.html',
        name: 'login',
        component: Login
      },
      {
        path: '/admin',
        name: 'admin',
        beforeEnter: CheckLogin.isLogin,
        component: Admin,
        children: [
          ...LoaiMatHangRoute,
          ...KhachHangRoute,
          ...NhanVienRoute,
          ...NhaCungCapRoute,
          ...MatHangRoute,
          ...PhieuNhapRoute,
          ...DashboardRoute,
        ]
      }
  ]
}) 