<template>
  <section class="module-khach-hang" style="padding:0 20px;">
    <div class="spacer-20"></div>
    <v-chip color="orange" text-color="white">
      <span class="titleKhachHang">Khách hàng</span>
    </v-chip>
    <div class="spacer-20"></div>
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <v-card>
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
            :items="dsKhachHang"
            :search="search"
            hide-actions
            :pagination.sync="pagination"
          >
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.tenKH }}</td>
              <td class="text-xs-left">{{ props.item.mST }}</td>
              <td class="text-xs-left">{{ props.item.sDT }}</td>
              <td class="text-xs-left">{{ props.item.diaChi }}</td>
              <td class="text-xs-left">{{ props.item.email }}</td>
              <td class="text-xs-left">{{ props.item.congNo | currency}}</td>
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
      </v-flex>
    </v-layout>
    <div class="spacer-20"></div>
    <popup-khachhang v-model="dialog" :isThem="isThem"/>
  </section>
</template>
<style scoped>
.titleKhachHang{
  font-size: 18px;
  font-weight: bold;
}
</style>
<script src="./listkhachhang.js">
</script>