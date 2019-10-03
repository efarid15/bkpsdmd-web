import api from '~/api'
import cookies from "js-cookie";
import {values} from  "lodash";
import axios from "axios";


export const state = () => ({
    list: [],
    user: {},
})

export const mutations = {
    set(state, users) {
        state.list = users
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {user}) {
        state.list.splice(state.list.indexOf(user), 1)
    },
    setUser(state, user) { state.user = user },

    removeUser(state, user) { 
        state.list.splice(state.list.indexOf(user), 1)
     }
}

export const actions = {
    async get({commit}) {
        await api.users.getBkduser()
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.values)
                }
            })
    },
    async show({commit}, params) {
        await api.users.findUser(params.jenisId)
            .then((res) => {
                if (res.status === 200) {
                    commit('setUser', res.values)
                }
            })
    },


    async nuxtServerInit ({commit}) {
        let {data} = await api.users.getBkduser().then(response => {data})
        commit('set', values(data))
    },

   /* async GET_BKD ({ commit }) {
        const { data } = await api.bkd.getBkd().then(response => {})
        commit('SET_BKD', data)
    },*/

    bkduserfetch ({commit}) {
        return api.users.getBkduser()
            .then(response => {
                commit('set', response.values)
                return response
            })
            .catch(error => {
                commit('remove')
                return error
            })
    },
    userfind ({commit}, params) {
        return axios.get('users/')
            .then(response => {
                commit('setUser', response.values)
                return response
            })
    },
    bkduseradd ({commit}, data) {
        return api.users.addBkduser(data)
            .then(response => {
                commit('setUser', response.data)
                return response
            })
    },
    


}