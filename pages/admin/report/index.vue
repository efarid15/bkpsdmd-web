<template>
  <div class="container">
    <div class="title p24">Laporan Kegiatan</div>
    
    <a-table :columns="columns" :dataSource="report" :scroll="{ x: 980 }" rowKey="id">
      <span slot="tglmulai" slot-scope="text, record">
                <span>{{moment(record.tglmulai, "YYYY-MM-DD").format('dddd')}}, {{moment(record.tglmulai, "YYYY-MM-DD").format('LL')}}</span>
      </span>
      <span slot="status" slot-scope="text, record">
        <span class="color-green">Disetujui</span>
      </span>
    </a-table>
  </div>
</template>
<script>
import moment from "moment"
const columns = [
  {
    title: "Nama Kegiatan",
    dataIndex: "jenisdiklat",
    key: "name"
  },
  { title: "BKD", dataIndex: "namabkd", key: "namabkd" },
  { title: "Jumlah Peserta", dataIndex: "jmlpeserta", key: "jmlpeserta" },
  { title: "Waktu Kegiatan", dataIndex: "tglmulai", key: "tglmulai", scopedSlots: { customRender: "tglmulai" } },
  {
    title: "Status",
    key: "status",
    fixed: "right",
    width: 120,
    scopedSlots: { customRender: "status" }
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
  name: "report",
  middleware: "auth",
  head() {
    return {
      title: "Laporan Kegiatan - BKPSDMD"
    };
  },
  data() {
    return {
      report: [],
      data,
      columns
    };
  },
  mounted(){
    this.$store.dispatch('pengajuan/approvefind').then( ({ data }) => {
      this.report = data.values
         
    })
  },
  methods: {
    moment
  }
};
</script>