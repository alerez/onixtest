<template>
  <div>
    <div style="display:flex">
      <router-link to="/" class="breadcrumbs">Главная</router-link>
      <span style="margin-left:5px; margin-right:5px"> / </span>
      <router-link v-if="$attrs.product" :to="'/' + $route.name" class="breadcrumbs"> {{ $attrs.product }} </router-link>
      <span v-if="$attrs.productComponet" style="margin-left:5px; margin-right:5px"> / </span>
      <div v-if="$attrs.productComponet" class="breadcrumbs">{{ $attrs.productComponet }}</div>
    </div>
  </div>
</template>

<script>
export default {
name: "breadcrumbs"
}
</script>

<style scoped>
.breadcrumbs{
  color:#1a1a1a;
  text-decoration:none;
}
.breadcrumbs:hover{
  color:#1a1a1a;
  text-decoration:underline #053354;
}
</style>
