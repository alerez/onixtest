<template>
  <div>
    <div>
      <label>
        <input type="text">
      </label>
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
      <input type="number">
    </label>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

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
  }
}
</script>

<style scoped lang="scss">

</style>
