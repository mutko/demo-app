import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/homepage/Home";
import HomeLogin from "./components/login/HomeLogin";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import Welcome from "./components/login/Welcome";
import PassForgoten from "./components/login/PassForgoten";
import PassSent from "./components/login/PassSent";
import Dashboard from "./components/login/Dashboard";
import Users from "./components/login/Users";
import Messages from "./components/login/Messages";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/signin",
      component: HomeLogin,
      children: [
        { path: "", component: Signin },
        { path: "/signup", component: Signup },
        { path: "/welcome", component: Welcome },
        { path: "/nopassword", component: PassForgoten },
        { path: "/passwordsent", component: PassSent },
        {
          path: "/dashboard",
          component: Dashboard,
          children: [
            { path: "", component: Users },
            { path: "/messages", component: Messages }
          ]
        }
      ]
    }
  ]
});
