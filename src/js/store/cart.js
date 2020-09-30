import Vue from 'vue'

import * as cartApi from "~/js/api/cartApi.js"

export default {
    namespaced: true,
    state: {

        cart: [],
        loading: true

    },
    getters: {

        cart: state => state.cart,
        loading: state=> state.loading, 
        sum: state => state.cart.reduce((start, { price, quantity }) => start + price * quantity, 0),
        quantity: state => state.cart.reduce((start, { quantity }) => start + quantity, 0)

    },
    mutations: {

        getCart: (state, cart) => (state.cart = cart) && (state.loading = false),

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

        async getCart({ commit, dispatch }) {
            try {

                let data = await cartApi.all()
                commit('getCart', data.map(prod => ({ ...prod, link: 'http://placehold.it/100x100/' })))

            }
            catch  {
                  dispatch('alerts/add', { text: "Error by getting cart. Please, reload  page... " }, { root: true })
            }

        },
        async incCart({ commit, rootGetters, dispatch }, id) {

            try {

                let data = await cartApi.inc()

                if (+data === 1) {

                let good = rootGetters['catalog/catalog'].find(g => +g.id === +id)
                commit('incCart', good)
                }

            } catch (e) {
              

                dispatch('alerts/add', {timeout: 3000, text: "Error by adding of good from cart... Try again  " }, { root: true })

            }

        },
        async decCart({ commit, state, dispatch }, id) {

            try {

                let data = await cartApi.dec()

                if (+data === 1) {
                    let good = state.cart.find(g => +g.id === +id)
                    commit('decCart', good)
                }

            } catch (e) {

               dispatch('alerts/add', { timeout: 3000, text: "Error by delleting of good from cart... Try again  " }, { root: true })

            }

        }
    }
}