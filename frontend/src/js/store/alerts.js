
export default {

    namespaced: true,

    state: {
        // array of all alerts
        all: [],
        place: 'corner'
    },
    getters: {
        all: state => state.all,
        place: state => state.place,
    },
    mutations: {
        add(state, payload) {

            // adding object of error in the array
            if (payload.place && payload.place === 'center') {
                state.all[0] = payload
            } else {
                state.all.push(payload)
            }


            if (payload.place) {
                state.place = payload.place
            }

        },

        // deleteing  object by index

        dellByIndex(state, id) {
            const index = state.all.findIndex(a => a.id === id)
            state.all.splice(index, 1)
        }

    },
    actions: {
        add({ commit, state }, payload) {

            const id = Date.now()

            // adding error's object 
            commit('add', { ...payload, id: id })

            if (payload.timeout) {

                //  if the "timeout" property is defined, then we are deleting this object from the array, after <timeout> ms
                setTimeout(() => commit('dellByIndex', id), payload.timeout)
            }
        }
    }

}