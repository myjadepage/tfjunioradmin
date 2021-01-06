import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueMoment from "vue-moment";

import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/tfjunior.css";
import "jquery.nicescroll";

Vue.config.productionTip = false;
Vue.use(vueMoment);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
