import "material-design-icons-iconfont/dist/material-design-icons.css";
import { createVuetify } from "vuetify";
import { aliases, md } from "vuetify/iconsets/md";
// import { md } from "vuetify/iconsets/md";
// import { mdi } from "vuetify/iconsets/mdi-svg";
import "vuetify/styles";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
});

export default vuetify;
