import * as catalogApi from "@/js/api/catalogApi.js"
import router from "@/js/router/index"

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
        loading: state=> state.loading, 
        inCart: (state, getters, rootState, rootGetters) => id => rootGetters['cart/cart'].find(g => +g.id === +id)
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
        }
    },
    actions: {
        async getCatalog({ commit, dispatch }) {

            try {

                let data = await catalogApi.all()
                commit('getCatalog', data.map(prod => ({ ...prod, link: 'http://placehold.it/150x100/', inCart: false })))

            }
            catch  {
                dispatch('alerts/add',{text:"Error by getting goods. Please, reload  page... "}, {root:true})
            }

        },
        filter({commit},value) {
            router.push('/catalog')
            commit('filter', value)
        }

    }
}