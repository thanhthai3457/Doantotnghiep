import khachHangServices from '../service.js'
import popupKhachHang from '../core/popupKhachHang.vue'
export default {
  components: {
    'popup-khachhang':popupKhachHang
  },
  data() {
    return {
      dsKhachHang: [],
      dialog: false,
      isThem: false,
      search: '',
      headers: [
        {
          text: 'Tên khách hàng',
          align: 'left',
          sortable: true,
          value: 'tenKH'
        },
        {
          text: 'Mã số thuế',
          align: 'left',
          sortable: true,
          value: 'mST'
        },
        {
          text: 'Số điện thoại',
          align: 'left',
          sortable: true,
          value: 'sDT'
        },
        {
          text: 'Địa chỉ',
          align: 'left',
          sortable: true,
          value: 'diaChi'
        },
        {
          text: 'Email',
          align: 'left',
          sortable: true,
          value: 'email'
        },
        {
          text: 'Công nợ',
          align: 'left',
          sortable: true,
          value: 'congNo'
        },
      ],
      pagination: {
        rowsPerPage: 5
      }
    }
  },
  async created() {
    this.dsKhachHang = await khachHangServices.getDsKhachHang()
  },
  computed: {
    pages () {
      if ( this.dsKhachHang.length === 0
      ) return 0

      return Math.ceil(this.dsKhachHang.length / this.pagination.rowsPerPage)
    }
  },
  watch: {
    async dialog (v) {
      if(!v) {
        this.dsKhachHang = await khachHangServices.getDsKhachHang()
      }
    }
  },
  methods: {
    OpenThem () {
      this.dialog = true
      this.isThem = true
    }
  },
}