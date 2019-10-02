<template>
  <div>
    <div class="container">
      <div class="title">Daftar Kegiatan Saya</div>

      <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }">
        <span slot="progress" slot-scope="text, record">
          <span v-if="record.progress === 'Progress'">
            <a-badge status="processing" :text="record.progress" />
          </span>
          <span v-if="record.progress === 'Finish'">
            <a-badge status="success" :text="record.progress" />
          </span>
        </span>

        <span slot="action" slot-scope="text, record">
          <nuxt-link to="/pengajar/activities/rundown">Rundown</nuxt-link>
          <a-divider type="vertical"></a-divider>
          <nuxt-link to="/pengajar/activities/detail">Detail</nuxt-link>
        </span>
      </a-table>
    </div>
  </div>
</template>
<script>
import moment from "moment"
moment.locale("id");

const columns = [
  {
    title: "Jenis Kegiatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat"
  },
  { title: "Peserta", dataIndex: "jmlpeserta", key: "jmlpeserta" },
  { title: "Tanggal Mulai", dataIndex: "tglkegiatan", key: "tglkegiatan" },
  {
    title: "Status Kegiatan",
    width: 160,
    dataIndex: "progress",
    key: "progress",
    scopedSlots: { customRender: "progress" }
  },
  {
    title: "Action",
    fixed: "right",
    width: 170,
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "Diklat Prajabatan Golongan I Angkatan X dan XI Tahun 2019",
    startDate: "Senin, 10 November 2019",
    member: "40",
    status: "Progress"
  },
  {
    key: "2",
    name: "Diklat Prajabatan Golongan II Angkatan X dan XI Tahun 2019",
    startDate: "Minggu, 17 November 2019",
    member: "45",
    status: "Finish"
  }
];

export default {
  name: "activities",
  layout: "pengajar",
  head() {
    return {
      title: "Daftar Kegiatan - BKD"
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

        let tglevent = moment(this.data[index]['tglkegiatan']).format('dddd, D MMMM YYYY')
        let eventstatus = this.data[index]['progress']

        switch(eventstatus){
            case 'P':
            this.$set(this.data[index], 'progress', 'Progress')
            break;
            case 'F':
            this.$set(this.data[index], 'progress', 'Finish')
            break;
            
        }

        this.$set(this.data[index], 'tglkegiatan', tglevent)

      }
      this.$store.commit('pengajuan/set', data.values)
      
    })

  },
};
</script>