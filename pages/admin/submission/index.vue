<template>
  <div class="container">
    <div class="title">Daftar Pengajuan</div>

    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
      <span slot="action" slot-scope="text, record">
        <a @click="showApprove(record.id)" class="color-blue">Approve</a>
        <a-divider type="vertical" />
        <a @click="showReject" class="color-red">Tolak</a>
      </span>
    </a-table>

    <!-- if approve show modal -->
    <a-modal
      title="Konfirmasi Persetujuan Pengajuan"
      :footer="false"
      v-model="visibleApprove"
      @ok="handleApprove"
    >
      <a-form layout="vertical" :form="form" @submit="handleSubmitApprove" hideRequiredMark>
        <a-form-item label="Tempat Kegiatan">
          <a-select
            v-decorator="['tempat',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Tempat Kegiatan" setFieldsValue="selectKampus" @change="handleChangeKampus"
          >
            <a-select-option v-for="(item) in venue" :value="item.id" v-bind:key="item.id">{{ item.namakampus }}</a-select-option>
            <!-- <a-select-option :value="1">Campus I</a-select-option>
            <a-select-option :value="2">Campus II</a-select-option> -->
          </a-select>
        </a-form-item>

        <a-form-item label="Ruangan Kegiatan">
          <a-select
            v-decorator="['room',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Ruangan Kegiatan"
            showSearch
          >
          <a-select-option  v-for="(ruang) in room" :value="ruang.id" v-bind:key="ruang.id+10">{{ ruang.namaruangan }}</a-select-option>
            <!-- <a-select-option :value="1">IB Lantai 2</a-select-option>
            <a-select-option :value="2">3A Lantai 1</a-select-option>-->
          </a-select>
        </a-form-item>
        
        <a-form-item label="Tanggal Kegiatan" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
            :disabledDate="disabledDate"
            v-decorator="['tglkeg', config]"
          />
        </a-form-item>

        <a-form-item label="Widiasuara/Pengajar">
          <a-select
            v-decorator="['pengajar',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Widiasuara/Pengajar"
            showSearch
          >
          <a-select-option  v-for="(item) in mentor" :value="item.id" v-bind:key="item.id+5">{{ item.nama }}</a-select-option>
            <!-- <a-select-option :value="1">Widya Pitaloka</a-select-option>
            <a-select-option :value="2">Nur Elsa</a-select-option> -->
          </a-select>
        </a-form-item>

        <a-form-item label="Dokumen Persetujuan">
          <a-upload-dragger name="file" :multiple="true" action="#" @change="handleChange" v-decorator="['file',{rules: [{ required: true, message: 'Harus di isi!' }]}]">
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text fs-14 cr-gray">Click or drag file to this area to upload</p>
          </a-upload-dragger>
        </a-form-item>

        <a-button type="primary" html-type="submit">Kirim</a-button>
      </a-form>
    </a-modal>

    <!-- if reject show modal -->
    <a-modal
      title="Konfirmasi Penolakan Pengajuan"
      :footer="false"
      v-model="visibleReject"
      @ok="handleReject"
    >
      <a-form layout="vertical" :form="form" @submit="handleSubmitReject" hideRequiredMark>
        <a-form-item label="Dokumen Penolakan">
          <a-upload-dragger name="file" :multiple="true" action="#" @change="handleChange" v-decorator="['fileReject',{rules: [{ required: true, message: 'Harus di isi!' }]}]">
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text fs-14 cr-gray">Click or drag file to this area to upload</p>
          </a-upload-dragger>
        </a-form-item>

        <a-form-item label="Alasan Penolakan">
          <a-textarea
            :rows="4"
            v-decorator="['rejectDesc',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>

        <a-button type="primary" html-type="submit">Kirim</a-button>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import moment from "moment"
import axios from "axios"
moment.locale("id");

