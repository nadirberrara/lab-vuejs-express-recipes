<template>

  <div class="dishesList">
    <h1>{{ message }}</h1>

      <ul v-for="dish in dishes" :style="styles2">
          <h2><router-link :to="'/'+ dish._id">{{ dish.name }}</router-link></h2>
          <!-- <h4>Description :</h4> -->
          <!-- <p>{{ dish.description }}</p> -->
          <p><img :src="dish.image" alt="pic cannot display" :style="styles"></p>
      </ul>


  </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "DISHES",
      dishes: null,
      styles: { height: "200px" },
      styles2: { margin: "20px", border: "1px solid grey" }
    };
  },
  created() {
    const myDishes = axios.create({
      baseURL: "http://localhost:3000/api/dishes"
    });

    function getDishes() {
      return myDishes.get("/").then(response => {
        return response.data;
      });
    }
    getDishes().then(dishes => {
      this.dishes = dishes;
    });
  }
};
</script>

<style scoped>
  img:
</style>
