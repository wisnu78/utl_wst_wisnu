import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transaksi:[]
  },
  mutations: {
    add_transaksi:(state,playload)=>{
      state.transaksi.push(playload);
    }
  },
  actions: {
    save_transaksi({commit},playload){
          // alert(JSON.stringify(playload) + " Dari state");  
           commit('add_transaksi',playload);
       }
  },
  modules: {
  }
})
