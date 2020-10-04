import Vue from 'vue'

import * as cartApi from "@/js/api/cartApi.js"

export default {
    namespaced: true,
    state: {
        cart: [],
        statistics: [],
        loading: true
    },
    getters: {
        cart: state => state.cart,
        loading: state => state.loading,
        statistics: state => state.statistics,
        sum: state => state.cart.reduce((start, { price, quantity }) => start + price * quantity, 0),
        quantity: state => state.cart.reduce((start, { quantity }) => start + quantity, 0)
    },
    mutations: {

        getCart: (state, cart) => (state.cart = cart) && (state.loading = false),

        addToCart: (state, prod) => state.cart.push({ ...prod, quantity: 1 }),

        getStatistics: (state, statistics) => state.statistics = statistics,

        incCart: (state, prod) => {
            let index = state.cart.findIndex(good => good._id === prod._id)
            Vue.set(state.cart[index], 'quantity', ++state.cart[index].quantity)
        },

        deleteFromCart: (state, prod) => {
            let index = state.cart.findIndex(good => good._id === prod._id)
            state.cart.splice(index, 1)
        },

        decCart: (state, prod) => {
            let index = state.cart.findIndex(good => good._id === prod._id)
            if (+prod.quantity > 1) {
                Vue.set(state.cart[index], 'quantity', --state.cart[index].quantity)
            }
        },
        clearCart: state => state.cart = [],
        setOnInProcess: (state, id) => {
            let index = state.cart.findIndex(p => p._id === id)
            if (index !== -1) {
                Vue.set(state.cart[index], 'inProcess', true)
            }
        },
        setOffInProcess: (state, id) => {
            let index = state.cart.findIndex(p => p._id === id)
            if (index !== -1)  { 
                Vue.set(state.cart[index], 'inProcess', false)
            }
           
        }

    },
    actions: {

        async getCart({ commit, dispatch }) {
            try {
                let data = await cartApi.all()
                commit('getCart', data.map(prod => ({ ...prod, link: 'http://placehold.it/100x100/', inProcess: false })))
            }
            catch {
                dispatch(
                    'alerts/add',
                    { text: "Error by getting goods or cart. Please, reload  page... ", place: 'center' },
                    { root: true }
                )
            }
        },

        async incCart({ state, commit, dispatch }, good) {
            dispatch('blockOn', good._id)
            try {
                let inCart = state.cart.find(prod => prod._id === good._id)
                if (inCart) {
                    await cartApi.inc(good._id)
                    commit('incCart', good)
                } else {
                    await cartApi.add(good._id)
                    commit('addToCart', good)
                }
            } catch (e) {
                dispatch('alerts/add', { timeout: 3000, text: "Error by adding of good from cart... Try again  " }, { root: true })
            }
            dispatch('blockOff', good._id)
            dispatch('getStatistics')
        },

        async decCart({ state, commit, dispatch }, good) {
            dispatch('blockOn', good._id)
            try {
                let inCart = state.cart.find(prod => prod._id === good._id)
                if (inCart && inCart.quantity > 1) {
                    await cartApi.dec(good._id)
                    commit('decCart', inCart)
                } else {
                    await cartApi.remove(good._id)
                    commit('deleteFromCart', inCart)
                }
            } catch (e) {
                dispatch('alerts/add', { timeout: 3000, text: "Error by delleting of good from cart... Try again  " }, { root: true })
            }
            dispatch('blockOff', good._id)
            dispatch('getStatistics')
        },

        async clearCart({ commit, dispatch }) {
          
            try {
                await cartApi.removeAll()
                commit('clearCart')
            } catch (e) {
                dispatch('alerts/add', { timeout: 3000, text: "Error by clearing of cart... Try again  " }, { root: true })
            }

            dispatch('getStatistics')
        },

        async getStatistics({ commit, dispatch }) {
            try {
                let statistics = await cartApi.statistics()
                commit('getStatistics', statistics)
            } catch (e) {
                console.log(e)
                dispatch('alerts/add', { timeout: 3000, text: "Error by clearing of cart... Try again  " }, { root: true })
            }
        },
        blockOn({ commit, dispatch }, id) {
            dispatch('catalog/blockOn', id, { root:true})
            commit('setOnInProcess', id)
        },
        blockOff({ commit, dispatch }, id) {
            dispatch('catalog/blockOff', id, { root: true })
            commit('setOffInProcess', id)
        },

    }
}