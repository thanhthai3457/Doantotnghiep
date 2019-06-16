import loaiMatHangService from '../service.js'
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
    loaiMatHangSelect: {
      type: Object
    }
  },
  data: () => ({
    dialog: false,
    valid: false,
    formData: {},
    hinhAnhs: '',
    tenLoaiRules: [
      v => !!v || 'không được để trống',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    image: '',
    changeAnh: false,
  }),
  methods: {
    Huy () {
      this.formData = {}
      this.hinhAnhs = ''
      this.$emit('input',false)
    },
    choosedFile () {
      const files = this.$refs['file'].files
      if(files[0].name.lastIndexOf('.') <=0) {
        return alert('Please add avalid file')
      }
      let fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
          this.hinhAnhs = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0].name
    },
    chooseFIle () {
      if(this.formData.hinhAnhs)
      {
        this.changeAnh = true
      }
      this.$refs['file'].click()
    },
    XacNhan () {
      if (this.$refs.form.validate()) {
        if(this.hinhAnhs) {
          this.formData.hinhAnhs = {imageUrl:this.hinhAnhs,image:this.image}
        }
        loaiMatHangService.addLoaiMatHang(this.formData).then(res => {
          if(res) {
            this.Huy()
            this.$notify({
              title: 'Important message',
              text: 'Hello user! This is a notification!',
              type: 'error',
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
        this.formData = _.cloneDeep(this.loaiMatHangSelect)
      }
    }
  },
}