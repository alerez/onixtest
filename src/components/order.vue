<template>
  <div class="order">
    <form class="orderBlock">
      <div class="name">
        <div>
          <p>Имя</p>
        </div>
        <input type="text" required>
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
        <input type="email" required>
      </div>
      <div>
        <div>
          <p>Телефон</p>
        </div>
        <input type="tel" required>
      </div>
      <div>
        <div>
          <p>Город</p>
        </div>
        <input type="text" required>
      </div>
      <div>
        <div>
          <p>Отделение Новой Почты</p>
        </div>
        <input type="text" required>
      </div>
      <div>
        <div>
          <p>Всего к оплате: {{cartTotal}} грн</p>
        </div>
      </div>
      <div>
        <div>
          <button @click="sumbit()" type="submit">Перейти к оплате</button>
        </div>
      </div>
    </form>
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
  },
  methods: {
    sumbit: function sumbit(){
      this.$router.push({ name: "orderbuy"})
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
