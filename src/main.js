import Vue from "vue";
import App from "./App.vue";
import Vuelidate from 'vuelidate';
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./styles/app.scss";

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
