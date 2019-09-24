import axios from 'axios'


export default {
    auth: {
        me: () => axios.get('auth/me'),
        login: (data) => axios.post('login', data)
    },
    bkd: {
        findBkd: (params) => axios.get('bkd/', params),
        getBkd: () => axios.get('bkd'),
        addBkd: (data) => axios.post('bkd', data),
        editBkd: (data) => axios.put('bkd', data),
        deleteBkd: (data) => axios.delete('bkd', data),
    }
}