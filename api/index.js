import axios from 'axios'


export default {
    auth: {
        me: () => axios.get('auth/me'),
        login: (data) => axios.post('auth/login', data)
    },
    bkd: {
        findBkd: (params) => axios.get('auth/bkd/', params),
        getBkd: () => axios.get('auth/bkd'),
        addBkd: (data) => axios.post('auth/bkd', data),
        editBkd: (data) => axios.put('auth/bkd', data),
        deleteBkd: (data) => axios.delete('auth/bkd', data),
    }
}