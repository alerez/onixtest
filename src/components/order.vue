<template>
  <div class="order">
    <div class="orderBlock">
      <div class="name">
        <div>
          <p>Имя</p>
        </div>
        <input type="text">
      </div>
      <div class="lastName">
        <div>
          <p>Фамилия</p>
        </div>
        <input>
      </div>
      <div class="email">
        <div>
          <p>Почта</p>
        </div>
        <input type="email">
      </div>
      <div>
        <div>
          <p>Телефон</p>
        </div>
        <input type="tel">
      </div>
      <div>
        <div>
          <p>Город</p>
        </div>
        <input type="text">
      </div>
      <div>
        <div>
          <p>Отделение Новой Почты</p>
        </div>
        <input type="text">
      </div>
      <div>
        <div>
          <p>Всего к оплате: {{cartTotal}} грн</p>
        </div>
      </div>
      <div>
        <div>
          <router-link to="/orderBuy">Оплатить</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "order",
  data() {
    return{

    }
  },
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
    ...mapGetters(['buyProduct']),
  },
  created() {
    if(!this.cartTotal){
      this.$router.push({ name: "Home"})
    }
  }
}
</script>

<style scoped>
.order{
  display:flex;
  flex-direction:column;
  align-content:center;
  align-self:center;
  align-items:center;
  justify-content:center;
  justify-self:center;
  justify-items:center;
  height:89vh;
}
.orderBlock > div{
  display:flex;
  margin:15px;
  flex-flow: column;
}
.orderBlock > input{
  display:block;
}
</style>
