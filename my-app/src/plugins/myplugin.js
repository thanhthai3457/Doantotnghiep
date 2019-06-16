import moment from 'moment'

const MyPlugin = {
  install(Vue){
    Vue.mixin({
      filters: {
        formatDate(date, format = 'DD/MM/YYYY') {
          if (date) {
            return moment(date).format(format)
          }
          return '-'
        }
      }
    })
  }
}
export default MyPlugin