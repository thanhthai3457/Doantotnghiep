

export default {
  props: {
    miniA: {
      type: Boolean
    },
  },
  data () {
    return {
      mini: true,
      items: [
        {
          action: 'storage',
          title: 'Loại hàng hóa',
          items: [
            { title: 'Các loại mặt hàng', link: '/admin/loaimathang.html' }
          ]
        },
        {
          action: 'assignment_ind',
          title: 'Nhà cung cấp',
          items: [
            { title: 'Danh sách nhà cung cấp', link: '/admin/nhacungcap.html' }
          ]
        },
        {
          action: 'table_chart',
          title: 'Hàng hóa',
          active: true,
          items: [
            { title: 'Danh sách hàng hóa', link: '/admin/mathang.html'},
          ]
        },
        {
          action: 'library_books',
          title: 'Nhập hàng',
          items: [
            { title: 'Danh sách phiếu nhập', link: '/admin/phieunhap.html' }
          ]
        },
        {
          action: 'library_books',
          title: 'Bán hàng',
          items: [
            { title: 'Danh sách phiếu bán' }
          ]
        },
        {
          action: 'people',
          title: 'Nhân viên',
          items: [
            { title: 'Danh sách nhân viên', link: '/admin/nhanvien.html'}
          ]
        },
        {
          action: 'people',
          title: 'Khách hàng',
          items: [
            { title: 'Danh sách khách hàng', link: '/admin/khachhang.html' },
            { title: 'Tra cứu công nợ', link: '/admin/nhanvien.html'},
          ]
        },
        {
          action: 'insert_chart',
          title: 'Thống kê',
          items: [
            { title: 'Lợi nhuận', link: '/admin/nhanvien.html'},
            { title: 'Thống kê doanh thu', link: '/admin/nhanvien.html'},
          ]
        },
      ],     
      right: null
    }
  },
  methods: {
    Close () {
      this.mini = !this.mini
      this.$emit('input',this.mini)
    }
  },
  watch: {
    miniA () {
     this.mini = this.miniA
    }
  },
}