<template>
  <div class="container">
    <div class="title p24">Daftar Pengajuan</div>

    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
      <span slot="tempat" slot-scope="text, record" :key="record">{{record.tempat}}</span>
      <span slot="action" slot-scope="text, record">
        <nuxt-link :to="`/admin/submission/detail/${record.id}`">Dokumen</nuxt-link>
        <a-divider type="vertical" />
        <a @click="showApprove(record.id)" class="color-green">Approve</a>
        <a-divider type="vertical" />
        <a @click="showReject(record.id)" class="color-red">Tolak</a>
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
            v-decorator="['tgllatpim1', config]"
          />
        </a-form-item>
        <a-form-item label="Tanggal On Campus II" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
            v-decorator="['tgllatpim2', config]"
          />
        </a-form-item>
        <a-form-item label="Tanggal On Campus III" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
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
          <a-upload
            name="dokumen"
            listType="picture-card"
            class="avatar-uploader"
            :showUploadList="false"
            action="/api/upload"
            :beforeUpload="beforeUpload"
            @change="handleChange"
            v-decorator="['dokumen',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else style="margin: 0 auto">
              <a-icon :type="loading ? 'loading' : 'plus'" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
          <!-- <a-upload-dragger
            name="dokumen"
            action="/api/upload"
            @change="handleChange"
            :multiple="false"
            v-decorator="['dokumen',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text fs-14 cr-gray">Click or drag file to this area to upload</p>
          </a-upload-dragger>-->
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
            v-decorator="['tgllatsar1', config]"
          />
        </a-form-item>
        <a-form-item label="Tanggal On Campus II" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
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
          <a-upload
            name="dokumen"
            listType="picture-card"
            class="avatar-uploader"
            :showUploadList="false"
            action="/api/upload"
            :beforeUpload="beforeUpload"
            @change="handleChange"
            v-decorator="['dokumen',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else style="margin: 0 auto">
              <a-icon :type="loading ? 'loading' : 'plus'" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
          <!-- <a-upload-dragger
            :multiple="false"
            name="dokumen"
            action="/api/upload"
            @change="handleChange"
            :beforeUpload="beforeUpload"
            v-decorator="['dokumen',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <div style="padding: 24px">
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
              </p>
              <p class="ant-upload-text fs-14 cr-gray">Click or drag file to this area to upload</p>
            </div>
          </a-upload-dragger> -->
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
          <a-upload
            name="dokumen"
            listType="picture-card"
            class="avatar-uploader"
            :showUploadList="false"
            action="/api/upload/reject"
            :beforeUpload="beforeUpload"
            @change="handleChange"
            v-decorator="['dokumen',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else style="margin: 0 auto">
              <a-icon :type="loading ? 'loading' : 'plus'" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
          </a-form-item>

        <a-form-item label="Alasan Penolakan">
          <a-textarea
            :rows="4"
            v-decorator="['alasan',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>

        <a-button type="primary" html-type="submit">Kirim</a-button>
      </a-form>
    </a-modal>

    <!-- if reject show modal -->
    <a-modal
      title="Konfirmasi Diklat Kabupaten"
      :footer="false"
      v-model="visibleApproveKabupaten"
      @ok="handleKabupaten"
    >
      <a-form layout="vertical" :form="form" @submit="handleSubmitKabupaten" hideRequiredMark>
        <a-form-item label="Dokumen Diklat Kabupaten/Kota">
          <a-upload
            name="dokumen"
            listType="picture-card"
            class="avatar-uploader"
            :showUploadList="false"
            action="/api/upload"
            :beforeUpload="beforeUpload"
            @change="handleChange"
            v-decorator="['dokumen',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else style="margin: 0 auto">
              <a-icon :type="loading ? 'loading' : 'plus'" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        
        </a-form-item>
        <a-button type="primary" html-type="submit">Kirim</a-button>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
import moment from "moment";
import axios from "axios";
moment.locale("id");

