<template>
  <v-app>
    <router-view></router-view>
    <notifications  position="top center"/>
  </v-app>
</template>

<style>
.spacer-20{
  height: 20px;
}
</style>


<script>

export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
