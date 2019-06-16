<template>
  <section class="module-mat-hang" style="padding:0 20px 20px 20px">
    <div class="spacer-20"></div>
    <v-chip color="orange" text-color="white">
      <span class="titleMatHang">Hàng hóa</span>
    </v-chip>
    <div class="spacer-20"></div>
    <v-layout>
      <v-card
        class="vCard"
      >
        <v-card-title>
          <v-btn depressed color="green" @click="OpenThem" fab dark small>
            <v-icon>add</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="dsMatHang"
          :search="search"
          hide-actions
          :pagination.sync="pagination"
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.tenHangHoa }}</td>
            <td class="text-xs-left">{{ props.item.danhPhap }}</td>
            <td class="text-xs-left">{{ props.item.donViTinh }}</td>
            <td class="text-xs-left">{{ props.item.trongLuong }}</td>
            <td class="text-xs-left">{{ props.item.tongSoLuong }}</td>
            <td class="text-xs-left">
              <v-btn flat icon small @click="Sua(props.item)">
                <v-icon small>update</v-icon>
              </v-btn>
            </td>
          </template>
          <template v-slot:no-results>
            <v-alert
              :value="true"
              color="error"
              icon="warning"
            >Your search for "{{ search }}" found no results.</v-alert>
          </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
      </v-card>
    </v-layout>
    <popup-mathang
      v-model="dialog"
      :isSua="isSua"
      :MatHangSelect="MatHangSelect || {}"
      :isThem="isThem"
    />
  </section>
</template>

<style scoped>
.vCard {
  border-radius: 7%;
}
.titleMatHang {
  font-size: 18px;
  font-weight: bold;
}
</style>


<script src="./listmathang.js">
</script>