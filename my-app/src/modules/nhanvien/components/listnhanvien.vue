<template>
  <section class="module-nhan-vien" style="padding:0 20px">
    <div class="spacer-20"></div>
    <v-chip color="orange" text-color="white">
      <span class="titleNV">Nhân viên</span>
    </v-chip>
    <div class="spacer-20"></div>
    <v-layout>
      <v-card>
        <v-card-title>
          <v-btn depressed color="green" fab dark small><v-icon>add</v-icon></v-btn>
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
          :items="dsNhanVien"
          :search="search"
          hide-actions
          :pagination.sync="pagination"
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.tenNhanVien }}</td>
            <td class="text-xs-left">{{ props.item.chucVu }}</td>
            <td class="text-xs-left">{{ props.item.sDT }}</td>
            <td class="text-xs-left">{{ props.item.luong | currency }}</td>
          </template>
          <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
      </v-card> 
    </v-layout>
  </section>
</template>

<style scoped>
.titleNV {
  font-size: 18px;
  font-weight: bold;
}
</style>

<script src="./listnhanvien.js">
</script>