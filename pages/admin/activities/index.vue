<template>
  <div class="container">
    <div class="title">Semua Kegiatan</div>

    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }">
      <span slot="action" slot-scope="text">
        <nuxt-link to="/admin/activities/rundown">Rundown</nuxt-link>
        <a-divider type="vertical"></a-divider>
        <nuxt-link to="/admin/activities/detail">Detail</nuxt-link>
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
  { title: "Peserta", dataIndex: "jumlah", key: "jumlah" },
  { title: "Tanggal Kegiatan", dataIndex: "createdAt", key: "createdAt" },
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
      data,
      columns
    };
  },
  methods: {}
};
</script>