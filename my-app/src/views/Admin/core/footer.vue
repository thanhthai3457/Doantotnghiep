<template>
<section class="module-footer">
   <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="grey darken-2" >
        <strong class="subheading">Công ty TNHH sắt thép Nguyên Phú!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
          :href="icon.link"
        >
          <v-icon size="24px">{{ icon.item }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong>Nguyên Phú</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</section>
</template>

<script src="./footer.js">
</script>