<template>
  <div>
    <div class="header-serch-filter px-3 d-flex align-center justify-center">
      <v-toolbar-title text="ค้นหาศูนย์บริการใกล้บ้านคุณ"></v-toolbar-title>
    </div>
    <v-card
      variant="flat"
      class="pa-5"
      height="260"
      style="background-color: black; border-radius: 0"
    >
      <v-row>
        <v-col cols="3" class="d-flex align-center justify-end">
          <div class="text-search-filter">จังหวัด</div>
        </v-col>
        <v-col align="start" class="pa-1">
          <div>
            <v-select
              :item="[]"
              density="compact"
              placeholder="--เลือกจังหวัด--"
              variant="outlined"
              hide-details
              class="formLogintype"
            >
            </v-select>
          </div>
        </v-col>
      </v-row>
      <v-row class="pa-0">
        <v-col cols="3" class="d-flex align-center justify-end">
          <div class="text-search-filter">เขต/อำเภอ</div>
        </v-col>
        <v-col align="start" class="pa-1">
          <div>
            <v-select
              :item="[]"
              density="compact"
              placeholder="--เลือกเขต/อำเภอ--"
              variant="outlined"
              hide-details
              class="formLogintype"
            >
            </v-select>
          </div>
        </v-col>
      </v-row>
      <v-row class="pa-0">
        <v-col cols="3" class="d-flex align-center justify-end">
          <div class="text-search-filter">ถนน</div>
        </v-col>
        <v-col align="start" class="pa-1">
          <div>
            <v-select
              :item="[]"
              density="compact"
              placeholder="--เลือกถนน--"
              variant="outlined"
              hide-details
              class="formLogintype"
            >
            </v-select>
          </div>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <span class="text-red">หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง</span>
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
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Service",
};
</script>
<style scoped>
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
