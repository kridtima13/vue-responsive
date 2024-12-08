<template>
  <div>
    <v-card variant="flat" height="293">
      <div class="d-flex flex-row mb-2">
        <div>
          <v-img
            width="142"
            height="128"
            :src="require('@/assets/images/SOne_index_tips1.png')"
            style="margin: 0; padding: 0; background-repeat: no-repeat"
          ></v-img>
        </div>
        <div
          :style="{
            backgroundImage: `url(${require('@/assets/images/SOne_index_tips2.png')})`,
            backgroundRepeat: 'repeat-x',
            width: '100%',
            height: '128px',
          }"
          class="pa-2 d-flex align-center"
        >
          <div class="w-100">
            <div class="Su_orange21 d-flex justify-center">Safety Tips</div>
            <div class="d-flex align-center justify-end">
              <v-img
                :src="require('@/assets/images/SOne_index_pic66.png')"
                width="13"
                height="9"
                style="margin: 4px 0"
              />
            </div>
            <div class="text_white13 d-flex align-center justify-center">
              ควรเติมน้ำมันตอนเช้า<br />
              ขณะที่อุณหภูมิบนพื้น <br />ดินยังเย็นอยู่
            </div>
            <div class="d-flex align-center justify-end">
              <v-img
                :src="require('@/assets/images/SOne_index_pic99.png')"
                width="13"
                height="9"
              />
            </div>
          </div>
        </div>
      </div>

      <v-row class="d-flex align-center px-2 justify-space-between">
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          xxl="6"
          class="Su_black18 pb-0"
          >สมัครรับข่าวสาร</v-col
        >
        <v-col cols="12" sm="12" md="12" lg="6" xl="6" xxl="6" class="py-2">
          <div class="d-flex">
            <v-text-field
              density="compact"
              placeholder="กรุณาใส่อีเมล์"
              variant="outlined"
              hide-details
            ></v-text-field>
            <div
              class="rounded-e-lg d-flex justify-center align-center cursor-pointer"
              style="
                height: 40px;
                width: 40px;
                background-color: black;
                color: white;
              "
            >
              GO
            </div>
          </div>
        </v-col>
      </v-row>

      <div
        :style="{
          backgroundImage: `url(${require('@/assets/images/SOne_index_dash--.png')})`,
          backgroundRepeat: 'repeat-x',
          width: '100%',
          padding: '1px 0' /* ระยะบน-ล่าง */,
          margin: '20px 10px 10px 12px' /* ระยะบน-ล่าง */,
        }"
      ></div>

      <div class="center-container">
        <div>
          <v-img
            :src="require('@/assets/images/SOne_index_call.png')"
            width="300"
            cover
          />
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "News",
};
</script>
<style scoped>
.Su_orange21 {
  font-family: Conv_supermarket;
  color: #f05a28;
  font-size: 21px;
  line-height: 21px;
}
.text_white13 {
  font-family: Tahoma;
  color: #ffffff;
  font-size: 13px;
  font-weight: normal;
  line-height: 15px;
}

.Su_black18 {
  font-family: Conv_supermarket;
  color: #252525;
  font-size: 18px;
  line-height: 21px;
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px; /* เพิ่มระยะห่างตามต้องการ */
}
</style>
