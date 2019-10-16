import cookie from 'cookie'
import {setAuthToken, resetAuthToken} from '~/utils/auth'

export const state = () => ({
    sidebar: true,
    authUser: {},
    authLogin: {}
})

export const mutations = {
    toggleSidebar (state) {
        state.sidebar = !state.sidebar
    },
    set_user(state, user) {
        state.authUser = user
    },
    set_login(state, result) {
        state.authLogin = result
    },
    reset_user(state) {
        state.authUser = null
        localStorage.clear()
    },
    reset_login(state) {
        state.authLogin = null
    },
}

export const actions = {
    async nuxtServerInit ({dispatch}, context) {
        return new Promise((resolve, reject) => {
            const cookies = cookie.parse(context.req.headers.cookie || '')
            if (cookies.hasOwnProperty('x-access-token')) {
                setAuthToken(cookies['x-access-token'])
                dispatch('auth/fetch')
                    .then(result => {
                        console.log(result.data.result)
                        resolve(true)
                    })
                    .catch(error => {
                        console.log('fetch user error', error)
                        resetAuthToken()
                        resolve(false)
                    })
            } else {
                resetAuthToken()
                resolve(false)
            }
        })
    }
}