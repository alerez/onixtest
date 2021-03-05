<template>
  <div>
    <div class="main">
      <div class="mainNav">
        <nav-catalog
            v-bind:catalog="'footwear'"
        ></nav-catalog>
      </div>
      <div class="mainBlock">
        <breadcrumbs class="mainBreadcrumbs"
                     v-bind:product="Breadcrumbs"
                     v-bind:productComponet="undefined"
        />
        <div class="mainProduct">
          <div v-for="(index, idx) in footwear" :key="idx">
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
import NavCatalog from "@/components/main/nav/navCatalog.vue";
import Breadcrumbs from "@/components/main/nav/breadcrumbs";
import EventBus from "@/main";

export default {
name: "footwear",
  components: {Breadcrumbs, NavCatalog, Product},
  data() {
    return{
      Breadcrumbs: 'обувь',
      categoryData: ''
    }
  },
  computed: {
    ...mapGetters(['footwear'])
  },
  methods: {
    ...mapActions(['GET_footwear']),
    updateCategory (data) {
      this.categoryData = data
    }
  },
  created() {
    this.GET_footwear();
    // let arrays = this.footwear
    // this.arrayData = [...new Set(arrays.map(x => x.category))]
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
