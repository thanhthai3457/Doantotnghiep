<template>
  <v-layout row justify-center>
    <v-dialog v-model="value" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form"  v-model="valid" lazy-validation>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12>
                  <v-text-field label="Tên nhà cung cấp:" :rules="tenLoaiRules" :counter="10" v-model="formData.tenNCC" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field label="Địa chỉ:" v-model="formData.diaChi"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field label="Số điện thoại:" v-model="formData.sDT"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <div>
                    <div class="box">
                      <div v-if="!hinhAnhs &&  isThem">
                        <img src="@/assets/loamathang.png" class="img-avt" height="200" width="198" >
                      </div>
                      <div v-if="hinhAnhs &&  isThem">
                        <img :src="hinhAnhs" class="img-avt" height="200" width="198" >
                      </div>
                       <v-btn depressed class="btn"  color="success"  @click="chooseFIle">Ảnh Đại Diện</v-btn>
                    </div>   
                  </div>
                  <input hidden type="file" style="display: none" ref="file" accept="image/*"  @change="choosedFile">
                  <!-- <div v-else> 
                    <div v-if="srcAnhDaiDien">
                      <img :src="srcAnhDaiDien" height="144">
                    </div>                            
                  </div> -->
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

<script src="./popupNhaCungCap.js">
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