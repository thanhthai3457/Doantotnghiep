<template>
  <section id="admin"  style="height:100vh; display: flex; flex-direction: column; flex: 1 1 auto;">
    <v-content style="display: flex; flex: 0 0 auto;">
      <toolbar />
    </v-content>
    <v-content class="admin-core" style="display: flex; flex: 1 1 auto;">
      <router-view></router-view>
    </v-content>
    <v-content style="display: flex; flex: 0 0 auto;">
      <footerAdmin />
    </v-content>
  </section>
</template>

<style scoped>
.admin-core{
  width: 100%;
  height: auto;
  background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(Admin.jpg);
  background-size: cover; 
}
</style>

<script>
import toolbar from './core/toolbar.vue'
import footerAdmin from './core/footer.vue'
export default {
  components: {
    toolbar,
    footerAdmin,
  },
  data() {
    return {
      
    }
  },
}
</script>
