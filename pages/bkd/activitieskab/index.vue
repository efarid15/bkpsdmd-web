<template>
  <div class="container">
    <div class="title p24">Semua Kegiatan</div>

    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
      
    </a-table>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";

moment.locale("id");

const columns = [
  {
    title: "Nama Kegiatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat"
  },
  { title: "BKD", dataIndex: "namabkd", key: "namabkd" },
  { title: "Peserta", dataIndex: "jmlpeserta", key: "jmlpeserta" },
  { title: "Tanggal Kegiatan", dataIndex: "tglkegiatan", key: "tgl" },
  { title: "Tanggal Pengajuan", dataIndex: "tglpengajuan", key: "tglpengajuan" },
  
];

const data = [
  {
    key: "1",
    name: "Diklat Prajabatan Golongan I Angkatan X dan XI Tahun 2019",
    bkd: "Dinas Perhubungan",
    createdAt: "Senin, 10 November 2019",
    jumlah: "40"
  },
  {
    key: "2",
    name: "Diklat Prajabatan Golongan II Angkatan X dan XI Tahun 2019",
    bkd: "Dinas Pengelolaan Kebersihan",
    createdAt: "Minggu, 17 November 2019",
    jumlah: "45"
  }
];

export default {
  name: "activitieskab",
  layout: "bkd",
  middleware: "auth",
  head() {
    return {
      title: "Kegiatan Diklat Kab - BKD"
    };
  },
  data() {
    return {
      data: [],
      columns
    };
  },

  mounted() {
      let idbkd = this.$store.state.localStorage.authUser['bkdid']
       axios.get(`pengajuan/approvekabupaten/${idbkd}`).then(result => {
        this.data = result.data.values;
        
        for (let index = 0; index < this.data.length; index++) {

        let tglevent = moment(this.data[index]['tglkegiatan']).format('dddd, D MMMM YYYY')
        let tglsub = moment(this.data[index]["tglpengajuan"]).format('dddd, D MMMM YYYY')
        this.$set(this.data[index], "tglpengajuan", tglsub);
        this.$set(this.data[index], 'tglkegiatan', tglevent)

      }
      this.$store.commit('pengajuan/set', data.values)

        
      });

    
  },

  methods: {}
};
</script>