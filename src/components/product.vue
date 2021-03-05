<template>
  <div>
    <div class="product">
      <div class="productImg">
        <img :src="require('../assets/img/' + $attrs.imgs.img)" :alt="$attrs.imgs.img">
      </div>
      <div class="productPrice">
        <p>Цена: {{$attrs.price}} грн</p>
      </div>
      <div class="productShow">
        <router-link :to="`/${this.$route.name}/${this.$attrs.productCode}`">{{ productShow }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return{
      productShow: "Просмотреть товар"
    }
  },
}
</script>

<style scoped>
a{
  text-decoration:none;
  color:white;
  display:flex;
  margin:0 auto;
  text-align:center;
  align-items:center;
  justify-content:center;
  background-color:#053354;
  height:40px;
}
.product{
  width:250px;
  height:300px;
  background:#ffffff;
  margin:25px;
  border:#1a1a1a solid 1px;
}
.productImg{
  width:200px;
  height:200px;
  display:block;
  margin:0 auto;
  padding-top:22px;
}
.productImg > img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.productPrice{
  display:block;
  margin:10px 10px 10px 26px;
  color:black;
}


@media screen and (max-width:600px){

  .product{
    width:160px;
    height:240px;
  }
  .productImg{
    width:140px;
    height:140px;
  }
}
</style>
