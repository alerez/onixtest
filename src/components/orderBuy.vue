<template>
  <div class="orderBuy">
    <div>
      <label>
        Card Number
        <input type="text">
      </label>
      DATE
      <select>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>
      <select>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
        <option>2026</option>
        <option>2027</option>
        <option>2028</option>
        <option>2029</option>
        <option>2030</option>
        <option>2031</option>
      </select>
    </div>
    <label>
      CVV
      <input type="number">
    </label>
    <button @click="sumbit()" type="submit">Оплатить</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
name: "orderBuy",
  data() {
    return {

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
  ...mapActions(['del_buy']),
    sumbit: function sumbit(){
      this.del_buy()
      this.$router.push({ name: "complete"})
    }
  }
}
</script>

<style scoped lang="scss">
a{
  padding:5px;
  margin:4px;
  background-color:#053354;
  font-size:16px;
  color:white;
  border:none;
  cursor:pointer;
}
.orderBuy{
  display:flex;
  flex-direction:column;
  align-self:center;
  align-content:center;
  align-items:center;
  justify-self:center;
  justify-content:center;
  justify-items:center;
  height:80vh;
}
.orderBuy > div{
  margin:5px;
}
</style>
