import axios from 'axios'
export default {
    auth: {
        me: () => axios.get('auth/me'),
        login: (data) => axios.post('auth/login', data)
    },
    bkd: {
      list: () => axios.get('bkd/all'),
    }
}