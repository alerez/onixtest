<template>
  <div class="productComponentBlock">
    <breadcrumbs class="Breadcrumbs" v-if="productCart['titleName']"
        v-bind:productComponet="this.productCart['titleName']"
        v-bind:product="this.breadcrumbs"
    ></breadcrumbs>
    <div class="productComponent">
      <div class="productComponentImg">
        <img v-if="productCart.image.img" :src="require('../assets/img/' + productCart.image.img)" :alt="productCart.image.img">
      </div>
      <div class="productComponentInfo">
        <div v-if="productCart['titleName']">
          <h1>{{ productCart['titleName'] }}</h1>
        </div>
        <div>
          <h3>Описание: {{productCart.description}}</h3>
        </div>
        <div>
          <h3>Цена: {{ productCart.price }} грн</h3>
        </div>
        <div>
          <div v-if="!this.buyProduct.find(el => el['productCode'] === this.productCart['productCode'])">
            <button v-on:click="emitProduct_buy">Купить</button>
          </div>
          <div v-if="!this.buyProduct.find(el => el['productCode'] === this.productCart['productCode'])" class="selectProduct">
            <div>
              <button v-if="quantity > 1" @click="emit_plus(false)">-</button>
              <button v-if="quantity === 1" disabled @click="emit_plus(false)">-</button>
            </div>
            <div>
              <p>{{this.quantity}}</p>
            </div>
            <div>
              <button @click="emit_plus(true)">+</button>
            </div>
          </div>
          <div>
            <button v-if="!this.buyProduct.find(el => el['productCode'] === this.productCart['productCode'])" v-on:click="emit_product_buy">Добавить в корзину</button>
            <button v-else-if="this.buyProduct.find(el => el['productCode'] === this.productCart['productCode'])" v-on:click="emit_delete_product">Удалить с корзины</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Breadcrumbs from "@/components/main/nav/breadcrumbs";

export default {
  name: "productComponent",
  components: {Breadcrumbs},
  data() {
    return {
      breadcrumbs: undefined,
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['product_id', 'product_buy', 'GET_outerwear', 'GET_footwear', 'GET_accessories', 'GET_underwear', 'delete_product']),
    emitProduct_buy: function emitproduct_buy() {
      let a = this.productCart
      a.quantity = this.quantity
      this.product_buy(a)
      this.$router.push({ name: "basket"})
    },
    emit_product_buy: function emit_product_buy() {
      let a = this.productCart
      a.quantity = this.quantity
      this.product_buy(a)
    },
    emit_product_id: function emit_product_id() {
      let data = {
        id: Number(this.$route.params.id),
        name: this.$route.name
      }
      this.product_id(data);
      if(!this.productCart){
        this.$router.push({ name: "Home"})
      }
    },
    emit_delete_product: function emit_delete_product() {
      let data = {
        id: Number(this.$route.params.id),
        name: this.$route.name
      }
      this.delete_product(data.id)
    },
    emit_plus: function emit_plus(data) {
      this.quantity (data ? this.quantity++ : this.quantity--)
    }
  },
  created() {
    if (this.$route.name === 'footwear'){
      this.GET_footwear().then(() => {
        this.emit_product_id()
      })
      this.breadcrumbs = 'обувь'
    }
    else if (this.$route.name === 'accessories'){
      this.GET_accessories().then(() => {
        this.emit_product_id()
      })
      this.breadcrumbs = 'аксесуары'
    }
    else if (this.$route.name === 'underwear'){
      this.GET_underwear().then(() => {
        this.emit_product_id()
      })
      this.breadcrumbs = 'нижнее белье'
    }
    else if (this.$route.name === 'outerwear'){
      this.GET_outerwear().then(() => {
        this.emit_product_id()
      })
      this.breadcrumbs = 'верхняя одежда'
    }
  },
  computed: {
    ...mapGetters(['productCart', 'footwear', 'accessories', 'outerwear', 'underwear', 'buyProduct']),
  }
}
</script>

<style scoped>
.productComponentBlock{
  margin-top:-10px;
  height:86vh;
}
.Breadcrumbs{
  display:flex;
  margin-top:30px;
  margin-left:6%;
  margin-bottom:0;
  width:300px;
  font-size:20px;
}
.productComponent{
  display:flex;
  margin-left:6%;
  margin-top:20px;
  color:#1a1a1a;
}
.productComponentImg > img{
  display:block;
  width:500px;
  height:500px;
}
.productComponentImg > div > img{
  width:96px;
  height:96px;
  margin:2px;
}

.selectProduct{
  display:flex;
}
.productComponentInfo{
  margin:20px;
}
.productComponentInfo > div{
  margin:10px;
}
@media screen and (max-width:800px){
  .productComponentImg > img{
    width:350px;
    height:350px;
  }
}
@media screen and (max-width:600px){
  .productComponentImg > img{
    width:250px;
    height:250px;
  }
  .productComponent{
    display:flex;
    flex-wrap:wrap;
  }
  .productComponentInfo{
    margin-left:-10px;
  }
}
</style>
