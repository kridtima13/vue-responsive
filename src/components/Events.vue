<template>
  <div>
    <v-card variant="flat" height="293" class="border-events">
      <div class="header-search-filter px-3 d-flex align-center justify-center">
        <v-toolbar-title text="News & Events"></v-toolbar-title>
        <v-spacer />
        <div class="d-flex align-center mx-1 cursor-pointer">
          <v-img
            :src="require('@/assets/images/SOne_index_bullet1.png')"
            width="10"
            height="10"
          ></v-img>
        </div>
        <div
          v-for="(item, index) in 2"
          :key="index"
          class="d-flex align-center mx-1 cursor-pointer"
        >
          <v-img
            @mouseover="hoverStates[index] = true"
            @mouseleave="hoverStates[index] = false"
            :src="
              hoverStates[index]
                ? require('@/assets/images/SOne_index_bullet1.png')
                : require('@/assets/images/SOne_index_bullet2.png')
            "
            width="10"
            height="10"
          ></v-img>
        </div>
      </div>

      <div>
        <v-row class="pa-4 d-flex">
          <v-col cols="4" class="d-flex justify-center align-center">
            <v-card variant="flat" width="300" style="border-radius: 0">
              <v-img
                :src="require('@/assets/images/SOne_index_pic3.jpg')"
                width="100%"
                cover
                style="border-bottom: 6px solid #f05a28"
              >
                <div
                  :style="{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundImage: `url(${require('@/assets/images/SOne_index_bg-black.png')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }"
                ></div>

                <div
                  class="text-in-image"
                  style="
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 10px;
                    border-radius: 4px;
                    font-weight: bold;
                  "
                >
                  19<br />
                  Nov<br />
                  2024
                </div>
              </v-img>
              <div
                class="pa-3 cursor-pointer d-flex align-center justify-center"
              >
                <span
                  >ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว
                  และกิจกรรม</span
                >
              </div>
            </v-card>
          </v-col>

          <v-col cols="4" class="d-flex justify-center align-cente">
            <v-card variant="flat" width="300" style="border-radius: 0">
              <v-img
                :src="require('@/assets/images/SOne_index_pic3.jpg')"
                width="100%"
                cover
              >
                <div
                  :style="{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundImage: `url(${require('@/assets/images/SOne_index_bg-black.png')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }"
                ></div>

                <div
                  class="text-in-image"
                  style="
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 10px;
                    border-radius: 4px;
                    font-weight: bold;
                  "
                >
                  19<br />
                  Nov<br />
                  2024
                </div>
              </v-img>
              <div
                class="pa-3 cursor-pointer d-flex align-center justify-center"
              >
                <span
                  >ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว
                  และกิจกรรม</span
                >
              </div>
            </v-card>
          </v-col>

          <v-col cols="4" class="d-flex justify-center align-center">
            <v-card variant="flat" width="300" style="border-radius: 0">
              <v-img
                :src="require('@/assets/images/SOne_index_pic3.jpg')"
                width="100%"
                cover
              >
                <div
                  :style="{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundImage: `url(${require('@/assets/images/SOne_index_bg-black.png')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }"
                ></div>

                <div
                  class="text-in-image"
                  style="
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 10px;
                    border-radius: 4px;
                    font-weight: bold;
                  "
                >
                  19<br />
                  Nov<br />
                  2024
                </div>
              </v-img>
              <div
                class="pa-3 cursor-pointer d-flex align-center justify-center"
              >
                <span
                  >ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว
                  และกิจกรรม</span
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Events",
  data() {
    return {
      hoverStates: [],
    };
  },
};
</script>
<style scoped>
.border-events {
  border: 1px solid #f05a28;
  border-bottom: 3px solid #f05a28;
  border-radius: 0;
}
.header-search-filter {
  height: 33px;
  font-family: Conv_supermarket;
  color: #000;
  font-size: 21px;
  border-bottom: 1px solid #f05a28;
}

span:hover {
  text-decoration: underline;
}

.text-in-image {
  position: relative;
  font-family: Tahoma;
  color: #ffffff;
  font-size: 10px;
  font-weight: normal;
  line-height: 11px;
}
</style>
