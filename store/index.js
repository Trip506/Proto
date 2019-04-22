import Vue from 'vue'

// Cockpit API Filters
// YOURTOKEN&filter[_id]=myentryid


export const state = () => ({
    apiRoot: 'http://localhost',
    apiEntryPoint: '/api',
    apiToken: 'cfd974713763e995599407dabed44e',
    apiTokenDates: '1b169d577ca5bba4213a80c36e3c41',
    fetchedData: [''],
    count: 0,
})

export const mutations = {
    pushData(state, data) {
        state.fetchedData = data
    },

    increment(state) {
        state.count++
    }


}

export const getters = {
    getFetchedData(state) {
        return state.fetchedData
    },

},

    actions = {
        fetchData: ({ commit, state }, id) => {
            Vue.http
                .get(
                    state.apiRoot + state.apiEntryPoint + '/collections/get/blog?token=' + state.apiToken + '&filter[_id]=' + id
                )
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    commit("pushData", data)
                    console.log(id)
                })
        },
        incrementAction: (context) => {
            context.commit('increment')
        }
    }


