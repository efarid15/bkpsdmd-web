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
    skpd: {
        findSkpd: (params) => axios.get('skpd/', params),
        getSkpd: () => axios.get('skpd'),
        addSkpd: (data) => axios.post('skpd', data),
        editSkpd: (data) => axios.put('skpd', data),
        deleteSkpd: (data) => axios.delete('skpd', data),
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
    tempat: {
        findTempat: (params) => axios.get('tempat/', params),
        getTempat: () => axios.get('tempat'),
        addTempat: (data) => axios.post('tempat', data),
        editTempat: (data) => axios.put('tempat', data),
        deleteTempat: (data) => axios.delete('tempat', data),
    },
    widyaiswara: {
        findWidyaiswara: (params) => axios.get('widyaiswara/', params),
        getWidyaiswara: () => axios.get('widyaiswara'),
        addWidyaiswara: (data) => axios.post('widyaiswara', data),
        editWidyaiswara: (data) => axios.put('widyaiswara', data),
        deleteWidyaiswara: (data) => axios.delete('widyaiswara', data),
    },

    pengajuan: {
        findPengajuan: (params) => axios.get('pengajuan/', params),
        getPengajuan: () => axios.get('pengajuan'),
        getApprove: () => axios.get('pengajuan/approve'),
        addPengajuan: (data) => axios.post('pengajuan', data),
        editPengajuan: (data) => axios.put('pengajuan', data),
    },

   
}