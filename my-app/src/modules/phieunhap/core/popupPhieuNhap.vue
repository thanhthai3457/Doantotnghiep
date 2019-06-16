<template>
  <v-layout row justify-center>
    <v-dialog v-model="value" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Phiếu nhập hàng</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form"  v-model="valid" lazy-validation>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12>
                  <v-text-field label="Tên phiếu" :rules="tenLoaiRules" :counter="100" v-model="formData.tenPhieu" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field label="Ngày lập" disabled v-model="formData.ngayLap"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="Huy">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="XacNhan">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script src="./popupPhieuNhap.js">
</script>
<style scoped>
  .box {
    position: relative;
    height: 200px;
    width: 200px;
    border: 1px dashed blue;
    border-radius: 5%;
    margin: 0 auto;
  }
  .img-avt {
    border-radius: 5%;
    object-fit: cover;
  }
  .btn {
    opacity: .8;
    left: -8px;
    bottom: -7px;
    border-radius: 0 0 8px 8px;
    position: absolute;
    width: 100%;
    background-color: green;
    height: 31px;
  }
</style>