import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, {
  iconfont: 'md'|| 'fa', 
  theme:{
    primary: '#9652ff' ,
    success: '#3cd1c2' ,
    info: '#ffaa2c',
    error: '#f83e70',
    button:'#E3F2FD',
    background:'#00548C'
  }
})
