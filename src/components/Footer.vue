<template>
  <div class="d-flex align-center">
    <div>
      <v-img
        :src="require('../assets/images/SOne_index_logos.png')"
        cover
        width="130"
      ></v-img>
    </div>

    <div
      class="rounded-lg my-3 px-3 d-flex align-center w-100"
      style="height: 40px; background-color: black; color: white"
    >
      Copyright © 2014
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped></style>