const columns = [
  {
    title: "Nama Kegiatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat"
  },
  { title: "Angkatan", dataIndex: "namaangkatan", key: "namaangkatan" },
  { title: "BKD", dataIndex: "namabkd", key: "namabkd" },
  { title: "Peserta", dataIndex: "jmlpeserta", key: "jmlpeserta" },
  { title: "Tempat Kegiatan", dataIndex: "tempat", key: "tempat" },
  { title: "Bulan Kegiatan", dataIndex: "tglkegiatan", key: "tglkegiatan" },
  {
    title: "Action",
    key: "operation",
    width: 240,
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
  name: "submission",
  middleware: "auth",
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
      visibleApproveKabupaten: false,
      selectKampus: "",
      loading: false,
      imageUrl: "",
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
        } else if (ptempat === "K") {
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
      //return current && current < moment().endOf("day");
    },

    showApprove(key) {
      axios.get(`pengajuan/${key}`).then(result => {
        this.pengajuan = result.data.values;
        console.log(this.pengajuan);

        this.$store.commit("pengajuan/setPengajuan", result.data.values);

        this.$store.dispatch("kampus/kampusfetch").then(({ data }) => {
          this.venue = data.values;
          this.$store.commit("kampus/set", data.values);
        });

        this.$store
          .dispatch("widyaiswara/widyaiswarafetch")
          .then(({ data }) => {
            this.mentor = data.values;
            this.$store.commit("widyaiswara/set", data.values);
          });

        let iddiklat = this.pengajuan[0]["namakegiatan"];
        let idkategori = this.pengajuan[0]["idkategori"];
        let tempat = this.pengajuan[0]["tempat"];
        console.log(tempat)
        // jika kategori pusat

        if(tempat === "P"){
          this.visibleApproveKabupaten = false;
          if (idkategori === "0") {
            this.visibleApprovelatpim = true;
            this.visibleApprovelatsar = false;
            console.log("latpim");
          } else if (idkategori === "1") {
            this.visibleApprovelatpim = false;
            this.visibleApprovelatsar = true;
          console.log("latsar");
          }

        } else if(tempat === "K"){
           this.visibleApproveKabupaten = true;
           this.visibleApprovelatpim = false;
            this.visibleApprovelatsar = false;
            console.log(this.pengajuan)
        }

                

        
      });

      //this.visibleApprove = true;
    },
    handleKabupaten() {
      this.visibleApproveKabupaten = false;
    },
    handleApprovelatsar() {
      this.visibleApprovelatsar = false;
    },
    handleApprovelatpim() {
      this.visibleApprovelatpim = false;
    },
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      if (!isJPG) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJPG && isLt2M;
    },

    // handleChange(info) {
    //   const status = info.file.status;
    //   if (status !== "uploading") {
    //     console.log(info.file, info.fileList);
    //   }
    //   if (status === "done") {
    //     this.$message.success(`${info.file.name} file uploaded successfully.`);
    //   } else if (status === "error") {
    //     this.$message.error(`${info.file.name} file upload failed.`);
    //   }
    // },
    // beforeUpload(file) {
    //   const isLt2M = file.size / 1024 / 1024 < 1;
    //   if (!isLt2M) {
    //     this.$message.error("Gambar atau File maximal 1MB!");
    //   }
    //   return isLt2M;
    // },

    handleSubmitKabupaten(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let iddiklat = this.pengajuan[0]["namakegiatan"];
          let idkategori = this.pengajuan[0]["idkategori"];
          let tempat = this.pengajuan[0]["tempat"];
          let idpengajuan = this.pengajuan[0]["id"];
          let statuspengajuan = "A";
          /*let idkategori = "0";
          let idpengajuan = this.$store.state.pengajuan.pengajuan[0]["id"];
          let iddiklat = this.$store.state.pengajuan.pengajuan[0]["iddiklat"];
          let statuspengajuan = "A";*/

          //start simpan detail
          this.$store
            .dispatch("detailpengajuan/detailpengajuanadd", {
              idJenisdiklat: iddiklat,
              idKampus: null,
              idRuangan: null,
              idPengajuan: idpengajuan,
              idMentor: null,
              tglStartoncamp1: null,
              tglEndoncamp1: null,
              tglStartoncamp2: null,
              tglEndoncamp2: null,
              tglStartoncamp3: null,
              tglEndoncamp3: null,
              tglMulai: null,
              tglAkhir: null,
              dokumenpengajuan: values.dokumen.file.name
            })
            .then(result => {
              this.alert = { type: "success", message: result.data.message };

              //start approve

              this.$store
                .dispatch("pengajuan/setapprove", {
                  pengajuanId: idpengajuan,
                  statusPengajuan: statuspengajuan
                })
                .then(result => {
                  this.alert = {
                    type: "success",
                    message: result.data.message
                  };

                  // start get pengajuan
                  this.data = [];

                  this.$store
                    .dispatch("pengajuan/pengajuanfetch")
                    .then(({ data }) => {
                      // end approve

                      this.data = data.values;

                      for (let index = 0; index < this.data.length; index++) {
                        const tglevent = moment(
                          this.data[index]["tglkegiatan"]
                        ).format("MMMM YYYY");
                        const tglsubmit = moment(
                          this.data[index]["tglpengajuan"]
                        ).format("dddd, D MMMM YYYY");
                        this.$set(this.data[index], "tglkegiatan", tglevent);
                        this.$set(this.data[index], "tglpengajuan", tglsubmit);
                        const statpengajuan = this.data[index]["status"];
                        if (statpengajuan === "R") {
                          this.$set(
                            this.data[index],
                            "status",
                            "Menunggu Verifikasi"
                          );
                        }
                        const ptempat = this.data[index]["tempat"];
                        if (ptempat === "P") {
                          this.$set(this.data[index], "tempat", "Pusat");
                        } else if (ptempat === "K") {
                          this.$set(this.data[index], "tempat", "Kabupaten");
                        }
                      }
                      this.$store.commit("pengajuan/set", data.values);
                      this.visibleApproveKabupaten = false;
                    });

                  //end get pengajuan
                })
                .catch(error => {
                  this.loading = false;
                  if (error.response && error.response.data) {
                  }
                });
            })
            .catch(error => {
              this.loading = false;
              if (error.response && error.response.data) {
              }
            });

        }
      })
    },

    handleSubmitLatsar(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let idkategori = "0";
          let idpengajuan = this.$store.state.pengajuan.pengajuan[0]["id"];
          let iddiklat = this.$store.state.pengajuan.pengajuan[0]["iddiklat"];
          let statuspengajuan = "A";

          //start simpan detail
          this.$store
            .dispatch("detailpengajuan/detailpengajuanadd", {
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
              dokumenpengajuan: values.dokumen.file.name
            })
            .then(result => {
              this.alert = { type: "success", message: result.data.message };

              //start approve

              this.$store
                .dispatch("pengajuan/setapprove", {
                  pengajuanId: idpengajuan,
                  statusPengajuan: statuspengajuan
                })
                .then(result => {
                  this.alert = {
                    type: "success",
                    message: result.data.message
                  };

                  // start get pengajuan
                  this.data = [];

                  this.$store
                    .dispatch("pengajuan/pengajuanfetch")
                    .then(({ data }) => {
                      // end approve

                      this.data = data.values;

                      for (let index = 0; index < this.data.length; index++) {
                        const tglevent = moment(
                          this.data[index]["tglkegiatan"]
                        ).format("MMMM YYYY");
                        const tglsubmit = moment(
                          this.data[index]["tglpengajuan"]
                        ).format("dddd, D MMMM YYYY");
                        this.$set(this.data[index], "tglkegiatan", tglevent);
                        this.$set(this.data[index], "tglpengajuan", tglsubmit);
                        const statpengajuan = this.data[index]["status"];
                        if (statpengajuan === "R") {
                          this.$set(
                            this.data[index],
                            "status",
                            "Menunggu Verifikasi"
                          );
                        }
                        const ptempat = this.data[index]["tempat"];
                        if (ptempat === "P") {
                          this.$set(this.data[index], "tempat", "Pusat");
                        } else if (ptempat === "K") {
                          this.$set(this.data[index], "tempat", "Kabupaten");
                        }
                      }
                      this.$store.commit("pengajuan/set", data.values);
                      this.visibleApprovelatsar = false;
                    });

                  //end get pengajuan
                })
                .catch(error => {
                  this.loading = false;
                  if (error.response && error.response.data) {
                  }
                });
            })
            .catch(error => {
              this.loading = false;
              if (error.response && error.response.data) {
              }
            });

          //end simpan detail
        }
      });
    },

    // mulai submit latpim
    handleSubmitLatpim(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let idkategori = "0";
          let idpengajuan = this.$store.state.pengajuan.pengajuan[0]["id"];
          let iddiklat = this.$store.state.pengajuan.pengajuan[0]["iddiklat"];
          let statuspengajuan = "A";

          //start simpan detail
          this.$store
            .dispatch("detailpengajuan/detailpengajuanadd", {
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
              dokumenpengajuan: values.dokumen.file.name
            })
            .then(result => {
              this.alert = { type: "success", message: result.data.message };

              //start approve

              this.$store
                .dispatch("pengajuan/setapprove", {
                  pengajuanId: idpengajuan,
                  statusPengajuan: statuspengajuan
                })
                .then(result => {
                  this.alert = {
                    type: "success",
                    message: result.data.message
                  };
                  // start get pengajuan
                  this.data = [];

                  this.$store
                    .dispatch("pengajuan/pengajuanfetch")
                    .then(({ data }) => {
                      // end approve

                      this.data = data.values;

                      for (let index = 0; index < this.data.length; index++) {
                        const tglevent = moment(
                          this.data[index]["tglkegiatan"]
                        ).format("MMMM YYYY");
                        const tglsubmit = moment(
                          this.data[index]["tglpengajuan"]
                        ).format("dddd, D MMMM YYYY");
                        this.$set(this.data[index], "tglkegiatan", tglevent);
                        this.$set(this.data[index], "tglpengajuan", tglsubmit);
                        const statpengajuan = this.data[index]["status"];
                        if (statpengajuan === "R") {
                          this.$set(
                            this.data[index],
                            "status",
                            "Menunggu Verifikasi"
                          );
                        }
                        const ptempat = this.data[index]["tempat"];
                        if (ptempat === "P") {
                          this.$set(this.data[index], "tempat", "Pusat");
                        } else if (ptempat === "K") {
                          this.$set(this.data[index], "tempat", "Kabupaten");
                        }
                      }
                      this.$store.commit("pengajuan/set", data.values);
                      this.visibleApprovelatpim = false;
                    });

                  //end get pengajuan
                })
                .catch(error => {
                  this.loading = false;
                  if (error.response && error.response.data) {
                  }
                });

              // end approve
            })
            .catch(error => {
              this.loading = false;
              if (error.response && error.response.data) {
              }
            });

          //end simpan detail
        }
      });
    },
    // end submit latpim

    showReject(key) {
      axios.get(`pengajuan/${key}`).then(result => {
        this.pengajuan = result.data.values;
        console.log(this.pengajuan);

        this.$store.commit("pengajuan/setPengajuan", result.data.values);
      });
      this.visibleReject = true;
    },
    handleReject() {
      this.visibleReject = false;
    },
    handleSubmitReject(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let idpengajuan = this.$store.state.pengajuan.pengajuan[0]["id"];
          let statuspengajuan = "T";
          this.$store
            .dispatch("pengajuan/rejectadd", {
              idPengajuan: idpengajuan,
              alasan: values.alasan,
              dokumenreject: values.dokumen.file.name
            })
            .then(result => {
              this.alert = { type: "success", message: result.data.message };

              //start approve

              this.$store
                .dispatch("pengajuan/setreject", {
                  pengajuanId: idpengajuan,
                  statusPengajuan: statuspengajuan
                })
                .then(result => {
                  this.alert = {
                    type: "success",
                    message: result.data.message
                  };
                  // start get pengajuan
                  this.data = [];

                  this.$store
                    .dispatch("pengajuan/pengajuanfetch")
                    .then(({ data }) => {
                      // end approve

                      this.data = data.values;

                      for (let index = 0; index < this.data.length; index++) {
                        const tglevent = moment(
                          this.data[index]["tglkegiatan"]
                        ).format("MMMM YYYY");
                        const tglsubmit = moment(
                          this.data[index]["tglpengajuan"]
                        ).format("dddd, D MMMM YYYY");
                        this.$set(this.data[index], "tglkegiatan", tglevent);
                        this.$set(this.data[index], "tglpengajuan", tglsubmit);
                        const statpengajuan = this.data[index]["status"];
                        if (statpengajuan === "R") {
                          this.$set(
                            this.data[index],
                            "status",
                            "Menunggu Verifikasi"
                          );
                        }
                        const ptempat = this.data[index]["tempat"];
                        if (ptempat === "P") {
                          this.$set(this.data[index], "tempat", "Pusat");
                        } else if (ptempat === "K") {
                          this.$set(this.data[index], "tempat", "Kabupaten");
                        }
                      }
                      this.$store.commit("pengajuan/set", data.values);
                      this.visibleReject = false;
                    });

                  //end get pengajuan
                })
                .catch(error => {
                  this.loading = false;
                  if (error.response && error.response.data) {
                  }
                });

              // end approve
            })
            .catch(error => {
              this.loading = false;
              if (error.response && error.response.data) {
              }
            });

          //end simpan detail
        }
      });
    }
  }
};
</script>

<style>
  img {
    max-width: 100%;
  }

  .ant-upload-btn {
    align-items: center;
    display: flex;
    height: 100%;
  }
</style>