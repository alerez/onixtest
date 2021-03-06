<template>
  <div class="container">
    <div>
      ЗАКАЗАНО
    </div>
    <div>
      <router-link to="/">
        На главную
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "computed"
}
</script>

<style scoped>
.container{
  background-color:darkgreen;
  height:90vh;
}
.container > div {
  display:flex;
  flex-direction:column;
  align-self:center;
  align-content:center;
  align-items:center;
  justify-self:center;
  justify-content:center;
  justify-items:center;
  color:#fff;
  height:40vh;
}
a{
  font-size:20px;
  background-color:white;
  color:black;
  padding:10px;
}
</style>
