import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from "@/components/main/homePage.vue";
import basket from "@/components/header/basket.vue";

import accessories from "@/components/main/catalogProduct/accessories.vue";
import footwear from "@/components/main/catalogProduct/footwear.vue";
import outerwear from "@/components/main/catalogProduct/outerwear.vue";
import underwear from "@/components/main/catalogProduct/underwear.vue";
import productComponent from "@/components/productComponent.vue";
import order from "@/components/order.vue";
import orderBuy from "@/components/orderBuy.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage
  },
  {
    path: '/basket',
    name: 'basket',
    component: basket
  },
  {
    path: '/accessories',
    name: 'accessories',
    component: accessories
  },
  {
    path: '/accessories/:id',
    name: 'accessories',
    component: productComponent
  },
  {
    path: '/footwear',
    name: 'footwear',
    component: footwear
  },
  {
    path: '/footwear/:id',
    name: 'footwear',
    component: productComponent
  },
  {
    path: '/outerwear',
    name: 'outerwear',
    component: outerwear,
  },
  {
    path: '/outerwear/:id',
    name: 'outerwear',
    component: productComponent
  },
  {
    path: '/underwear',
    name: 'underwear',
    component: underwear
  },
  {
    path: '/underwear/:id',
    name: 'underwear',
    component: productComponent
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/orderbuy',
    name: 'orderbuy',
    component: orderBuy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
