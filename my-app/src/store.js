import Vue from 'vue'
import Vuex from 'vuex'
import LoaiMatHang from './modules/loaimathang/store/index.js'
import KhachHang from './modules/khachhang/store/index.js'
import NhanVien from './modules/nhanvien/store/index.js'
import NhaCungCap from './modules/nhanvien/store/index.js'
import HangHoa from './modules/hanghoa/index.js'
import PhieuNhap from './modules/phieunhap/index.js'
import Dashboard from './modules/dashboard/index.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:  {
        LoaiMatHang: LoaiMatHang,
        KhachHang: KhachHang,
        NhanVien: NhanVien,
        NhaCungCap: NhaCungCap,
        HangHoa: HangHoa,
        PhieuNhap: PhieuNhap,
        Dashboard: Dashboard
    }
})