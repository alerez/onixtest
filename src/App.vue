<template>
  <div id="app" class="bg">
    <loader class="bg"></loader>
  </div>
</template>

<script>
import Loader from "@/views/Loader.vue";
export default {
  components: {Loader}
}
</script>

<style lang="scss">
*{
  padding:0;
  margin:0;
  font-family: Roboto, sans-serif;
}
a{
  text-decoration:none;
}
body{
  background-color: #e3e1e1;
}
</style>
