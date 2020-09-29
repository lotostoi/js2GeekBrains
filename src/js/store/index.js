import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//import search from "./search"
import cart from "./cart"
import catalog from "./catalog"
//import alerts from "./alerts"

 const store = new Vuex.Store({
 namespaced: true,
 modules: {
    catalog,
    cart
 },

 strict: process.env.NODE_ENV !== 'production'
})
export default store