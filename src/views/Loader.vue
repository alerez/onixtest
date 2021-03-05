<template>
  <div>
    <navMenu></navMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import navMenu from "@/components/header/navMenu.vue";
export default {
  name: "Loader",
  components: {navMenu},
}
</script>

<style scoped>

</style>
