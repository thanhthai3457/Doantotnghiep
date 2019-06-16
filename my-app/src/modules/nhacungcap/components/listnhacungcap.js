import nhaCungCapServices from '../service.js'
import hangHoaServices from '../../hanghoa/service.js'
import popupNhaCungCap from '../core/popupNhaCungCap.vue'
export default {
  components: {
    'popup-nhacungcap':popupNhaCungCap
  },
  data() {
    return {
      select: 'Chọn nhà cung cấp',
        items: [
          'Hữu Liên',
          'Hòa Phát',
          'Sendo',
          'Khác'
      ],
      dsNhaCungCap: [],
      dsHangHoa: [],
      search: '',
      searchHangHoa: '',
      dialog: false,
      isThem: false,
      formData: {},
      idCheck: '',
      active: false,
      headers: [
        {
          text: 'Tên nhà cung cấp',
          align: 'left',
          sortable: true,
          value: 'tenNCC'
        },
        {
          text: 'Địa chỉ',
          align: 'left',
          sortable: true,
          value: 'diaChi'
        },
        {
          text: 'Số điện thoại',
          align: 'left',
          sortable: true,
          value: 'sDT'
        },
        {
          text: 'Ảnh',
          align: 'center',
          sortable: true,
          value: 'hinhAnhs'
        },
        {
          text: 'Xem danh sách hàng',
          align: 'left',
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
          value: 'dienGiai'
        },
        {
          text: 'Đơn vị tính (1 cây = 6m)',
          align: 'center',
          sortable: true,
          value: 'hinhAnhs'
        },
        {
          text: 'Trọng lượng Kg/m',
          align: 'center',
          sortable: true,
          value: 'hinhAnhs'
        },
        {
          text: 'Số lượng',
          align: 'center',
          sortable: true,
          value: 'soLuong'
        },
      ],
      pagination: {
        rowsPerPage: 5
      },
      paginationHangHoa: {
        rowsPerPage: 10
      }
    }
  },
  async created() {
    this.dsNhaCungCap = await nhaCungCapServices.getDsNhaCungCap()
  },
  computed: {
    pages () {
      if ( this.dsNhaCungCap.length === 0
      ) return 0

      return Math.ceil(this.dsNhaCungCap.length / this.pagination.rowsPerPage)
    },
    pagesHangHoa () {
      if ( this.dsHangHoa.length === 0
      ) return 0

      return Math.ceil(this.dsHangHoa.length / this.paginationHangHoa.rowsPerPage)
    }
  },
  watch: {
    async dialog (v) {
      if(!v) {
        this.dsNhaCungCap = await nhaCungCapServices.getDsNhaCungCap()
      }
    }
  },
  methods: {
    OpenThem () {
      this.dialog = true
      this.isThem = true
    },
    // getID (id) {
    //   this.formData.idNCC = id
    //   this.active = true
    //   this.idCheck = id
    // },
    async XemDetail (id) {
      // if(this.select) {
      //   this.formData.idNCC = this.select._id
      // }
      this.formData.idNCC = id
      let {data} = await  hangHoaServices.getHangHoaByNCC(this.formData)
      this.dsHangHoa = data
    }
  },
}