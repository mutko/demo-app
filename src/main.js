import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./styles/app.scss";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/http://comtrade.sytes.net/api";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
