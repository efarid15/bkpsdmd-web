import axios from 'axios'


export default {
    auth: {
        me: () => axios.get('me'),
        login: (data) => axios.post('login', data)
    },
    users: {
        findUser: (params) => axios.get('users/', params),
        getBkduser: () => axios.get('bkduser'),
        addBkduser: (data) => axios.post('bkduser', data),
        addMemberuser: (data) => axios.post('memberuser', data), 
        
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
        getSkpdbkd: (params) => axios.get('skpd/bkd/', params),
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
    kampus: {
        findKampus: (params) => axios.get('kampus/', params),
        findRuangan: (params) => axios.get('kampus/ruangan/', params),
        getKampus: () => axios.get('kampus'),
        getVKampus: () => axios.get('vkampus'),
        addKampus: (data) => axios.post('kampus', data),
        addRuangan: (data) => axios.post('ruangan', data),
        editRuangan: (data) => axios.put('ruangan', data),
        editKampus: (data) => axios.put('kampus', data),
        deleteKampus: (data) => axios.delete('kampus', data),
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
        getCountpengajuan: () => axios.get('pengajuan/count'),
        getApprove: () => axios.get('pengajuan/approve'),
        getApprovekabupaten: () => axios.get('pengajuan/approvekabupaten'),
        findApprovekabupaten: (params) => axios.get('pengajuan/approvekabupaten/', params),
        findApprove: (params) => axios.get('pengajuan/approve', params),
        setApprove: (data) => axios.put('pengajuan', data),
        setReject: (data) => axios.put('pengajuan/reject', data),
        addReject: (data) => axios.post('pengajuan/reject', data),
        addPengajuan: (data) => axios.post('pengajuan', data),
        //editPengajuan: (data) => axios.put('pengajuan', data),
    },
   
    kabupaten: {
        getKabupaten: () => axios.get('kabupaten'),
    },

    detailpengajuan: {
        findDetailpengajuan: (params) => axios.get('detailpengajuan/', params),
        getDetailpengajuan: () => axios.get('detailpengajuan'),
        addDetailpengajuan: (data) => axios.post('detailpengajuan', data),
    },
    rundown: {
        findRundown: (params) => axios.get('rundown/', params),
        listRundown: () => axios.get('detailpengajuan'),
        addRundown: (data) => axios.post('rundown', data),
    },


   
}