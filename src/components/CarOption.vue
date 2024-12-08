<template>
  <div>
    <v-row class="mt-2">
      <v-col
        v-for="(item, index) in menuItems"
        :key="index"
        cols="auto"
        sm="4"
        md="4"
        lg="2"
        xl="2"
        xxl="2"
      >
        <v-img
          @mouseover="hoverStates[index] = true"
          @mouseleave="hoverStates[index] = false"
          :src="
            hoverStates[index]
              ? require(`@/assets/images/${item.hoverImage}`)
              : require(`@/assets/images/${item.defaultImage}`)
          "
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "CarOtion",
  data() {
    return {
      hoverStates: [],
      menuItems: [
        {
          defaultImage: "SOne_index_bt-tire1.jpg",
          hoverImage: "SOne_index_bt-tire.jpg",
        },
        {
          defaultImage: "SOne_index_bt-break1.jpg",
          hoverImage: "SOne_index_bt-break.jpg",
        },
        {
          defaultImage: "SOne_index_bt-battery1.jpg",
          hoverImage: "SOne_index_bt-battery.jpg",
        },
        {
          defaultImage: "SOne_index_bt-chokeup1.jpg",
          hoverImage: "SOne_index_bt-chokeup.jpg",
        },
        {
          defaultImage: "SOne_index_bt-oil1.jpg",
          hoverImage: "SOne_index_bt-oil.jpg",
        },
        {
          defaultImage: "SOne_index_bt-guarantee1.jpg",
          hoverImage: "SOne_index_bt-guarantee.jpg",
        },
      ],
    };
  },
};
</script>
<style></style>
