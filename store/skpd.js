import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    skpd: {},
})

export const mutations = {
    set(state, skpds) {
        state.list = skpds
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {skpd}) {
        state.list.splice(state.list.indexOf(skpd), 1)
    },
    setSkpd(state, skpd) { state.skpd = skpd },

    removeSkpd(state, skpd) { 
        state.list.splice(state.list.indexOf(skpd), 1)
     }
}

export const actions = {
    async get({commit}) {
        await api.skpd.getSkpd()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.skpd.findSkpd(params.skpd_id)
            .then((res) => {
                if (res.status === 200) {
                    commit('setSkpd', res.values)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.skpd.getSkpd().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/

    skpdfetch ({commit}) {
        return api.skpd.getSkpd()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('remove')
                return error
            })
    },
    skpdfind ({commit}, params) {
        return axios.get('skpd/')
            .then(response => {
                commit('setSkpd', response.values)
                return response
            })
    },
    skpdadd ({commit}, data) {
        return api.skpd.addSkpd(data)
            .then(response => {
                commit('setSkpd', response.data)
                return response
            })
    },
    skpdedit ({commit}, data) {
        return api.skpd.editSkpd(data)
            .then(response => {
                commit('setSkpd', response.data)
                console.log(response)
                return response
            })
    },
    skpddelete ({commit}, data) {
        console.log(data)
        return api.skpd.deleteSkpd(data)
            .then(response => {
                //commit('removeBkd', response.data)
                return response
            })
    },


}