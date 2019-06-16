import loaiMatHangServices from '../service.js'
import nhaCungCapServices from '../../nhacungcap/service.js'
import hangHoaServices from '../../hanghoa/service.js'
import popupLoaiMatHang from '../core/popupLoaiMatHang.vue'
export default {
  components: {
    'popup-loaimathang':popupLoaiMatHang
  },
  data() {
    return {
      select: 'Chọn nhà cung cấp',
      dsNhaCungCap: [],
      dsLoaiMatHang: [],
      search: '',
      searchHH: '',
      isSua: false,
      loaiMatHangSelect:{},
      dsHangHoa: [],
      idCheck: '',
      active: false,
      dialog: false,
      isThem: false,
      formData: {},
      headers: [
        {
          text: 'Tên loại',
          align: 'left',
          sortable: true,
          value: 'tenLoai'
        },
        {
          text: 'Diễn giải',
          align: 'left',
          sortable: true,
          value: 'dienGiai'
        },
        {
          text: 'Ảnh',
          align: 'left',
          sortable: true,
          value: 'hinhAnhs'
        },
      ],
      headersHangHoa: [
        {
          text: 'Tên hàng hóa',
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
          text: 'Đơn vị tính (1 cây = 6m)',
          align: 'center',
          sortable: true,
          value: 'donViTinh'
        },
        {
          text: 'Trọng lượng Kg/m',
          align: 'center',
          sortable: true,
          value: 'trongLuong'
        },
      ],
      pagination: {
        rowsPerPage: 5
      },
      paginationHangHoa: {
        rowsPerPage: 3
      }
    }
  },
  async created() {
    this.dsLoaiMatHang = await loaiMatHangServices.getDsLoaiMatHang()
    this.dsNhaCungCap = await nhaCungCapServices.getDsNhaCungCap()
  },
  computed: {
    pages () {
      if ( this.dsLoaiMatHang.length === 0
      ) return 0

      return Math.ceil(this.dsLoaiMatHang.length / this.pagination.rowsPerPage)
    },
    pagesHangHoa () {
      if ( this.dsHangHoa.length === 0
      ) return 0

      return Math.ceil(this.dsHangHoa.length / this.paginationHangHoa.rowsPerPage)
    },
  },
  watch: {
    async dialog (v) {
      if(!v) {
        this.dsLoaiMatHang = await loaiMatHangServices.getDsLoaiMatHang()
      }
    }
  },
  methods: {
    OpenThem () {
      this.dialog = true
      this.isThem = true
      this.loaiMatHangSelect = {}
    },
    Sua (item) {
      this.dialog = true
      this.isThem = false
      this.isSua = true
      this.loaiMatHangSelect = item
    },
    getID (id) {
      this.formData.idLoaiHang = id
      this.active = true
      this.idCheck = id
    },
    async XemDetail () {
      if(this.select) {
        this.formData.idNCC = this.select._id
      }
      let {data} = await  hangHoaServices.getHangHoaByNCCvaLoaiHang(this.formData)
      this.dsHangHoa = data
    }
  },
}