<template>
  <div class="container">
    <div class="title">Daftar Pengajuan</div>

    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
      <span slot="tempat" slot-scope="text, record" :key="record">
        {{record.tempat}}
      </span>
      <span slot="action" slot-scope="text, record">
        <a @click="showApprove(record.id)" class="color-blue">Approve</a>
        <a-divider type="vertical" />
        <a @click="showReject" class="color-red">Tolak</a>
      </span>
    </a-table>

    <!-- if approve latpim show modal -->
    <a-modal
      title="Konfirmasi Persetujuan Latpim"
      :footer="false"
      v-model="visibleApprovelatpim"
      @ok="handleApprovelatpim"
    >
      <a-form layout="vertical" :form="form" @submit="handleSubmitLatpim" hideRequiredMark>
        <a-form-item label="Tempat Kegiatan">
          <a-select
            v-decorator="['camplatpim',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Tempat Kegiatan"
            setFieldsValue="selectKampus"
            @change="handleChangeKampus"
          >
            <a-select-option
              v-for="(item) in venue"
              :value="item.id"
              v-bind:key="item.id"
            >{{ item.namakampus }}</a-select-option>
            <!-- <a-select-option :value="1">Campus I</a-select-option>
            <a-select-option :value="2">Campus II</a-select-option>-->
          </a-select>
        </a-form-item>

        <a-form-item label="Ruangan Kegiatan">
          <a-select
            v-decorator="['roomlatpim',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Ruangan Kegiatan"
            showSearch
          >
            <a-select-option
              v-for="(ruang) in room"
              :value="ruang.id"
              v-bind:key="ruang.id+10"
            >{{ ruang.namaruangan }}</a-select-option>
            <!-- <a-select-option :value="1">IB Lantai 2</a-select-option>
            <a-select-option :value="2">3A Lantai 1</a-select-option>-->
          </a-select>
        </a-form-item>

        <a-form-item label="Tanggal On Campus I" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
            :disabledDate="disabledDate"
            v-decorator="['tgllatpim1', config]"
          />
        </a-form-item>
        <a-form-item label="Tanggal On Campus II" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
            :disabledDate="disabledDate"
            v-decorator="['tgllatpim2', config]"
          />
        </a-form-item>
        <a-form-item label="Tanggal On Campus III" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
            :disabledDate="disabledDate"
            v-decorator="['tgllatpim3', config]"
          />
        </a-form-item>

        <a-form-item label="Widiasuara/Pengajar">
          <a-select
            v-decorator="['pengajarlatpim',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Widiasuara/Pengajar"
            showSearch
          >
            <a-select-option
              v-for="(item) in mentor"
              :value="item.id"
              v-bind:key="item.id+5"
            >{{ item.nama }}</a-select-option>
            <!-- <a-select-option :value="1">Widya Pitaloka</a-select-option>
            <a-select-option :value="2">Nur Elsa</a-select-option>-->
          </a-select>
        </a-form-item>

        <a-form-item label="Dokumen Persetujuan">
          <a-upload-dragger
            name="file"
            :multiple="true"
            action="#"
            @change="handleChange"
            v-decorator="['filelatpim',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text fs-14 cr-gray">Click or drag file to this area to upload</p>
          </a-upload-dragger>
        </a-form-item>

        <a-button type="primary" html-type="submit">Kirim</a-button>
      </a-form>
    </a-modal>

    <!-- if approve latsar show modal -->
    <a-modal
      title="Konfirmasi Persetujuan Latsar"
      :footer="false"
      v-model="visibleApprovelatsar"
      @ok="handleApprovelatsar"
    >
      <a-form layout="vertical" :form="form" @submit="handleSubmitLatsar" hideRequiredMark>
        <a-form-item label="Tempat Kegiatan">
          <a-select
            v-decorator="['camplatsar',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Tempat Kegiatan"
            setFieldsValue="selectKampus"
            @change="handleChangeKampus"
          >
            <a-select-option
              v-for="(item) in venue"
              :value="item.id"
              v-bind:key="item.id"
            >{{ item.namakampus }}</a-select-option>
            <!-- <a-select-option :value="1">Campus I</a-select-option>
            <a-select-option :value="2">Campus II</a-select-option>-->
          </a-select>
        </a-form-item>

        <a-form-item label="Ruangan Kegiatan">
          <a-select
            v-decorator="['roomlatsar',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Ruangan Kegiatan"
            showSearch
          >
            <a-select-option
              v-for="(ruang) in room"
              :value="ruang.id"
              v-bind:key="ruang.id+10"
            >{{ ruang.namaruangan }}</a-select-option>
            <!-- <a-select-option :value="1">IB Lantai 2</a-select-option>
            <a-select-option :value="2">3A Lantai 1</a-select-option>-->
          </a-select>
        </a-form-item>

        <a-form-item label="Tanggal On Campus I" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
            :disabledDate="disabledDate"
            v-decorator="['tgllatsar1', config]"
          />
        </a-form-item>
        <a-form-item label="Tanggal On Campus II" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
            :disabledDate="disabledDate"
            v-decorator="['tgllatsar2', config]"
          />
        </a-form-item>

        <a-form-item label="Widiasuara/Pengajar">
          <a-select
            v-decorator="['pengajarlatsar',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Widiasuara/Pengajar"
            showSearch
          >
            <a-select-option
              v-for="(item) in mentor"
              :value="item.id"
              v-bind:key="item.id+5"
            >{{ item.nama }}</a-select-option>
            <!-- <a-select-option :value="1">Widya Pitaloka</a-select-option>
            <a-select-option :value="2">Nur Elsa</a-select-option>-->
          </a-select>
        </a-form-item>

        <a-form-item label="Dokumen Persetujuan">
          <a-upload-dragger
            name="file"
            :multiple="true"
            action="#"
            @change="handleChange"
            v-decorator="['filelatsar',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
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
          <a-upload-dragger
            name="file"
            :multiple="true"
            action="#"
            @change="handleChange"
            v-decorator="['fileReject',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
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
import moment from "moment";
import axios from "axios";
moment.locale("id");

