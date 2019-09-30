import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    tempat: {},
})

export const mutations = {
    set(state, tempats) {
        state.list = tempats
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {tempat}) {
        state.list.splice(state.list.indexOf(tempat), 1)
    },
    setTempat(state, tempat) { state.tempat = tempat },

    removeTempat(state, tempat) { 
        state.list.splice(state.list.indexOf(tempat), 1)
     }
}

export const actions = {
    async get({commit}) {
        await api.tempat.getTempat()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.tempat.findTempat(params.jenisId)
            .then((res) => {
                if (res.status === 200) {
                    commit('setTempat', res.values)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.tempat.getTempat().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/

    tempatfetch ({commit}) {
        return api.tempat.getTempat()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('remove')
                return error
            })
    },
    tempatfind ({commit}, params) {
        return axios.get('tempat/')
            .then(response => {
                commit('setTempat', response.values)
                return response
            })
    },
    tempatadd ({commit}, data) {
        return api.tempat.addTempat(data)
            .then(response => {
                commit('setTempat', response.data)
                return response
            })
    },
    tempatedit ({commit}, data) {
        return api.tempat.editTempat(data)
            .then(response => {
                commit('setTempat', response.data)
                console.log(response.data)
                return response
            })
    },
    tempatdelete ({commit}, data) {
        console.log(data)
        return api.tempat.deleteTempat(data)
            .then(response => {
                //commit('removeBkd', response.data)
                return response
            })
    },


}