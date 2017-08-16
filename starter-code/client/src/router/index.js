import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import Dishes from "@/components/Dishes";
import Dish from "@/components/Dish";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Dishes",
      component: Dishes
    },
    {
      path: "/:dishName",
      name: "Dish",
      component: Dish
    }
  ]
});
