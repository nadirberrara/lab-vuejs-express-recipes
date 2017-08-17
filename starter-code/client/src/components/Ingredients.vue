<template>
  <div>
    <h3>Choose the amount of each ingredient you need :</h3>
    <p v-for="ingredient in ingredients">
        {{ ingredient.name }}
        <input type="number" name="" value="">
        <button type="submit" name="button">Ok</button>
      </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["ingredients"]
};
</script>
