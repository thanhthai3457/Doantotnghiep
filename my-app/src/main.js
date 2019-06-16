import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import {store} from './store.js'
import router from './route.js'
import Notifications from 'vue-notification'
import VueCurrencyFilter from 'vue-currency-filter'
import Vuetify from 'vuetify/lib'
import MyPlugin from './plugins/myplugin';

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(Notifications)
Vue.use(VueCurrencyFilter)
Vue.use(MyPlugin)
Vue.use(VueCurrencyFilter,
  {
    symbol : 'VNĐ',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })
window.apiUrl ='http://localhost:9002/api'
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

