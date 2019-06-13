import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/homepage/Home";
import HomeLogin from "./components/login/HomeLogin";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/login",
      name: "homelogin",
      component: HomeLogin
    }
  ]
});
