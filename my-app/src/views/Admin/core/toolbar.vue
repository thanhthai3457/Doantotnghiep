<template>
 <nav class="module-toolbar" >
      <v-toolbar dense flat>
      <v-toolbar-side-icon @click="drawers = !drawers"></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <navigation v-model="drawers" :miniA="drawers"/>
  </nav>
</template>
<script src="./toolbar.js">
</script>