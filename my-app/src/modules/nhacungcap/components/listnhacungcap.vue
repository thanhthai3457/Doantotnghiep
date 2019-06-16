<template>
  <section class="module-nha-cung-cap" style="padding:0 20px">
    <div class="spacer-20"></div>
    <v-chip color="orange" text-color="white">
      <span class="titleNCC">Nhà cung cấp</span>
    </v-chip>
    <div class="spacer-20"></div>
    <v-container-fluid>
      <v-layout row wrap>
        <v-flex xs12 md10 lg10>
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
              :items="dsNhaCungCap"
              :search="search"
              hide-actions
              :pagination.sync="pagination"
            >
              <template v-slot:items="props">
                <!-- <tr @click="getID(props.item._id)"> -->
                <td class="text-xs-left">{{ props.item.tenNCC }}</td>
                <td class="text-xs-left">{{ props.item.diaChi }}</td>
                <td class="text-xs-left">{{ props.item.sDT }}</td>
                <td class="text-xs-right" v-if="props.item.hinhAnhs">
                  <img
                    style="width:70px; height: 70px; border-radius: 50%;"
                    :src="`http://localhost:9002/api/thanh/image/${props.item.hinhAnhs}`"
                    alt
                  >
                </td>
                <td class="text-xs-right" v-else>
                  <img
                    style="width:70px; height: 70px; border-radius: 50%;"
                    :src="`http://localhost:9002/api/thanh/image/steel.jpg`"
                    alt
                  >
                </td>
                <td class="text-xs-center">
                  <v-btn flat icon color="info" @click="XemDetail(props.item._id)">
                    <v-icon medium dark color="grey">visibility</v-icon>
                  </v-btn>
                </td>
                <!-- </tr> -->
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
      <div class="spacer-20"></div>

      <v-layout row wrap>
        <!-- Hàng Hóa -->

        <v-flex xs12 md12 lg12>
          <div>
            <v-card>
              <v-card-title>
                <v-chip color="green">Danh sách hàng hóa</v-chip>
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
                :headers="headersHangHoa"
                :items="dsHangHoa"
                :search="search"
                hide-actions
                :pagination.sync="paginationHangHoa"
              >
                <template v-slot:items="props">
                  
                    <td class="text-xs-left">{{ props.item.tenHangHoa }}</td>
                    <!-- <td class="text-xs-left">{{props.item.nhaCungCapID && props.item.nhaCungCapID.map(item => {return item.tenNCC}) }}</td> -->
                    <!-- <td class="text-xs-left">{{ props.item.loaiHangHoaID.tenLoai }}</td> -->
                    <td class="text-xs-left">{{ props.item.danhPhap }}</td>
                    <td class="text-xs-center">{{ props.item.donViTinh }}</td>
                    <td class="text-xs-center">{{ props.item.trongLuong }}</td>
                    <td
                      class="text-xs-center"
                    >{{ props.item.nhaCungCap.map(item => {return item.soLuong}) }}</td>
                  
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
                <v-pagination v-model="paginationHangHoa.page" :length="pagesHangHoa"></v-pagination>
              </div>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container-fluid>
    <div class="spacer-20"></div>
    <popup-nhacungcap v-model="dialog" :isThem="isThem"/>
  </section>
</template>

<style scoped>
.titleNCC {
  font-size: 18px;
  font-weight: bold;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* Trước 2.1.8 thì dùng .slide-fade-leave-active */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script src="./listnhacungcap.js">
</script>