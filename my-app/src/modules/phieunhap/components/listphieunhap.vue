<template>
  <section class="module-phieu-nhap" style="padding:0 20px">
    <div class="spacer-20"></div>
    <v-chip color="orange" text-color="white">
      <span class="titlePhieuNhap">Nhập hàng</span>
    </v-chip>
    <div class="spacer-20"></div>
    <v-container-fluid>
      <v-layout row wrap>
        <v-flex xs12 md4 lg4 style="padding-right:10px">
          <v-card dark>
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
              :items="dsPhieuNhap"
              :search="search"
              hide-actions
              :pagination.sync="pagination"
              dark
            >
              <template v-slot:items="props">
                <tr
                  :class="(active && idCheck === props.item._id)?'grey darken-1 white--text':'white black--text'"
                  @click="getID(props.item._id)"
                >
                  <td class="text-xs-left">{{ props.item.tenPhieu }}</td>
                  <td class="text-xs-left">{{ props.item.ngayLap | formatDate('DD/MM/YYYY')}}</td>
                  <td class="text-xs-left">{{ props.item.thanhTien }}</td>
                  <td class="text-xs-left">
                    <v-btn flat icon small @click="Sua(props.item)">
                      <v-icon small>update</v-icon>
                    </v-btn>
                  </td>
                </tr>
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

        <!-- Chi tiết phiếu nhập -->
        <!-- <v-flex xs12 md8 lg8 style="padding-left:10px">
          <div>
            <v-card>
              <v-layout row>
                <v-flex md6 lg6>
                  <v-combobox
                    v-model="select"
                    :items="dsNhaCungCap"
                    item-text="tenNCC"
                    item-value="_id"
                    style="width: 250px; padding-left: 30px;"
                    chips
                  ></v-combobox>
                </v-flex>

                <v-flex md1 lg1></v-flex>
                <v-flex md4 lg4 style="padding-top:10px">
                  <v-btn dark color="primary" @click="XemDetail()">Xem</v-btn>
                </v-flex>
              </v-layout>
              <v-card-title>
                <v-chip color="green">Danh sách hàng hóa</v-chip>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="searchHH"
                  append-icon="search"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headersHangHoa"
                :items="dsHangHoa"
                :search="searchHH"
                hide-actions
                :pagination.sync="paginationHangHoa"
              >
                <template v-slot:items="props">
                  <td class="text-xs-left">{{ props.item.tenHangHoa }}</td>
                  
                  <td class="text-xs-left">{{ props.item.danhPhap }}</td>
                  <td class="text-xs-center">{{ props.item.donViTinh }}</td>
                  <td class="text-xs-center">{{ props.item.trongLuong }}</td>
                  
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
        </v-flex>-->
      </v-layout>
    </v-container-fluid>
    <div class="spacer-20"></div>
    <popup-phieunhap
      v-model="dialog"
      :isSua="isSua"
      :phieuNhapSelect="phieuNhapSelect || {}"
      :isThem="isThem"
    />
  </section>
</template>
<style scoped>
.titlePhieuNhap {
  font-size: 18px;
  font-weight: bold;
}
</style>

<script src="./listphieunhap.js">
</script>