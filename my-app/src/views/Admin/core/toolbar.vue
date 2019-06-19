<template>
 <nav class="module-toolbar" >
      <v-toolbar dense flat>
      <v-toolbar-side-icon @click="drawers = !drawers"></v-toolbar-side-icon>
      <v-toolbar-title>Trang quản trị</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-btn icon @click="LogOut()">
        <img src="../logout.svg" >
      </v-btn>
    </v-toolbar>
    <navigation v-model="drawers" :miniA="drawers"/>
  </nav>
</template>
<script src="./toolbar.js">
</script>