import phieuNhapServices from '../service.js'
import nhaCungCapServices from '../../nhacungcap/service.js'
import hangHoaServices from '../../hanghoa/service.js'
import popupPhieuNhap from '../core/popupPhieuNhap.vue'

export default {
  components: {
    'popup-phieunhap':popupPhieuNhap
  },
  data() {
    return {
      select: 'Chọn nhà cung cấp',
      dsNhaCungCap: [],
      dsPhieuNhap: [],
      search: '',
      isSua: false,
      phieuNhapSelect:{},
      dsHangHoa: [],
      idCheck: '',
      active: false,
      dialog: false,
      isThem: false,
      formData: {},
      phieunhap: null,
      ctphieunhap: null,
      headers: [
        {
          text: 'Tên phiếu',
          align: 'left',
          sortable: true,
          value: 'tenPhieu'
        },
        {
          text: 'Ngày lập',
          align: 'left',
          sortable: true,
          value: 'ngayLap'
        },
        {
          text: 'Thành tiền',
          align: 'left',
          sortable: true,
          value: 'thanhTien'
        },
      ],
      pagination: {
        rowsPerPage: 5
      },
    }
  },
  async created() {
    this.dsPhieuNhap = await phieuNhapServices.getDsPhieuNhap()
    // this.dsNhaCungCap = await nhaCungCapServices.getDsNhaCungCap()
  },
  computed: {
    pages () {
      if ( this.dsPhieuNhap.length === 0
      ) return 0

      return Math.ceil(this.dsPhieuNhap.length / this.pagination.rowsPerPage)
    },
  },
  watch: {
    async dialog (v) {
      if(!v) {
        this.dsPhieuNhap = await phieuNhapServices.getDsPhieuNhap()
      }
    }
  },
  methods: {
    OpenThem () {
      this.dialog = true
      this.isThem = true
      this.phieuNhapSelect = {}
    },
    Sua (item) {
      this.dialog = true
      this.isThem = false
      this.isSua = true
      this.phieuNhapSelect = item
    },
    getID (id) {
      this.formData.idPhieuNhap = id
      this.active = true
      this.idCheck = id
    },
    // getDetail (pn) {
    //   this.phieunhap = _.cloneDeep(pn)
    // }
    // async XemDetail () {
    //   if(this.select) {
    //     this.formData.idNCC = this.select._id
    //   }
    //   let {data} = await  hangHoaServices.getHangHoaByNCCvaLoaiHang(this.formData)
    //   this.dsHangHoa = data
    // }
  },
}