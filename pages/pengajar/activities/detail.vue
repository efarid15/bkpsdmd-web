<template>
  <div>
    <a-button
      @click="$router.go(-1)"
      type="link"
      class="cr-gray"
      icon="arrow-left"
      style="margin-bottom: 8px"
    >Kembali</a-button>

    <div class="container" style="margin-bottom: 16px">
      <div style="padding: 24px">
        <div class="fs-16 cr-black" style="margin-bottom: 8px">Informasi Kegiatan</div>
        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jenis Kegiatan</div>
            <div
              class="fs-14 cr-black text-capitalize"
            >Diklat Prajabatan Golongan I Angkatan X dan XI Tahun 2019</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jumlah Peserta</div>
            <div class="fs-14 cr-black text-capitalize">40 Orang</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Mulai</div>
            <div class="fs-14 cr-black text-capitalize">Senin, 20 Oktober 2019</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Berakhir</div>
            <div class="fs-14 cr-black text-capitalize">Senin, 20 Desember 2019</div>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tempat Kegiatan</div>
            <div
              class="fs-14 cr-black text-capitalize"
            >Campus I</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Ruangan</div>
            <div class="fs-14 cr-black text-capitalize">1B Lantai 1</div>
          </a-col>
          <a-col :xs="24" :sm="24" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Alamat</div>
            <div class="fs-14 cr-black text-capitalize">Jl. BTP Blok A No 537</div>
          </a-col>
        </a-row>

        <div>
          <nuxt-link to="/pengajar/activities/rundown" class="color-blue">
            Lihat Rundown Kegiatan <a-icon style="margin-left: 8px" type="right" />
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="title fs-18">Informasi Peserta Kegiatan</div>

      <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" />
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "No",
    dataIndex: "key",
    key: "key"
  },
  {
    title: "NIP",
    dataIndex: "nip",
    key: "nip"
  },
  {
    title: "Nama Peserta",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Instansi",
    dataIndex: "instansi",
    key: "instansi"
  }
];

const data = [
  {
    key: "1",
    nip: "000111222333444555666",
    name: "Dr. Jordi Alba",
    instansi: "Badan Pemberdayaan Masyarakat"
  },
  {
    key: "2",
    nip: "222999333777000666222",
    name: "Drs. Jhon Doe",
    instansi: "Kantor Kependudukan Catatan Sipil"
  },
  {
    key: "3",
    nip: "222999333777000666111",
    name: "M. Alfatah S.kom",
    instansi: "Kantor Pelayanan Administrasi Perizinan"
  }
];
export default {
  name: "details",
  layout: "pengajar",
  head() {
    return {
      title: "Detail Kegiatan - BKD"
    };
  },
  data() {
    return {
      columns,
      data
    };
  }
};
</script>