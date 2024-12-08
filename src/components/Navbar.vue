<template>
  <div>
    <div class="d-flex align-center justify-space-between">
      <div>
        <v-img
          :src="require('../assets/images/SOne_index_logo.png')"
          cover
          width="300"
        ></v-img>
      </div>
      <div class="d-flex flex-column ga-2 align-end">
        <div class="d-flex align-center justify-end gc-2">
          <a>
            <v-img
              :src="require('../assets/images/SOne_index_iconthai.jpg')"
              width="25"
            ></v-img>
          </a>
          <a>
            <v-img
              @mouseover="hover = true"
              @mouseleave="hover = false"
              :src="
                hover
                  ? require('../assets/images/SOne_index_iconeng.jpg')
                  : require('../assets/images/SOne_index_iconeng2.jpg')
              "
              width="25"
            >
            </v-img>
          </a>
        </div>

        <div
          class="d-sm-flex d-md-none d-lg-none d-xl-none gc-2 align-end mobile-screen"
        >
          <v-img
            @mouseover="hoverFacebook = true"
            @mouseleave="hoverFacebook = false"
            :src="
              hoverFacebook
                ? require('@/assets/images/SOne_index_btfacebook1.png')
                : require('@/assets/images/SOne_index_btfacebook.png')
            "
            width="20"
            height="20"
          ></v-img>
          <v-img
            @mouseover="hoverTwitter = true"
            @mouseleave="hoverTwitter = false"
            :src="
              hoverTwitter
                ? require('@/assets/images/SOne_index_bttwitter1.png')
                : require('@/assets/images/SOne_index_bttwitter.png')
            "
            width="20"
            height="20"
          ></v-img>
          <v-img
            @mouseover="hoverYoutube = true"
            @mouseleave="hoverYoutube = false"
            :src="
              hoverYoutube
                ? require('@/assets/images/SOne_index_btyoutube1.png')
                : require('@/assets/images/SOne_index_btyoutube.png')
            "
            width="20"
            height="20"
          ></v-img>
        </div>

        <div class="d-none d-sm-none d-md-flex d-lg-flex" style="width: 300px">
          <v-text-field
            density="compact"
            placeholder="Search..."
            variant="outlined"
            hide-details
          ></v-text-field>
          <div
            class="rounded-e-lg d-flex justify-center align-center cursor-pointer"
            style="height: 40px; width: 40px; background-color: black"
          >
            <v-icon icon="search" color="white"></v-icon>
          </div>
        </div>

        <div class="d-none d-sm-none d-md-flex d-lg-flex align-center gc-2">
          <a class="cursor-pointer"> About S-ONE </a>
          |
          <a class="cursor-pointer"> Job Opportunity </a>
          |
          <a class="cursor-pointer"> Contact Us </a>
          |
          <a class="cursor-pointer"> Site Map </a>
        </div>
      </div>
    </div>

    <div
      class="rounded-lg my-3 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex align-center"
      style="height: 40px; background-color: black; color: white"
    >
      <div class="mx-3 d-flex">
        <v-img
          :src="require('@/assets/images/SOne_index_menu02.png')"
          width="20"
          height="20"
        ></v-img>
      </div>
      <div class="d-flex" style="color: red">Product & Services</div>
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="d-flex align-center mx-3"
      >
        <v-img
          @mouseover="hoverStates[index] = true"
          @mouseleave="hoverStates[index] = false"
          :src="
            hoverStates[index]
              ? require('@/assets/images/SOne_index_menu02.png')
              : require('@/assets/images/SOne_index_menu01.png')
          "
          width="20"
          height="20"
        ></v-img>
        <a class="cursor-pointer mx-2">{{ item.text }}</a>
      </div>
      <v-spacer />
      <div class="d-flex mr-2 gc-2 align-end">
        <v-img
          @mouseover="hoverFacebook = true"
          @mouseleave="hoverFacebook = false"
          :src="
            hoverFacebook
              ? require('@/assets/images/SOne_index_btfacebook1.png')
              : require('@/assets/images/SOne_index_btfacebook.png')
          "
          width="20"
          height="20"
        ></v-img>
        <v-img
          @mouseover="hoverTwitter = true"
          @mouseleave="hoverTwitter = false"
          :src="
            hoverTwitter
              ? require('@/assets/images/SOne_index_bttwitter1.png')
              : require('@/assets/images/SOne_index_bttwitter.png')
          "
          width="20"
          height="20"
        ></v-img>
        <v-img
          @mouseover="hoverYoutube = true"
          @mouseleave="hoverYoutube = false"
          :src="
            hoverYoutube
              ? require('@/assets/images/SOne_index_btyoutube1.png')
              : require('@/assets/images/SOne_index_btyoutube.png')
          "
          width="20"
          height="20"
        ></v-img>
      </div>
    </div>

    <!-- Mobile mode -->
    <div class="d-sm-flex d-xs-flex d-md-none d-lg-none w-100 mobile-screen">
      <v-text-field
        density="compact"
        placeholder="Search..."
        variant="outlined"
        hide-details
      ></v-text-field>
      <div
        class="rounded-e-lg d-flex justify-center align-center cursor-pointer"
        style="height: 40px; width: 40px; background-color: black"
      >
        <v-icon icon="search" color="white"></v-icon>
      </div>
    </div>

    <v-sheet
      class="py-2 d-sm-flex d-md-none d-lg-none mobile-screen"
      max-width="960"
    >
      <v-slide-group>
        <v-slide-group-item>
          <v-btn variant="text" class="text-capitalize"> About S-ONE </v-btn>
        </v-slide-group-item>
        <v-slide-group-item>
          <v-btn variant="text" class="text-capitalize">
            Job Opportunity
          </v-btn>
        </v-slide-group-item>
        <v-slide-group-item>
          <v-btn variant="text" class="text-capitalize"> Contact Us </v-btn>
        </v-slide-group-item>
        <v-slide-group-item>
          <v-btn variant="text" class="text-capitalize"> Site Map </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

    <v-sheet
      class="rounded-lg mb-2 pa-2 d-sm-flex d-md-none d-lg-none mobile-screen"
      max-width="960"
      style="background-color: black; color: white"
    >
      <v-slide-group>
        <v-slide-group-item>
          <v-img
            :src="require('@/assets/images/SOne_index_menu02.png')"
            width="20"
            height="20"
          ></v-img>
          <div class="mx-2" style="color: red">Product & Services</div>
        </v-slide-group-item>
        <v-slide-group-item v-for="(item, index) in menuItems" :key="index">
          <v-img
            @mouseover="hoverStates[index] = true"
            @mouseleave="hoverStates[index] = false"
            :src="
              hoverStates[index]
                ? require('@/assets/images/SOne_index_menu02.png')
                : require('@/assets/images/SOne_index_menu01.png')
            "
            width="20"
            height="20"
          ></v-img>
          <a class="cursor-pointer mx-2">{{ item.text }}</a>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      hover: false,
      hoverFacebook: false,
      hoverTwitter: false,
      hoverYoutube: false,
      menuItems: [
        { text: "Promotions" },
        { text: "News & Events" },
        { text: "Safety Tips" },
        { text: "FAQS" },
        { text: "Location" },
      ],
      hoverStates: [],
    };
  },
};
</script>
<style scoped>
a:hover {
  color: red;
}

@media (max-width: 600px) {
  .mobile-screen {
    display: flex;
  }
}
</style>
