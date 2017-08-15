<template>
  <div id="app">
    <header>
      <router-link :to="'/'">Home</router-link>
      <hr>
    </header>
    <img src="./assets/logo-fork.png">
    <hr>
    <router-view></router-view>
    <footer style="margin-top: 100px">
      <hr>
      <p>@nadir copyright</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 800px;
  margin-left: 300px
}
</style>
