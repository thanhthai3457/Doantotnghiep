<template>
  <section id="client">
    <div class="client-core">
      <v-layout row wrap class="part-one">
        <v-flex xs12 md7 lg7></v-flex>
        <v-flex xs12 md5 lg5>
          <v-container>
            <div class="contact">
              <v-container>
                <div>
                  <h1>Liên hệ trực tuyến</h1>
                  <span>abc</span>
                </div>

                <div>
                  <v-form>
                    <v-layout row wrap>
                      <v-flex xs12 md12 lg12>
                        <v-text-field
                          v-model="formData.tenNguoiGui"
                          box
                          color="deep-purple"
                          label="Họ và tên người gửi"
                          style="min-height: 96px"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md12 lg12>
                        <v-text-field
                          v-model="formData.email"
                          :rules="[rules.email]"
                          box
                          color="deep-purple"
                          label="Địa chỉ email"
                          type="email"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs6 md6 lg6 style="padding-right:5px">
                        <v-text-field
                          v-model="formData.sDT"
                          box
                          color="deep-purple"
                          label="Phone number"
                          mask="phone"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs6 md6 lg6 style="padding-left:5px">
                        <v-text-field
                          v-model="formData.fax"
                          box
                          color="deep-purple"
                          label="Fax"
                          mask="phone"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md12 lg12>
                        <v-textarea
                          v-model="formData.noiDung"
                          auto-grow
                          box
                          color="deep-purple"
                          label="Nội dung cần gửi"
                          rows="3"
                        ></v-textarea>
                      </v-flex>
                      <v-flex xs4 md4 lg4 offset-lg4 offset-md4 offset-xs4>
                        <v-btn
                          class="white--text"
                          primary
                          large
                          block
                          @click="sendMail"
                          color="deep-purple accent-4"
                        >Xác nhận</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </div>
              </v-container>
            </div>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </section>
</template>
<script>
import Axios from "axios";
import Notifications from 'vue-notification'
export default {
  components:{
     'notifications': Notifications
  },
  data: () => ({
    formData: {},
    rules: {
      email: v =>
        (v || "").match(/@/) || "Vui lòng nhập địa chỉ email chính xác",
      required: v => !!v || "This field is required"
    }
  }),
  methods: {
    async sendMail() {
      console.log("form", this.formData);
      let { data } = await Axios.post(
        `${window.apiUrl}/thanh/mail`,
        this.formData
      );
      this.$notify({
        title: "Xác nhận",
        text: "Gửi mail thành công! Chúng tôi sẽ sớm phản hồi.",
        type: "success"
      });
    }
  }
};
</script>
<style scoped>
.client-core {
  width: 100%;
  height: 700px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.597), rgba(0, 0, 0, 0.596)),
    url(Client.jpg);
  background-size: cover;
  position: relative;
}
.part-one {
  opacity: 0.9;
  position: absolute;
  top: 100px;
  width: 100%;
}
.contact {
  background: white;
  border: 1px solid white;
  border-radius: 5%;
}
</style>
