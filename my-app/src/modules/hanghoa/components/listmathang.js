import MatHangServices from '../service.js'
import popupMatHang from '../core/popupMatHang.vue'

export default {
  components: {
    'popup-mathang':popupMatHang
  },
  data() {
    return {
      MatHangSelect: {},
      dsMatHang: [],
      dialog: false,
      isThem: false,
      isSua: false,
      formData: {},
      search: '',
      headers: [
        {
          text: 'Tên hàng',
          align: 'left',
          sortable: true,
          value: 'tenHangHoa'
        },
        {
          text: 'Danh pháp',
          align: 'left',
          sortable: true,
          value: 'danhPhap'
        },
        {
          text: 'Đơn vị tính',
          align: 'left',
          sortable: true,
          value: 'donViTinh'
        },
        {
          text: 'Trọng lượng',
          align: 'left',
          sortable: true,
          value: 'trongLuong'
        },
        {
          text: 'Tổng số lượng',
          align: 'left',
          sortable: true,
          value: 'tongSoLuong'
        },
      ],
      pagination: {
        rowsPerPage: 5
      }
    }
  },
  async created() {
    this.dsMatHang = await MatHangServices.getDsMatHang()
  },
  computed: {
    pages () {
      if ( this.dsMatHang.length === 0
      ) return 0

      return Math.ceil(this.dsMatHang.length / this.pagination.rowsPerPage)
    }
  },
  methods: {
    OpenThem () {
      this.dialog = true
      this.isThem = true
      this.isSua = false
      this.MatHangSelect = {}
    },
    Sua (item) {
      this.dialog = true
      this.isThem = false
      this.isSua = true
      this.MatHangSelect = item
    },
  },
  watch: {
    async dialog (v) {
      if(!v) {
        this.dsMatHang = await MatHangServices.getDsMatHang()
      }
    }
  },
}