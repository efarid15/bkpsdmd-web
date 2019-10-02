import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    kegiatan: {},
})

export const mutations = {
    set(state, events) {
        state.list = events
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {kegiatan}) {
        state.list.splice(state.list.indexOf(kegiatan), 1)
    },
    setKegiatan(state, kegiatan) { state.kegiatan = kegiatan },

    removeKegiatan(state, kegiatan) { 
        state.list.splice(state.list.indexOf(kegiatan), 1)
     }
}

export const actions = {
    async get({commit}) {
        await api.kegiatan.getKegiatan()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.kegiatan.findKegiatan(params.idKegiatan)
            .then((res) => {
                if (res.status === 200) {
                    commit('setKegiatan', res.values)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.kegiatan.getKegiatan().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/

    kegiatanfetch ({commit}) {
        return api.kegiatan.getKegiatan()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('remove_kegiatan')
                return error
            })
    },
    kegiatanfind ({commit}, params) {
        return axios.get('kegiatan/')
            .then(response => {
                commit('setKegiatan', response.values)
                return response
            })
    },
    kegiatanadd ({commit}, data) {
        return api.kegiatan.addKegiatan(data)
            .then(response => {
                commit('setKegiatan', response.data)
                return response
            })
    },
    kegiatanedit ({commit}, data) {
        return api.kegiatan.editKegiatan(data)
            .then(response => {
                commit('setKegiatan', response.data)
                console.log(response)
                return response
            })
    },
    kegiatandelete ({commit}, data) {
        console.log(data)
        return api.kegiatan.deleteKegiatan(data)
            .then(response => {
                //commit('removeBkd', response.data)
                return response
            })
    },


}