<template>
  <v-layout row justify-center>
    <v-dialog v-model="value" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <v-chip color="green">
            <span style="font-size:16px">Thêm khách hàng</span>
          </v-chip>
          
        </v-card-title>
        <v-card-text>
          <v-form ref="form"  v-model="valid" lazy-validation>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12>
                  <v-text-field label="Tên khách hàng" :rules="tenLoaiRules" :counter="100" v-model="formData.tenKH" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <v-text-field label="Mã số thuế" v-model="formData.mST"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md6>
                  <v-text-field label="Số điện thoại" v-model="formData.sDT"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field label="Địa chỉ" :rules="tenLoaiRules" :counter="100" v-model="formData.diaChi" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field label="Email" :rules="tenLoaiRules" :counter="100" v-model="formData.email" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="Huy">Đóng</v-btn>
          <v-btn color="blue darken-1" flat @click="XacNhan">Lưu lại</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script src="./popupKhachHang.js">
</script>