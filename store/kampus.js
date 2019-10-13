import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    listkampus: [],
    campus: {},
    ruangan: {},
})

export const mutations = {
    set(state, kampuss) {
        state.list = kampuss
    },
    setKampus(state, campuss) {
        state.listkampus = campuss
    },
    add(state, value) {
        merge(state.list, value)
    },
    addKampus(state, value) {
        merge(state.listkampus, value)
    },
    remove(state, {kampus}) {
        state.list.splice(state.list.indexOf(kampus), 1)
    },
    removeKampus(state, {kampus}) {
        state.listkampus.splice(state.listkampus.indexOf(kampus), 1)
    },
    setCampus(state, campus) { state.campus = campus },
    setRuangan(state, ruangan) { state.ruangan = ruangan },

    removeRuangan(state, ruangan) { 
        state.list.splice(state.list.indexOf(ruangan), 1)
     },
     removeCampus(state, campus) { 
        state.listkampus.splice(state.listkampus.indexOf(campus), 1)
     }
    
}

export const actions = {
    async get({commit}) {
        await api.kampus.getKampus()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.kampus.findTempat(params.jenisId)
            .then((res) => {
                if (res.status === 200) {
                    commit('setKampus', res.values)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.kampus.getKampus().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/

    kampusfetch ({commit}) {
        return api.kampus.getKampus()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('remove')
                return error
            })
    },
    vkampusfetch ({commit}) {
        return api.kampus.getVKampus()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('remove')
                return error
            })
    },
    kampusfind ({commit}, params) {
        return axios.get('kampus/')
            .then(response => {
                commit('setKampus', response.values)
                return response
            })
    },
    ruanganfind ({commit}, params) {
        return axios.get('ruangan/')
            .then(response => {
                commit('setKampus', response.values)
                return response
            })
    },
    kampusfindruangan ({commit}, params) {
        return axios.get('kampus/ruangan/')
            .then(response => {
                commit('setKampus', response.values)
                return response
            })
    },
    kampusadd ({commit}, data) {
        return api.kampus.addKampus(data)
            .then(response => {
                commit('setKampus', response.data)
                return response
            })
    },
    ruanganadd ({commit}, data) {
        return api.kampus.addRuangan(data)
            .then(response => {
                commit('setRuangan', response.data)
                return response
            })
    },
    ruanganedit ({commit}, data) {
        return api.kampus.editRuangan(data)
            .then(response => {
                commit('setRuangan', response.data)
                return response
            })
    },
    kampusedit ({commit}, data) {
        return api.kampus.editKampus(data)
            .then(response => {
                commit('setKampus', response.data)
                console.log(response.data)
                return response
            })
    },
    kampusdelete ({commit}, data) {
        console.log(data)
        return api.kampus.deleteKampus(data)
            .then(response => {
                //commit('removeBkd', response.data)
                return response
            })
    },


}