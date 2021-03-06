<template>
  <div class="basketBg">
    <div v-if="this.buyProduct[0]" class="basketBlock">
      <div>
        <h1>ТОВАРЫ В KОРЗИНЕ</h1>
      </div>
      <div class="basket">
        <div v-for="(index, idx) in this.buyProduct" :key="idx" class="basketProduct">
          <div>
            <img :src="require('../../assets/img/' + index.image.img)">
          </div>
          <div>
            <p>{{index.titleName}}</p>
          </div>
          <div>
            <p>Цена: {{index.price}} грн</p>
          </div>
          <div>
            <div>
              Количество:
                <button v-if="index.quantity > 1" @click="emit_quantity(data={quantity: false, productCode: index.productCode})">-</button>
                <button v-if="index.quantity === 1" disabled>-</button>
                {{index.quantity}}
                <button @click="emit_quantity(data={quantity: true, productCode: index.productCode})">+</button>
            </div>
          </div>
          <button v-on:click="del_product_buy(idx)">Удалить</button>
        </div>
      </div>
      <div style="margin-top:30px">
        <h2>Общая цена: {{ cartTotal }} грн</h2>
      </div>
      <div class="basketButton">
        <div>
          <router-link to="/order">Заказать</router-link>
        </div>
        <div>
          <button v-on:click="delete_buy()">Очистить корзину</button>
        </div>
      </div>
    </div>
    <div v-if="!this.buyProduct[0]" class="basketBlock">
      <div>
        <h1>KОРЗИНА ПУСТАЯ</h1>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "basket",
  computed: {
    cartTotal() {
      let result = []

      if (this.buyProduct.length) {
        for (let item of this.buyProduct) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result
      } else {
        return 0
      }
  },
  ...mapGetters(['buyProduct'])
  },
  methods: {
    ...mapActions(['delete_product_buy', 'del_buy', 'emitQuantity']),
    del_product_buy: function del_product_buy(data){
      this.delete_product_buy(data)
      this.totalPrice()
    },
    delete_buy: function delete_buy(){
      this.del_buy()
    },
    totalPrice: function totalPrice(){
      this.price = 0
      for(let i = 0; i <= this.buyProduct.length; i++) {
        this.price += this.buyProduct[i].price
      }
    },
    emit_quantity: function emit_quantity(data){
      this.emitQuantity(data)
    }

  },
  created() {
    this.totalPrice()
  }
}
</script>

<style scoped>
.basketBg{
  height:83vh;
}
.basketBlock{
  text-align:center;
  margin-top:60px;
}
.basket{
  height:400px;
  overflow:auto;
}
.basketBlock{
  height:250px;
  margin:40px;
}
.basketProduct{
  display:flex;
  margin:10px;
  align-self:center;
  align-items:center;
  justify-content:center;
  justify-self:center;
  justify-items:center;
  border:2px solid #1a1a1a;
  background-color:white;
}
.basketProduct > div > img{
  width:80px;
  height:80px;
}
.basketProduct > div{
   flex-basis:20%;
}
.basketButton{
  display:flex;
  align-items:center;
  align-self:center;
  align-content:center;
  justify-items:center;
  justify-self:center;
  justify-content:center;
}
.basketButton > div{
  margin:20px;
}
a{
  padding:5px;
  margin:4px;
  background-color:#053354;
  font-size:16px;
  color:white;
  border:none;
  cursor:pointer;
}
</style>
