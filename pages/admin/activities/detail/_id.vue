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
              <a-avatar icon="user" style="margin-right: 8px" />
              <strong>{{ this.detail.namabkd }}</strong>
            </div>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="8" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jenis Kegiatan</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.jenisdiklat }}</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="8" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jumlah Peserta</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.jmlpeserta }}</div>
          </a-col>
          
        </a-row>
        <a-row :gutter="16">
          <a-col :xs="12" :sm="8" :md="8" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tgl on Campus I</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.tglstartoncamp1 }} - {{ this.detail.tglendoncamp1 }}</div>
          </a-col>
          <a-col :xs="12" :sm="8" :md="8" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tgl On Campus II</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.tglstartoncamp2 }} - {{ this.detail.tglendoncamp2 }}</div>
          </a-col>
          <a-col :xs="12" :sm="8" :md="6" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tgl on Campus III</div>
            <div class="fs-14 cr-black text-capitalize"><span>{{ this.detail.tglstartoncamp3 }}</span> - {{ this.detail.tglendoncamp3 }}</div>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="container">
      <div class="title p24">Informasi Peserta Kegiatan</div>

      <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";

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
    dataIndex: "nama",
    key: "nama"
  },
  {
    title: "Instansi / BKD",
    dataIndex: "namabkd",
    key: "namabkd"
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
  middleware: "auth",
  head() {
    return {
      title: "Detail Kegiatan - BKPSDMD"
    };
  },
  data() {
    return {
      detail: {},
      columns,
      data: [],
    };
  },

  created() {
    let idpengajuan = this.$route.params.id;
    axios.get(`pengajuan/approve/${idpengajuan}`).then(result => {
      this.detail = result.data.values[0];
      console.log(this.detail)

      let tglstart1 = moment(this.detail.tglstartoncamp1).format("DD MMM YYYY");
      this.$set(this.detail, "tglstartoncamp1", tglstart1);
      let tglend1 = moment(this.detail.tglendoncamp1).format("DD MMM YYYY");
      this.$set(this.detail, "tglendoncamp1", tglend1);

      let tglstart2 = moment(this.detail.tglstartoncamp2).format("DD MMM YYYY");
      this.$set(this.detail, "tglstartoncamp2", tglstart2);
      let tglend2 = moment(this.detail.tglendoncamp2).format("DD MMM YYYY");
      this.$set(this.detail, "tglendoncamp2", tglend2);

      
      if(this.detail.tglstartoncamp3 != null){
         let tglstart3 = moment(this.detail.tglstartoncamp3).format("DD MMM YYYY");
         console.log(tglstart3)
         this.$set(this.detail, "tglstartoncamp3", tglstart3);
      }
      else {
         let tglstart3 = '-'
         this.$set(this.detail, "tglstartoncamp3", tglstart3);
         
      }

      if(this.detail.tglendoncamp3 != null){
         let tglend3 = moment(this.detail.tglendoncamp3).format("DD MMM YYYY");
         this.$set(this.detail, "tglendoncamp3", tglend3);
      }
      else {
        let tglend3 = '-'
         this.$set(this.detail, "tglendoncamp3", tglend3);
         
      }
      

  
      
    });

    //this.baseaccount = this.$route.params.baseaccount;
  },
  mounted() {
    let idpengajuan = this.$route.params.id;
    axios.get(`peserta/${idpengajuan}`).then(result => {
         this.data = result.data.values
      });
    
  },
};
</script>