<template>
  <div>
    <v-card class="mx-auto" height="463" max-height="500" min-height="463">
      <v-img
        cover
        height="463"
        max-height="500"
        min-height="463"
        :src="require('@/assets/images/SOne_index_banner.jpg')"
      >
        <div class="image-container d-flex flex-column ga-3">
          <div class="d-flex align-center justify-center cursor-pointer">
            <img src="@/assets/images/SOne_index_arrowup.png" border="0" />
          </div>
          <v-img
            :src="require('@/assets/images/SOne_index_pic01.jpg')"
            width="200"
            cover
            style="border: 1px solid red"
          />
          <v-img
            :src="require('@/assets/images/SOne_index_pic02.jpg')"
            width="200"
            cover
            style="border: 1px solid white"
          />
          <v-img
            :src="require('@/assets/images/SOne_index_pic02.jpg')"
            width="200"
            cover
            style="border: 1px solid white"
          />
          <div class="d-flex align-center justify-center cursor-pointer">
            <img src="@/assets/images/SOne_index_arrowdown.png" border="0" />
          </div>
        </div>
      </v-img>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>
<style scoped>
.image-container {
  position: absolute;
  top: 50%;
  right: 10px; /* ปรับตามต้องการ */
  transform: translateY(-50%);
}
</style>
