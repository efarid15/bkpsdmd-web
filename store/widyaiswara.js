import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    widyaiswara: {},
})

export const mutations = {
    set(state, pengajar) {
        state.list = pengajar
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {widyaiswara}) {
        state.list.splice(state.list.indexOf(widyaiswara), 1)
    },
    setWidyaiswara(state, widyaiswara) { state.widyaiswara = widyaiswara },

    removeWidyaiswara(state, widyaiswara) { 
        state.list.splice(state.list.indexOf(widyaiswara), 1)
     }
}

export const actions = {
    async get({commit}) {
        await api.widyaiswara.getWidyaiswara()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.widyaiswara.findWidyaiswara(params.widyaiswaraId)
            .then((res) => {
                if (res.status === 200) {
                    commit('setWidyaiswara', res.values)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.widyaiswara.getWidyaiswara().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/

    widyaiswarafetch ({commit}) {
        return api.widyaiswara.getWidyaiswara()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('remove')
                return error
            })
    },
    widyaiswarafind ({commit}, params) {
        return axios.get('widyaiswara/')
            .then(response => {
                commit('setWidyaiswara', response.values)
                return response
            })
    },
    widyaiswaraadd ({commit}, data) {
        return api.widyaiswara.addWidyaiswara(data)
            .then(response => {
                commit('setWidyaiswara', response.data)
                return response
            })
    },
    widyaiswaraedit ({commit}, data) {
        return api.widyaiswara.editWidyaiswara(data)
            .then(response => {
                commit('setWidyaiswara', response.data)
                console.log(response.data)
                return response
            })
    },
    widyaiswaradelete ({commit}, data) {
        console.log(data)
        return api.widyaiswara.deleteWidyaiswara(data)
            .then(response => {
                //commit('removeBkd', response.data)
                return response
            })
    },


}