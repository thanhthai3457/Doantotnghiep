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

// components client
import Client from './views/Client/index.vue'

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
        path: '/admin',
        name: 'admin',
        component: Admin,
        children: [
          ...LoaiMatHangRoute,
          ...KhachHangRoute,
          ...NhanVienRoute,
          ...NhaCungCapRoute,
          ...MatHangRoute,
          ...PhieuNhapRoute,
        ]
      }
  ]
}) 