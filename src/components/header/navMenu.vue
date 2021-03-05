<template>
  <div class="navMenu navMenuFlex">
    <div>
      <router-link to="/">{{ home }}</router-link>
    </div>
    <div class="navMenuFlex goodsMenu">
    </div>
    <div class="navMenuFlex basketMenu">
      <div>
        <router-link to="/basket">{{basket}} {{buyProduct.length}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "navMenu",
  data() {
    return{
      home: 'Главная',
      goods: {
        footwear: 'обувь',
        outerwear: 'верхняя одежда',
        underwear: 'нижнее белье',
        accessories: 'аксессуары',
      },
      basket: "Корзина",
    }
  },
  computed: {
    ...mapGetters(['buyProduct'])
  },
}
</script>

<style scoped>
a{
  color:white;
}
.navMenu{
  background-color:#053354;
  height:70px;
  color:white;
  border-bottom: white solid 2px;
}
.navMenuFlex{
  display:flex;
  flex-direction:column;
  align-items:center;
  flex-wrap:wrap;
  justify-items:center;
  justify-self:center;
  justify-content:center;
}
.goodsMenu{
  flex-basis:75%;
  margin-left:10px;
  z-index:999;
}
.goodsMenu > img{
  width:45px;
  height:45px;
}
.goodsMenu > div{
  margin-left:15px;
}

</style>
