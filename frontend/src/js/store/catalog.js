import * as catalogApi from "@/js/api/catalogApi.js"
import router from "@/js/router/index"
import Vue from "vue"
export default {
    namespaced: true,
    state: {
        _catalog: [],
        catalog: [],
        value: '',
        loading: true
    },
    getters: {
        catalog: state => state.catalog,
        value: state => state.value,
        loading: state => state.loading,
        inCart: (state, getters, rootState, rootGetters) => id => rootGetters['cart/cart'].find(g => g._id === id)
    },
    mutations: {
        getCatalog: (state, catalog) => (state.catalog = state._catalog = catalog) && (state.loading = false),
        filter: (state, value) => {
            if (value !== '') {
                state.catalog = state._catalog.filter(g => g && g.title.toLowerCase().includes(value.toLowerCase()))
                state.value = value
            } else {
                state.catalog = state._catalog
                state.value = ''
            }
        },
        setOnInProcess: (state, id) => {
            let index = state.catalog.findIndex(p => p._id === id)
            Vue.set(state.catalog[index], 'inProcess', true)
        },
        setOffInProcess: (state, id) => {
            let index = state.catalog.findIndex(p => p._id === id)
            Vue.set(state.catalog[index], 'inProcess', false)
        }
    },
    actions: {
        async getCatalog({ commit, dispatch }) {

            try {
                let data = await catalogApi.all()
                commit('getCatalog', data.map(prod => ({ ...prod, link: 'http://placehold.it/150x100/', inCart: false, inProcess: false })))
            }
            catch {
                dispatch('alerts/add', { text: "Error by getting goods or cart. Please, reload  page... ", place: "center" }, { root: true })
            }

        },
        filter({ commit }, value) {
            if (!/catalog$/.test(window.location.href)) {
                router.push('/catalog')
            }
            commit('filter', value)
        },

        // blocking/unblocking buttons
        blockOn({ commit }, id) {
            commit('setOnInProcess', id)
        },
        blockOff({ commit }, id) {
            commit('setOffInProcess', id)
        },

    }
}