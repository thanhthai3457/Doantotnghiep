<template>
  <div class="main">
    <v-layout row class="login">
      <v-flex md4 xs0 lg4></v-flex>

      <v-flex xs12 md4 lg4>
        <v-container>
          <v-layout row class="text-xs-center">
            <v-flex class="login-form grey lighten-2">
              <v-container class="text-xs-center">
                <v-card flat>
                  <v-card-title primary-title>
                    <h4>ĐĂNG NHẬP QUẢN TRỊ</h4>
                  </v-card-title>
                  <v-form>
                    <v-text-field
                      prepend-icon="person"
                      name="Username"
                      v-model="tenTK"
                      label="Username"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="lock"
                      name="Password"
                      label="Password"
                      v-model="matKhau"
                      type="password"
                    ></v-text-field>
                    <v-card-actions>
                      <v-btn primary large block @click="login" color="success">Đăng nhập</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex md4 xs0 lg4></v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
.login-form{
  width:100%;
}
.login{
  opacity: .9;
  position: absolute;
  top: 100px;
  width: 100%;
}
.main{
  height: 100%;
  background-image: linear-gradient( rgba(182, 171, 171, 0.397), rgba(138, 136, 136, 0.418) ), url(login.jpeg);
  background-size: cover; 
  position: relative;
}
</style>



<script>
import UserServices from "./service.js";
import axios from "axios";
const _ = require("lodash");
export default {
  data: () => ({
    tenTK: "",
    matKhau: ""
  }),
  methods: {
    async login() {
      let { data } = await UserServices.login({
        tenTK: this.tenTK,
        matKhau: this.matKhau
      });
      if (!_.isEmpty(data.credentials)) {
        if (data.isValid === true) {
          this.$notify({
            title: "Xác nhận",
            text: "Đăng nhập thành công",
            type: "success"
          });
          localStorage.setItem("token", data.token);
          axios.defaults.headers.common["Authorization"] = localStorage.getItem(
            "token"
          );

          this.$router.push({ path: "/admin/dashboard.html" });
        } else {
          this.$notify({
            title: "Lỗi!!!",
            text: "Mật khẩu sai",
            type: "error"
          });
        }
      } else {
        this.$notify({
          title: "Lỗi!!!",
          text: "Tài khoản không tồn tại",
          type: "error"
        });
      }
    }
  }
};
</script>