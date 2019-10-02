import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    diklat: {},
})

export const mutations = {
    set(state, diklats) {
        state.list = diklats
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {diklat}) {
        state.list.splice(state.list.indexOf(diklat), 1)
    },
    setDiklat(state, diklat) { state.diklat = diklat },

    removeDiklat(state, diklat) { 
        state.list.splice(state.list.indexOf(diklat), 1)
     }
}

export const actions = {
    async get({commit}) {
        await api.diklat.getDiklat()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.diklat.findDiklat(params.jenisId)
            .then((res) => {
                if (res.status === 200) {
                    commit('setBkd', res.values)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.diklat.getDiklat().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/

    diklatfetch ({commit}) {
        return api.diklat.getDiklat()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('remove')
                return error
            })
    },
    diklatfind ({commit}, params) {
        return axios.get('diklat/')
            .then(response => {
                commit('setDiklat', response.values)
                return response
            })
    },
    diklatadd ({commit}, data) {
        return api.diklat.addDiklat(data)
            .then(response => {
                commit('setDiklat', response.data)
                return response
            })
    },
    diklatedit ({commit}, data) {
        return api.diklat.editDiklat(data)
            .then(response => {
                commit('setDiklat', response.data)
                console.log(response)
                return response
            })
    },
    diklatdelete ({commit}, data) {
        console.log(data)
        return api.diklat.deleteDiklat(data)
            .then(response => {
                //commit('removeBkd', response.data)
                return response
            })
    },


}