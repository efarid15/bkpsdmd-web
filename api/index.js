import axios from 'axios'


export default {
    auth: {
        me: () => axios.get('me'),
        login: (data) => axios.post('login', data)
    },
    bkd: {
        findBkd: (params) => axios.get('bkd/', params),
        getBkd: () => axios.get('bkd'),
        addBkd: (data) => axios.post('bkd', data),
        editBkd: (data) => axios.put('bkd', data),
        deleteBkd: (data) => axios.delete('bkd', data),
    },
    kegiatan: {
        findKegiatan: (params) => axios.get('kegiatan/', params),
        getKegiatan: () => axios.get('kegiatan'),
        addKegiatan: (data) => axios.post('kegiatan', data),
        editKegiatan: (data) => axios.put('kegiatan', data),
        deleteKegiatan: (data) => axios.delete('kegiatan', data),
    },
    diklat: {
        findDiklat: (params) => axios.get('jenisdiklat/', params),
        getDiklat: () => axios.get('jenisdiklat'),
        addDiklat: (data) => axios.post('jenisdiklat', data),
        editDiklat: (data) => axios.put('jenisdiklat', data),
        deleteDiklat: (data) => axios.delete('jenisdiklat', data),
    },


   
}