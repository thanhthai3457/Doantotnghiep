import navigation from './navigation.vue'

export default {
  components: {
    navigation
  },
  data() {
    return {
      drawers: true
    }
  },
  methods: {
    LogOut () {
      localStorage.clear()
      this.$router.push({path: '/login.html'})
    }
  },
}