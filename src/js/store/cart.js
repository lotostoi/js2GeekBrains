import Vue from 'vue'

import * as cartApi from "~/js/api/cartApi.js"

export default {
    namespaced: true,
    state: {

        cart: []

    },
    getters: {

        cart: state => state.cart,
        sum: state => state.cart.reduce((start, { price, quantity }) => start + price * quantity, 0),
        quantity: state => state.cart.reduce((start, { quantity }) => start + quantity, 0)

    },
    mutations: {

        getCart: (state, cart) => state.cart = cart,

        incCart: (state, prod) => {

            let index = state.cart.findIndex(good => +good.id === +prod.id)
            if (index !== -1) {
                Vue.set(state.cart[index], 'quantity', ++state.cart[index].quantity)
            } else {
                state.cart.push({ ...prod, quantity: 1 })
              

            }

        },
        decCart: (state, prod) => {

            let index = state.cart.findIndex(good => +good.id === +prod.id)

            if (+prod.quantity === 1) {
                state.cart.splice(index, 1)
            } else {
                Vue.set(state.cart[index], 'quantity', --state.cart[index].quantity)
            }

        }

    },
    actions: {

        async getCart({ commit }) {
            try {

                let data = await cartApi.all()
                commit('getCart', data.map(prod => ({ ...prod, link: 'http://placehold.it/100x100/' })))
                
            }
            catch (e) {
                console.log(e)
            }

        },
        async incCart({ commit, rootGetters }, id) {
          
            let good = rootGetters['catalog/catalog'].find(g => +g.id === +id)
            commit('incCart', good)

        },
        async decCart({ commit, state }, id) {
           
            let good = state.cart.find(g => +g.id === +id)

            commit('decCart', good)

        }
    }
}