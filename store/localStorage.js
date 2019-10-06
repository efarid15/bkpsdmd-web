import api from '~/api'
import { setAuthToken, resetAuthToken } from '~/utils/auth'
import cookies from 'js-cookie'



export const state = () => ({
    authUser: {},
    authLogin: {}
})

export const mutations = {
    set_user(state, user) {
        state.authUser = user
    },
    set_login(state, result) {
        state.authLogin = result
    },
    reset_user(state) {
        state.authUser = null
    },
    reset_login(state) {
        state.authLogin = null
    },
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.authLogin) {
            commit('set_login', req.session.authLogin)
        }
    },

    fetch({ commit }) {
        return api.auth.me()
            .then(response => {
                commit('set_user', response.data.result)
                return response
            })
            .catch(error => {
                commit('reset_user')
                return error
            })
    },
    login({ commit }, data) {
        return api.auth.login(data)
            .then(response => {
                commit('set_login', response.data.user)
                setAuthToken(response.data.token)
                cookies.set('x-access-token', response.data.token, { expires: 7000 })
                return response
                console.log(response.data.user)
            })
    },

    reset({ commit }) {
        commit('reset_user')
        commit('reset_login')
        resetAuthToken()
        cookies.remove('x-access-token')
        return Promise.resolve()
    }
}

