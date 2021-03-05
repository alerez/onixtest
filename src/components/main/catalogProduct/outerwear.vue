<template>
  <div>
    <div class="main">
      <div class="mainNav">
        <nav-catalog
            v-bind:catalog="'outerwear'"
        ></nav-catalog>
      </div>
      <div class="mainBlock">
        <breadcrumbs class="mainBreadcrumbs"
                     v-bind:product="Breadcrumbs"
                     v-bind:productComponet="undefined"
        />
        <div class="mainProduct">
          <div v-for="(index, idx) in outerwear" :key="idx">
            <product
                v-if="categoryData === index.category || categoryData === ''"
                v-bind:imgs="index.image"
                v-bind:titleName="index.titleName"
                v-bind:price="index.price"
                v-bind:description="index.description"
                v-bind:category="index.category"
                v-bind:productCode="index.productCode"
            ></product>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Product from "@/components/product.vue";
import navCatalog from "@/components/main/nav/navCatalog.vue";
import Breadcrumbs from "@/components/main/nav/breadcrumbs";
import EventBus from "@/main";

export default {
  name: "outerwear",
  components: {Breadcrumbs, Product, navCatalog},
  data() {
    return{
      Breadcrumbs: 'верхняя одежда',
      categoryData: ''
    }
  },
  computed: {
    ...mapGetters(['outerwear'])
  },
  methods: {
    ...mapActions(['GET_outerwear']),
    updateCategory (data) {
      this.categoryData = data
    }
  },
  created() {
    this.GET_outerwear();
  },
  mounted() {
    EventBus.$on('DATA_CATEGORY', (data) => {
      this.updateCategory(data)
    })
  }
}
</script>

<style scoped>

</style>
