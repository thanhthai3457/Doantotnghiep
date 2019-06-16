import khachHangService from '../service.js'
import Notifications from 'vue-notification'
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
    }
  },
  data: () => ({
    dialog: false,
    valid: false,
    formData: {},
    tenLoaiRules: [
      v => !!v || 'không được để trống',
      v => (v && v.length <= 100) || 'Name must be less than 10 characters'
    ],
  }),
  methods: {
    Huy () {
      this.formData = {}
      this.$emit('input',false)
    },
    XacNhan () {
      if (this.$refs.form.validate()) {
        khachHangService.addKhachHang(this.formData).then(res => {
          if(res) {
            this.Huy()
            this.$notify({
              title: 'Important message',
              text: 'Nhập thông tin thành công.',
              type: 'success',
            });
          }
        }).catch(err => {
          return err
        })
      }
    }
  },
  // watch: {
  //   value (v) {
      
  //   }
  // },
}