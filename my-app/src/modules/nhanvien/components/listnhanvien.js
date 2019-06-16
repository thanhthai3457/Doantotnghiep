import nhanVienServices from '../service.js'

export default {
  data() {
    return {
      dsNhanVien: [],
      search: '',
      headers: [
        {
          text: 'Tên nhân viên',
          align: 'left',
          sortable: true,
          value: 'tenNhanVien'
        },
        {
          text: 'Chức vụ',
          align: 'left',
          sortable: true,
          value: 'chucVu'
        },
        {
          text: 'Số điện thoại',
          align: 'left',
          sortable: true,
          value: 'sDT'
        },
        {
          text: 'Lương hiện hành',
          align: 'left',
          sortable: true,
          value: 'luong'
        },
      ],
      pagination: {
        rowsPerPage: 5
      }
    }
  },
  async created() {
    this.dsNhanVien = await nhanVienServices.getDsNhanVien()
  },
  computed: {
    pages () {
      if ( this.dsNhanVien.length === 0
      ) return 0

      return Math.ceil(this.dsNhanVien.length / this.pagination.rowsPerPage)
    }
  },
}