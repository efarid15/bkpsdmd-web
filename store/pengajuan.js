import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    pengajuan: {},
    reject: {},
})

export const mutations = {
    set(state, events) {
        state.list = events
    },
    setapprovekabupaten(state, events) {
        state.list = events
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {pengajuan}) {
        state.list.splice(state.list.indexOf(pengajuan), 1)
    },
    removeapprovekabupaten(state, {pengajuan}) {
        state.list.splice(state.list.indexOf(pengajuan), 1)
    },
    setPengajuan(state, pengajuan) { state.pengajuan = pengajuan },
    setReject(state, reject) { state.reject = reject },

    removePengajuan(state, pengajuan) { 
        state.list.splice(state.list.indexOf(pengajuan), 1)
     }
}

export const actions = {
    async get({commit}) {
        await api.pengajuan.getPengajuan()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.pengajuan.findPengajuan(params.idPengajuan)
            .then((res) => {
                if (res.status === 200) {
                    commit('setPengajuan', res.values)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.pengajuan.getPengajuan().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/
    
    approvefetch ({commit}) {
        return api.pengajuan.getApprove()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('remove_pengajuan')
                return error
            })
    },

    approvefetchkabupaten ({commit}) {
        return api.pengajuan.getApprovekabupaten()
            .then(response => {
                commit('setapprovekabupaten', response.values)
                return response
            })
            .catch(error => {
                commit('removeapprovekabupaten')
                return error
            })
    },

    pengajuanfetch ({commit}) {
        return api.pengajuan.getPengajuan()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('remove_pengajuan')
                return error
            })
    },
    approvefindkabupaten ({commit}, params) {
        return axios.get('pengajuan/approvekabupaten')
            .then(response => {
                commit('setPengajuan', response.values)
                return response
            })
    },
    approvefind ({commit}, params) {
        return axios.get('pengajuan/approve')
            .then(response => {
                commit('setPengajuan', response.values)
                return response
            })
    },
    pengajuanfind ({commit}, params) {
        return axios.get('pengajuan/')
            .then(response => {
                commit('setPengajuan', response.values)
                return response
            })
    },
    pengajuanadd ({commit}, data) {
        return api.pengajuan.addPengajuan(data)
            .then(response => {
                commit('setPengajuan', response.data)
                return response
            })
    },
    rejectadd ({commit}, data) {
        return api.pengajuan.addReject(data)
            .then(response => {
                commit('setReject', response.data)
                return response
            })
    },
    pengajuanedit ({commit}, data) {
        return api.pengajuan.editPengajuan(data)
            .then(response => {
                commit('setPengajuan', response.data)
                console.log(response)
                return response
            })
    },
    pengajuandelete ({commit}, data) {
        console.log(data)
        return api.pengajuan.deletePengajuan(data)
            .then(response => {
                //commit('removeBkd', response.data)
                return response
            })
    },

    setapprove ({commit}, data) {
        console.log(data)
        return api.pengajuan.setApprove(data)
            .then(response => {
                //commit('removeBkd', response.data)
                return response
            })
    },

    setreject ({commit}, data) {
        console.log(data)
        return api.pengajuan.setReject(data)
            .then(response => {
                //commit('removeBkd', response.data)
                return response
            })
    },


}