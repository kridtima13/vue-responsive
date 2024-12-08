<template>
  <v-container fluid>
    <Navbar />

    <v-card variant="flat" style="border-radius: 0">
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="3" xl="3" xxl="3">
          <Filter />
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="9" xl="9" xxl="9">
          <Banner />
        </v-col>
      </v-row>
    </v-card>

    <CarOption />

    <v-row class="d-none d-sm-none d-md-none d-lg-flex d-xl-flex">
      <v-col cols="12" sm="12" md="3" lg="3" xl="3" xxl="3">
        <Service />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6">
        <Events />
      </v-col>
      <v-col cols="12" sm="12" md="3" lg="3" xl="3" xxl="3">
        <News />
      </v-col>
    </v-row>

    <v-row class="d-sm-flex d-md-flex d-lg-none d-xl-none mobile-screen">
      <v-col cols="12" sm="12" md="12" lg="3" xl="3" xxl="3">
        <Events />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6">
        <Service />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3" xl="3" xxl="3">
        <News />
      </v-col>
    </v-row>

    <Footer />
  </v-container>
</template>

<script>
import Banner from "./components/Banner.vue";
import CarOption from "./components/CarOption.vue";
import Events from "./components/Events.vue";
import Filter from "./components/Filter.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import News from "./components/News.vue";
import Service from "./components/Service.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Filter,
    Banner,
    Footer,
    CarOption,
    Service,
    News,
    Events,
  },
};
</script>

<style>
#app {
  font-size: 13px;
}

@media (max-width: 600px) {
  .mobile-screen {
    display: flex;
  }
}
</style>
