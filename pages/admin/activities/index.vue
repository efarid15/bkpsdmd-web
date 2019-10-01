<template>
  <div class="container">
    <div class="title">Semua Kegiatan</div>

    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
      <span slot="action" slot-scope="text">
        <nuxt-link to="/admin/activities/rundown">Rundown</nuxt-link>
        <a-divider type="vertical"></a-divider>
        <nuxt-link to="/admin/activities/detail">Detail</nuxt-link>
      </span>
    </a-table>
  </div>
</template>
<script>

import moment from 'moment'

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
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 170,
    scopedSlots: { customRender: "action" }
  }
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
  name: "activities",
  head() {
    return {
      title: "Semua Kegiatan - BKPSDMD"
    };
  },
  data() {
    return {
      data: [],
      columns
    };
  },
  
  mounted () {
    this.$store.dispatch('pengajuan/approvefetch').then( ({ data }) => {
      this.data = data.values
      for (let index = 0; index < this.data.length; index++) {
        const tglevent = moment(this.data[index]['tglkegiatan']).format('dddd, D MMMM YYYY')
        this.$set(this.data[index], 'tglkegiatan', tglevent)

      }
      this.$store.commit('pengajuan/set', data.values)
      
    })

  },

  methods: {}
};
</script>