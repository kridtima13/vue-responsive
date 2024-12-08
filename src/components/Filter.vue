<template>
  <div>
    <div class="header-serch-filter px-3 d-flex align-center justify-center">
      <v-toolbar-title text="ค้นหายาง"></v-toolbar-title>
    </div>
    <v-card
      class="mx-auto"
      height="430"
      max-height="500"
      min-height="430"
      style="border-radius: 0"
    >
      <v-img
        :src="require('@/assets/images/SOne_index_bg_searchtype.jpg')"
        height="450"
        max-height="500"
        min-height="430"
        cover
      >
        <div class="px-3">
          <v-row>
            <v-spacer></v-spacer>
            <v-col class="mt-5" cols="8">
              <div class="text-search-filter">หน้ายาง</div>
              <div style="font-size: 13px; color: white">ความกว้าง (มม.)</div>
              <div>
                <v-select
                  :item="[]"
                  density="compact"
                  placeholder="--เลือกหน้ายาง--"
                  variant="outlined"
                  hide-details
                  class="formLogintype"
                >
                </v-select>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="8">
              <div class="text-search-filter">ซีรีย์</div>
              <div style="font-size: 13px; color: white">
                อัตราส่วนความสูงแก้มยาง (%)
              </div>
              <div>
                <v-select
                  :item="[]"
                  density="compact"
                  placeholder="--เลือกซีรีย์--"
                  variant="outlined"
                  hide-details
                  class="formLogintype"
                >
                </v-select>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col class="mt-5" cols="8">
              <div class="text-search-filter">กระทะล้อ</div>
              <div style="font-size: 13px; color: white">
                เส้นผ่านศูนย์กลาง (นิ้ว)
              </div>
              <div>
                <v-select
                  :item="[]"
                  density="compact"
                  placeholder="--เลือกกระทะล้อ--"
                  variant="outlined"
                  hide-details
                  class="formLogintype"
                >
                </v-select>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="8" align="center">
              <a href="#"
                ><img
                  src="../assets/images/SOne_index_search.png"
                  width="100"
                  height="24"
                  border="0"
              /></a>
            </v-col>
          </v-row>
        </div>
      </v-img>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Filter",
};
</script>
<style scoped>
@font-face {
  font-family: "Conv_supermarket";
  src: url("../assets/fonts/supermarket.ttf");
  src: local("â˜º"), url("../assets/fonts/supermarket.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.header-serch-filter {
  height: 33px;
  background-color: #f05a28;
  font-family: Conv_supermarket;
  color: #ffffff;
  font-size: 21px;
}

.text-search-filter {
  font-family: Conv_supermarket;
  color: #ffffff;
  font-size: 21px;
  line-height: 21px;
}

.formLogintype {
  background-color: #ffffff;
  border: #f05a28 solid 1px;
}
</style>
