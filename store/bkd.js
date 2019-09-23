import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    bkd: {},
})

export const mutations = {
    set(state, bkds) {
        state.list = bkds
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {bkd}) {
        state.list.splice(state.list.indexOf(bkd), 1)
    },
    setBkd(state, bkd) { state.bkd = bkd }
}

export const actions = {
    async get({commit}) {
        await api.getBkd()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.data)
                }
            })
    },
    async show({commit}, params) {
        await api.findBkd(params.bkd_id)
            .then((res) => {
                if (res.status === 200) {
                    commit('setBkd', res.data)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.bkd.getBkd().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/

    bkdfetch ({commit}) {
        return api.bkd.getBkd()
            .then(response => {
                commit('set', response.data.data)
                return response
            })
            .catch(error => {
                commit('reset_bkd')
                return error
            })
    },
    bkdfind ({commit}, params) {
        return axios.get('auth/bkd/')
            .then(response => {
                commit('setBkd', response.data)
                return response
            })
    },
    bkdadd ({commit}, data) {
        return api.bkd.addBkd(data)
            .then(response => {
                commit('setBkd', response.data)
                return response
            })
    },
    bkdedit ({commit}, data) {
        return api.bkd.editBkd(data)
            .then(response => {
                commit('setBkd', response.data)
                return response
            })
    },
    bkddelete ({commit}, data) {
        return api.bkd.deleteBkd(data)
            .then(response => {
                commit('remove', response.data)
                return response
            })
    },


}