const columns = [
  {
    title: "Nama Kegiatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat"
  },
  { title: "BKD", dataIndex: "namabkd", key: "namabkd" },
  { title: "Peserta", dataIndex: "jmlpeserta", key: "jmlpeserta" },
  { title: "Bulan Kegiatan", dataIndex: "tglkegiatan", key: "tglkegiatan" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 150,
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
  fetch ({store, redirect}) {
    if (!store.state.auth.authUser) {
      redirect('/')
    }
  },
  name: "submission",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  head() {
    return {
      title: "Daftar Pengajuan Kegiatan - BKPSDMD"
    };
  },
  data() {
    return {
      visibleReject: false,
      visibleApprove: false,
      selectKampus: '',
      venue: {},
      room: {},
      mentor: {},
      data: [],
      columns,
      config: {
        rules: [{ type: "array", required: true, message: "Harus di isi!" }]
      }
    };
  },

 mounted () {
    this.$store.dispatch('pengajuan/pengajuanfetch').then( ({ data }) => {
      this.data = data.values
      for (let index = 0; index < this.data.length; index++) {

        const tglevent = moment(this.data[index]['tglkegiatan']).format('MMMM YYYY')
        const tglsubmit = moment(this.data[index]['tglpengajuan']).format('dddd, D MMMM YYYY')
        this.$set(this.data[index], 'tglkegiatan', tglevent)
        this.$set(this.data[index], 'tglpengajuan', tglsubmit)
        const statpengajuan = this.data[index]['status']
        if(statpengajuan === 'R'){ 
          this.$set(this.data[index], 'status', 'Menunggu Verifikasi')
          }

      }
      this.$store.commit('pengajuan/set', data.values)
      
    })

  },

  methods: {
    handleChangeKampus(value) {
      axios.get(`kampus/ruangan/${value}`).then(result => {
        
        this.room = result.data.values
        
      })
      // console.log(idkampus)
    },

    disabledDate(current) {
      return current && current < moment().endOf("day");
    },

    showApprove(key) {

      

      axios.get(`pengajuan/${key}`).then(result => {
        
        this.$store.commit('pengajuan/setPengajuan', result.data.values)
        console.log(this.$store.state.pengajuan.pengajuan[0]["namakegiatan"])
      })
      
      this.$store.dispatch('kampus/kampusfetch').then( ({ data }) => {
      this.venue = data.values
      this.$store.commit('kampus/set', data.values)
      console.log(this.venue)
    })

    this.$store.dispatch('widyaiswara/widyaiswarafetch').then( ({ data }) => {
      this.mentor = data.values
      this.$store.commit('widyaiswara/set', data.values)
    })

    this.visibleApprove = true;

    },
    handleApprove() {
      this.visibleApprove = false;
    },
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    handleSubmitApprove(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {

          

         // simpan detail pengajuan

         this.$store.dispatch('detailpengajuan/detailpengajuanadd', {
              idJenisdiklat: this.$store.state.pengajuan.pengajuan[0]["namakegiatan"],
              tglMulai: values.tglkeg[0],
              tglAkhir: values.tglkeg[1],
              idKampus: values.tempat,
              idRuangan: values.room,
              idPengajuan: this.$store.state.pengajuan.pengajuan[0]["id"],
              idMentor: values.pengajar,

            }).then(result => {
              this.alert = {type: 'success', message: result.data.message}


              //end berhasil simpan data

              let idPengajuan = this.$store.state.pengajuan.pengajuan[0]['id']
          
          this.$store.dispatch('pengajuan/setapprove', {
            statusPengajuan: 'A',
            pengajuanId: idPengajuan,

          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            
            this.$store.dispatch('pengajuan/pengajuanfetch').then( ({ data }) => {
            this.data = data.values
            for (let index = 0; index < this.data.length; index++) {

              const tglevent = moment(this.data[index]['tglkegiatan']).format('dddd, D MMMM YYYY')
              const tglsubmit = moment(this.data[index]['tglpengajuan']).format('dddd, D MMMM YYYY')
              this.$set(this.data[index], 'tglkegiatan', tglevent)
              this.$set(this.data[index], 'tglpengajuan', tglsubmit)
              const statpengajuan = this.data[index]['status']
              if(statpengajuan === 'R'){ 
                this.$set(this.data[index], 'status', 'Menunggu Verifikasi')
               }

               }
            this.$store.commit('pengajuan/set', data.values)
      
          })
            this.visibleApprove = false

          }).catch(error => {
            this.loading = false
            if (error.response && error.response.data) {
              //this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
            }
        })


            }).catch(error => {
              this.loading = false
              if (error.response && error.response.data) {
                //this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
              }
            })



         //End Detail


          
         // end approve
          
        }
      });
    },

    showReject() {
      this.visibleReject = true;
    },
    handleReject() {
      this.visibleReject = false;
    },
    handleSubmitReject(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.visibleReject = false;
        }
      });
    }
  }
};
</script>