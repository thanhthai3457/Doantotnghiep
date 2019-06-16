<template>
  <div class="module-divigation">
    <v-navigation-drawer
      width="300"
      :mini-variant.sync="mini"
      app
      v-model="drawer"
      dark
      @click="Close"
    >
      <v-layout column align-center>
        <v-flex class="mt-3">
          <v-avatar size="50" class="white">
            <img src="@/assets/logo.png">
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-layout column align-center>
        <v-btn icon @click.stop="Close" >
          <v-icon>info</v-icon>
        </v-btn>
        <transition name="slide-fade">
          <v-flex v-if="!mini">
            <p class="white--text subheading mt-1">Nguyên Phú</p>
          </v-flex>
        </transition>
        
      </v-layout>

      <v-list>
        <v-list-tile :to="{path:'/admin'}">
          <v-list-tile-action>
            <v-icon>laptop_mac</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.link">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* Trước 2.1.8 thì dùng .slide-fade-leave-active */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script src="./navigation.js">
</script>