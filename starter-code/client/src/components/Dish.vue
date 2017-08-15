<template>
  <div>

    <p v-if="dish">
      <h1> {{ dish.name }} </h1>
      <p><img :src="dish.image" alt="pic cannot display" :style="stylesImg"></p>
      <h4>Description :</h4>
      <p>{{ dish.description }}</p>
      <button type="button" name="button">Edit {{ dish.name }} description</button>
    </p>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dish: null,
      stylesImg: { height: "300px" }
    };
  },
  created() {
    const myDishes = axios.create({
      baseURL: "http://localhost:3000/api/dishes"
    });

    function getDish(dishName) {
      return myDishes.get("/" + dishName).then(response => {
        return response.data;
      });
    }
    getDish(this.$route.params.dishName).then(dish => {
      this.dish = dish;
    });
  }
};
</script>

<style lang="css">
</style>
