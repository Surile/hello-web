import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home";
import User from "@/pages/user";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/user",
      name: "User",
      component: User
    }
  ]
});
