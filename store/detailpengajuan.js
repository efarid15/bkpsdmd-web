import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    detailpengajuan: {},
})

export const mutations = {
    set(state, events) {
        state.list = events
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {detailpengajuan}) {
        state.list.splice(state.list.indexOf(detailpengajuan), 1)
    },
    setDetailpengajuan(state, detailpengajuan) { state.detailpengajuan = detailpengajuan },

    removeDetailpengajuan(state, detailpengajuan) { 
        state.list.splice(state.list.indexOf(detailpengajuan), 1)
     }
}

export const actions = {
    async get({commit}) {
        await api.detailpengajuan.getDetailpengajuan()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.detailpengajuan.findDetailpengajuan(params.idPengajuan)
            .then((res) => {
                if (res.status === 200) {
                    commit('setDetailpengajuan', res.values)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.detailpengajuan.getDetailpengajuan().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/
    
    
    detailpengajuanfetch ({commit}) {
        return api.detailpengajuan.getDetailpengajuan()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('removeDetailpengajuan')
                return error
            })
    },
    detailpengajuanfind ({commit}, params) {
        return axios.get('detailpengajuan/')
            .then(response => {
                commit('setDetailpengajuan', response.values)
                return response
            })
    },
    detailpengajuanadd ({commit}, data) {
        return api.detailpengajuan.addDetailpengajuan(data)
            .then(response => {
                commit('setDetailpengajuan', response.data)
                return response
            })
    },

}