const columns = [
  {
    title: "Nama Kegiatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat"
  },
  { title: "BKD", dataIndex: "namabkd", key: "namabkd" },
  { title: "Peserta", dataIndex: "jmlpeserta", key: "jmlpeserta" },
  { title: "Tempat Kegiatan", dataIndex: "tempat", key: "tempat" },
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
  }
];

export default {
  fetch({ store, redirect }) {
    if (!store.state.auth.authUser) {
      redirect("/");
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
      visibleApprovelatsar: false,
      visibleApprovelatpim: false,
      selectKampus: "",
      venue: {},
      room: {},
      mentor: {},
      pengajuan: {},
      data: [],
      columns,
      config: {
        rules: [{ type: "array", required: true, message: "Harus di isi!" }]
      }
    };
  },

  mounted() {
    this.$store.dispatch("pengajuan/pengajuanfetch").then(({ data }) => {
      this.data = data.values;
      for (let index = 0; index < this.data.length; index++) {
        const tglevent = moment(this.data[index]["tglkegiatan"]).format(
          "MMMM YYYY"
        );
        const tglsubmit = moment(this.data[index]["tglpengajuan"]).format(
          "dddd, D MMMM YYYY"
        );
        this.$set(this.data[index], "tglkegiatan", tglevent);
        this.$set(this.data[index], "tglpengajuan", tglsubmit);
        const statpengajuan = this.data[index]["status"];
        if (statpengajuan === "R") {
          this.$set(this.data[index], "status", "Menunggu Verifikasi");
        }
        const ptempat = this.data[index]["tempat"];
        if (ptempat === "P") {
          this.$set(this.data[index], "tempat", "Pusat");
        }
        else if(ptempat === "K"){
          this.$set(this.data[index], "tempat", "Kabupaten");
        }
      }
      this.$store.commit("pengajuan/set", data.values);
    });
  },

  methods: {
    handleChangeKampus(value) {
      axios.get(`kampus/ruangan/${value}`).then(result => {
        this.room = result.data.values;
      });
      // console.log(idkampus)
    },

    disabledDate(current) {
      return current && current < moment().endOf("day");
    },

    showApprove(key) {

      axios.get(`pengajuan/${key}`).then(result => {
        
            this.pengajuan = result.data.values
            console.log(this.pengajuan)
            
            this.$store.commit("pengajuan/setPengajuan", result.data.values);
       

            this.$store.dispatch("kampus/kampusfetch").then(({ data }) => {
            this.venue = data.values;
            this.$store.commit("kampus/set", data.values);
        
             });

            this.$store.dispatch("widyaiswara/widyaiswarafetch").then(({ data }) => {
            this.mentor = data.values;
            this.$store.commit("widyaiswara/set", data.values);
            });

          let iddiklat = this.pengajuan[0]['namakegiatan']
          let idkategori = this.pengajuan[0]['idkategori']
          
          if(idkategori === "0"){
           this.visibleApprovelatpim = true
           this.visibleApprovelatsar = false
           console.log("latpim")
          }
          else if(idkategori === "1") {
           this.visibleApprovelatpim = false
           this.visibleApprovelatsar = true
           console.log("latsar")
          }

           

      });
    
      
      //this.visibleApprove = true;
    },
    handleApprovelatsar() {
      this.visibleApprovelatsar = false;
    },
    handleApprovelatpim() {
      this.visibleApprovelatpim = false;
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

    handleSubmitLatsar(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {


          console.log(values.filelatsar.file.name)
           
          let idkategori = "0"
          let idpengajuan = this.$store.state.pengajuan.pengajuan[0]['id']
          let iddiklat = this.$store.state.pengajuan.pengajuan[0]['iddiklat']
          let statuspengajuan = "A"

          //start simpan detail
            this.$store.dispatch('detailpengajuan/detailpengajuanadd', {
              idJenisdiklat: iddiklat,
              idKampus: values.camplatsar,
              idRuangan: values.roomlatsar,
              idPengajuan: idpengajuan,
              idMentor: values.pengajarlatsar,
              tglStartoncamp1: values.tgllatsar1[0],
              tglEndoncamp1: values.tgllatsar1[1], 
              tglStartoncamp2: values.tgllatsar2[0],
              tglEndoncamp2: values.tgllatsar2[1], 
              tglStartoncamp3: null,
              tglEndoncamp3: null,
              tglMulai: values.tgllatsar1[0],
              tglAkhir: values.tgllatsar2[1],
              file: values.filelatsar.file.name
    
            
              }).then(result => {
                this.alert = {type: 'success', message: result.data.message}

                //start approve

                this.$store.dispatch('pengajuan/setapprove', {
                  pengajuanId: idpengajuan,
                  statusPengajuan: statuspengajuan,
            
                }).then(result => {
                  this.alert = {type: 'success', message: result.data.message}

                  // start get pengajuan 
                this.data = [];
                
                this.$store.dispatch("pengajuan/pengajuanfetch").then(({ data }) => {
                // end approve
                
                this.data = data.values;

                for (let index = 0; index < this.data.length; index++) {
                  const tglevent = moment(this.data[index]["tglkegiatan"]).format(
                  "MMMM YYYY"
                );
                const tglsubmit = moment(this.data[index]["tglpengajuan"]).format(
                "dddd, D MMMM YYYY"
                );
                this.$set(this.data[index], "tglkegiatan", tglevent);
                this.$set(this.data[index], "tglpengajuan", tglsubmit);
                const statpengajuan = this.data[index]["status"];
                if (statpengajuan === "R") {
                  this.$set(this.data[index], "status", "Menunggu Verifikasi");
                }
                const ptempat = this.data[index]["tempat"];
                if (ptempat === "P") {
                    this.$set(this.data[index], "tempat", "Pusat");
                }
              else if(ptempat === "K"){
                  this.$set(this.data[index], "tempat", "Kabupaten");
              }
             }
              this.$store.commit("pengajuan/set", data.values);
              this.visibleApprovelatsar = false

             });
                
                //end get pengajuan
            
                }).catch(error => {
                  this.loading = false
                  if (error.response && error.response.data) {
              
                }
               })
          
                
                
            
              }).catch(error => {
                this.loading = false
                if (error.response && error.response.data) {
              
              }
            })

          //end simpan detail

          
                    
        }
      });
    },

    // mulai submit latpim
    handleSubmitLatpim(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let idkategori = "0"
          let idpengajuan = this.$store.state.pengajuan.pengajuan[0]['id']
          let iddiklat = this.$store.state.pengajuan.pengajuan[0]['iddiklat']
          let statuspengajuan = "A"

          //start simpan detail
            this.$store.dispatch('detailpengajuan/detailpengajuanadd', {
              idJenisdiklat: iddiklat,
              idKampus: values.camplatpim,
              idRuangan: values.roomlatpim,
              idPengajuan: idpengajuan,
              idMentor: values.pengajarlatpim,
              tglStartoncamp1: values.tgllatpim1[0],
              tglEndoncamp1: values.tgllatpim1[1], 
              tglStartoncamp2: values.tgllatpim2[0],
              tglEndoncamp2: values.tgllatpim2[1], 
              tglStartoncamp3: values.tgllatpim3[0],
              tglEndoncamp3: values.tgllatpim3[1],
              tglMulai: values.tgllatpim1[0],
              tglAkhir: values.tgllatpim3[1],
              file: values.filelatpim.file.name
            
              }).then(result => {
                this.alert = {type: 'success', message: result.data.message}

                //start approve

                this.$store.dispatch('pengajuan/setapprove', {
                pengajuanId: idpengajuan,
                statusPengajuan: statuspengajuan,
            
                }).then(result => {
                    this.alert = {type: 'success', message: result.data.message}
                    // start get pengajuan 
                    this.data = [];
                
                this.$store.dispatch("pengajuan/pengajuanfetch").then(({ data }) => {
                // end approve
                
                this.data = data.values;

                for (let index = 0; index < this.data.length; index++) {
                  const tglevent = moment(this.data[index]["tglkegiatan"]).format(
                  "MMMM YYYY"
                );
                const tglsubmit = moment(this.data[index]["tglpengajuan"]).format(
                "dddd, D MMMM YYYY"
                );
                this.$set(this.data[index], "tglkegiatan", tglevent);
                this.$set(this.data[index], "tglpengajuan", tglsubmit);
                const statpengajuan = this.data[index]["status"];
                if (statpengajuan === "R") {
                  this.$set(this.data[index], "status", "Menunggu Verifikasi");
                }
                const ptempat = this.data[index]["tempat"];
                if (ptempat === "P") {
                    this.$set(this.data[index], "tempat", "Pusat");
                }
              else if(ptempat === "K"){
                  this.$set(this.data[index], "tempat", "Kabupaten");
              }
             }
              this.$store.commit("pengajuan/set", data.values);
              this.visibleApprovelatpim = false

             });

                //end get pengajuan
   
          
            
                }).catch(error => {
                    this.loading = false
                    if (error.response && error.response.data) {
              
                  }
                })

          // end approve
                
                     
              }).catch(error => {
                this.loading = false
                if (error.response && error.response.data) {
              
              }
            })

          //end simpan detail
          
          
        }
      });
    },
    // end submit latpim

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