<template>
  <div class="container">
    <div class="title p24">Semua Kegiatan</div>

    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
      
    </a-table>
  </div>
</template>
<script>
import moment from "moment";

moment.locale("id");

const columns = [
  {
    title: "Nama Kegiatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat"
  },
  { title: "BKD", dataIndex: "namabkd", key: "namabkd" },
  { title: "Peserta", dataIndex: "jmlpeserta", key: "jmlpeserta" },
  { title: "Tanggal Kegiatan", dataIndex: "tglmulai", key: "tgl" },
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
  name: "activities",
  middleware: "auth",
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

  mounted() {
    this.$store.dispatch("pengajuan/approvefetchkabupaten").then(({ data }) => {
      this.data = data.values;
      for (let index = 0; index < this.data.length; index++) {
        const tglevent = moment(this.data[index]["tglmulai"]).format(
          "dddd, D MMMM YYYY"
        );
        this.$set(this.data[index], "tglmulai", tglevent);
        const tglsub = moment(this.data[index]["tglpengajuan"]).format(
          "dddd, D MMMM YYYY"
        );
        this.$set(this.data[index], "tglpengajuan", tglsub);
      }
      this.$store.commit("pengajuan/set", data.values);
    });
  },

  methods: {}
};
</script>