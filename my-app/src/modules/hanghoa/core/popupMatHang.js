import MatHangService from '../service.js'
import loaiMatHangServices from '../../loaimathang/service.js'
import Notifications from 'vue-notification'
import _ from 'lodash'
export default {
  components:{
     'notifications': Notifications
  },
  props: {
    value: {
      type: Boolean
    },
    isThem: {
      type: Boolean
    },
    isSua: {
      type: Boolean
    },
    MatHangSelect: {
      type: Object
    },
    abc: {
      type: String
    }
  },
  data: () => ({
    formDataSave: {},
    dialog: false,
    valid: false,
    select: 'Đơn vị tính',
    selectLoaiMathang: 'Loại hàng',
    dsLoaiMatHang: [],
    formData: {},
    // hinhAnhs: '',
    tenLoaiRules: [
      v => !!v || 'không được để trống',
      v => (v && v.length <= 100) || 'Name must be less than 100 characters'
    ],
    // image: '',
    // changeAnh: false,
    items: [
      'mét',
      'ký',
      'cây'
    ]
  }),
  async created(){
    this.dsLoaiMatHang = await loaiMatHangServices.getDsLoaiMatHang()
  },
  methods: {
    Huy () {
      this.formData = {}
      this.$emit('input',false)
    },
    XacNhan () {
      console.log('data', this.formData);
      if(this.isThem === true)
        this.formData.tongSoLuong = 0
      if (this.$refs.form.validate()) {
        MatHangService.addMatHang(this.formData).then(res => {
          if(res) {
            this.Huy()
            this.$notify({
              title: 'Important message',
              text: 'Thao tác thành công!',
              type: 'success',
            });
          }
        }).catch(err => {
          return err
        })
      }
    }
  },
  watch: {
    async value (v) {
      if(v && this.isSua === true) {
        this.formData = _.cloneDeep(this.MatHangSelect)
      }
    }
  },
}