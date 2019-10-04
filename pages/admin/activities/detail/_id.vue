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
          <a-col :xs="24" :sm="24" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase" style="margin-bottom: 8px">Instansi/BKD</div>
            <div>
              <a-avatar icon="user" style="margin-right: 8px" /> {{ this.detail.namabkd }}
            </div>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jenis Kegiatan</div>
            <div
              class="fs-14 cr-black text-capitalize"
            >{{ this.detail.jenisdiklat }}</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jumlah Peserta</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.jmlpeserta }}</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Mulai</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.tglmulai }}</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Berakhir</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.tglberakhir }}</div>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="container">
      <div class="title fs-18">Informasi Peserta Kegiatan</div>

      <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" />
    </div>
  </div>
</template>
<script>
import axios from "axios"
import moment from "moment"

moment.locale("id");

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
    title: "Instansi / BKD",
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
  name: "detailspengajuan",
  head() {
    return {
      title: "Detail Kegiatan - BKPSDMD"
    };
  },
  data() {
    return {
      detail: {},
      columns,
      data
    };
  },

  created() {
     let idpengajuan = this.$route.params.id 
     axios.get(`pengajuan/approve/${idpengajuan}`).then(result => {
        
        this.detail = result.data.values[0]
        
        let tglstart = moment(this.detail.tglmulai).format('dddd, D MMMM YYYY')
        this.$set(this.detail, 'tglmulai', tglstart)
        let tglend = moment(this.detail.tglberakhir).format('dddd, D MMMM YYYY')
        this.$set(this.detail, 'tglberakhir', tglend)

        

        });
      
    //this.baseaccount = this.$route.params.baseaccount;
  },
};
</script>