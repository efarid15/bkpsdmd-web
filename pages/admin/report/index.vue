<template>
  <div class="container">
    <div class="title p24">Laporan Kegiatan</div>
    
    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }">
      <span slot="status" slot-scope="text, record">
        <span class="color-green">Terlaksana</span>
      </span>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "Nama Kegiatan",
    dataIndex: "name",
    key: "name"
  },
  { title: "BKD", dataIndex: "bkd", key: "bkd" },
  { title: "Jumlah Peserta", dataIndex: "jumlah", key: "jumlah" },
  { title: "Waktu Kegiatan", dataIndex: "createdAt", key: "createdAt" },
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
  head() {
    return {
      title: "Laporan Kegiatan - BKPSDMD"
    };
  },
  data() {
    return {
      data,
      columns
    };
  }
};
</script>