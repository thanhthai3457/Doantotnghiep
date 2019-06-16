import phieuNhapService from '../service.js'
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
    phieuNhapSelect: {
      type: Object
    }
  },
  data: () => ({
    dialog: false,
    valid: false,
    formData: {},
    tenLoaiRules: [
      v => !!v || 'không được để trống',
      v => (v && v.length <= 100) || 'Name must be less than 100 characters'
    ],
  }),
  methods: {
    Huy () {
      this.formData = {}
      this.$emit('input',false)
    },
    XacNhan () {
      if (this.$refs.form.validate()) {
        phieuNhapService.addPhieuNhap(this.formData).then(res => {
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
    value (v) {
      if(v && this.isSua === true) {
        this.formData = _.cloneDeep(this.phieuNhapSelect)
      }
    }
  },
}