<template>
  <div>
    <div>
      <div class="navCatalog" v-for="(index, idx) in nav.name" :key="idx">
        <div>
          <router-link :to="idx">{{index}}</router-link>
        </div>
        <div v-if="$attrs.catalog === idx" style="margin-left:20px">
          <div v-for="(index2, idx2) in nav.catalog[$attrs.catalog]" :key="idx2">
            <label>
              <input type="radio" v-bind:value="idx2" v-model="category" @click="catalog(idx2)">{{index2}}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import EventBus from "@/main";

export default {
  data () {
    return {
      arrayData: [],
      category: null
    }
  },
  created() {
    this.GET_all()
    // let arrays = this.$attrs.id
    // let arrayss = [...new Set(arrays.map(x => x.category))]
    // this.arrayData = arrayss
  },
  computed: {
    ...mapGetters(['nav'])
  },
  methods: {
    ...mapActions(['GET_all']),
    catalog: function catalog(data){
      if(this.category === data){
        EventBus.$emit('DATA_CATEGORY', '')
        this.category = ''
      }else {
        this.category = data
        EventBus.$emit('DATA_CATEGORY', data)
      }
    }
  },
}
</script>

<style scoped>
*{
  color:#1a1a1a;
}
.navCatalog > div{
  padding:5px;
}
.navCatalog > div > div{
  padding:5px;
}
.navCatalog > div > div > label{
  cursor:pointer;
}
.navCatalog > div > div > label > input{
  margin-right:5px;

}
</style>
