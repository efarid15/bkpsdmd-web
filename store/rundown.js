import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    rundown: {},
})

export const mutations = {
    set(state, events) {
        state.list = events
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {rundown}) {
        state.list.splice(state.list.indexOf(rundown), 1)
    },
    setrundown(state, rundown) { state.rundown = rundown },

    removerundown(state, rundown) { 
        state.list.splice(state.list.indexOf(rundown), 1)
     }
}

export const actions = {
    async get({commit}) {
        await api.rundown.listRundown()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.rundown.findRundown(params.idPengajuan)
            .then((res) => {
                if (res.status === 200) {
                    commit('setrundown', res.values)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.rundown.listRundown().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/
    
    
    rundownfetch ({commit}) {
        return api.rundown.listRundown()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('removerundown')
                return error
            })
    },
    rundownfind ({commit}, params) {
        return axios.get('rundown/')
            .then(response => {
                commit('setrundown', response.values)
                return response
            })
    },
    rundownadd ({commit}, data) {
        return api.rundown.addRundown(data)
            .then(response => {
                commit('setrundown', response.data)
                return response
            })
    },

}