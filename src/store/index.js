import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";
import axios from "axios";

const url = '/json'

const getFootwear = {
  method: 'get',
  url: url + '/footwear.json',
  headers: {
    'Content-Type': 'application/json'
  },
};
const getOuterwear = {
  method: 'get',
  url: url + '/outerwear.json',
  headers: {
    'Content-Type': 'application/json'
  },
};
const getUnderwear = {
  method: 'get',
  url: url + '/underwear.json',
  headers: {
    'Content-Type': 'application/json'
  },
};
const getAccessories = {
  method: 'get',
  url: url + '/accessories.json',
  headers: {
    'Content-Type': 'application/json'
  },
};
const getAll = {
  method: 'get',
  url: url + '/nav.json',
  headers: {
    'Content-Type': 'application/json'
  },
};

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    buyProduct: [],
    buyProductBuy: 0,

    footwear: null,
    outerwear: null,
    underwear: null,
    accessories: null,
    nav: null,

    productCart: null,
  },
  actions: {
    GET_footwear: async ({commit}) => {
      await axios(getFootwear)
          .then(response => response.data)
          .then(res => {
            commit('GET_footwear', res)
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    GET_outerwear: async ({commit}) => {
      await axios(getOuterwear)
          .then(response => response.data)
          .then(res => {
            commit('GET_outerwear', res)
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    GET_underwear: async ({commit}) => {
      await axios(getUnderwear)
          .then(response => response.data)
          .then(res => {
            commit('GET_underwear', res)
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    GET_accessories: async ({commit}) => {
      await axios(getAccessories)
          .then(response => response.data)
          .then(res => {
            commit('GET_accessories', res)
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    GET_all: async ({commit}) => {
      await axios(getAll)
          .then(response => response.data)
          .then(res => {
            commit('GET_all', res)
          })
          .catch(function (error) {
            console.log(error);
          });
    },

    product_id: ({commit}, data) => {
      commit('product_id', data)
    },
    product_buy: ({commit}, data) => {
      commit('product_buy', data)
    },

    delete_product: ({commit}, data) => {
      commit('delete_product', data)
    },
    delete_product_buy: ({commit}, data) => {
      commit('delete_product_buy', data)
    },
    del_buy: ({commit}) => {
      commit('del_buy')
    },
    emitQuantity: ({commit}, data) => {
      commit('emitQuantity', data)
    }
  },
  mutations: {
    GET_footwear: (state, res) => {
      return state.footwear = res
    },
    GET_outerwear: (state, res) => {
      return state.outerwear = res
    },
    GET_underwear: (state, res) => {
      return state.underwear = res
    },
    GET_accessories: (state, res) => {
      return state.accessories = res
    },
    GET_all: (state, res) => {
      return state.nav = res
    },

    product_id: (state, data) => {
      return state.productCart = state[data.name].find(element => element['productCode'] === data.id)
    },
    product_buy: (state, data) => {
      let a = state.buyProduct.find(element => element['productCode'] === data['productCode'])
      if(a === undefined){
        return state.buyProduct.push(data)
      }
      else {
        return state.buyProduct[data['productCode']]
      }
    },
    delete_product: (state, data) => {
      for(let i = 0; i < state.buyProduct.length; i++) {
        if(state.buyProduct[i]['productCode'] === data) {
          return state.buyProduct.splice(i, 1);
        }
      }
    },

     delete_product_buy: (state, data) => {
      return state.buyProduct.splice(data, 1)
    },
    del_buy: state => {
      return state.buyProduct = []
    },
    emitQuantity: (state, data) => {
      for(let i = 0; i < state.buyProduct.length; i++) {
        if(state.buyProduct[i]['productCode'] === data.productCode) {
          return state.buyProduct[i].quantity (data.quantity ? state.buyProduct[i].quantity++ : state.buyProduct[i].quantity--)
        }
      }
    }
  },
  getters: {
    footwear: state => {
      return state.footwear
    },
    outerwear: state => {
      return state.outerwear
    },
    underwear: state => {
      return state.underwear
    },
    accessories: state => {
      return state.accessories
    },
    nav: state => {
      return state.nav
    },

    productCart: state => {
      return state.productCart
    },
    buyProduct: state => {
      return state.buyProduct
    },
    buyProductBuy: state => {
      return state.buyProductBuy += state.buyProduct.price
    }
  }
})
