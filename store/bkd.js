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
    setBkd(state, bkd) { state.bkd = bkd },

    removeBkd(state, bkd) { 
        state.list.splice(state.list.indexOf(bkd), 1)
     }
}

export const actions = {
    async get({commit}) {
        await api.getBkd()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.findBkd(params.bkd_id)
            .then((res) => {
                if (res.status === 200) {
                    commit('setBkd', res.values)
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
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('reset_bkd')
                return error
            })
    },
    kabupatenfetch ({commit}) {
        return api.kabupaten.getKabupaten()
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    },
    bkdfind ({commit}, params) {
        return axios.get('bkd/')
            .then(response => {
                commit('setBkd', response.values)
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
                console.log(response)
                return response
            })
    },
    bkddelete ({commit}, data) {
        console.log(data)
        return api.bkd.deleteBkd(data)
            .then(response => {
                //commit('removeBkd', response.data)
                return response
            })
    },


}