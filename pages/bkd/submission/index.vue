<template>
  <div class="container">
    <a-row :gutter="16" type="flex" justify="space-around" align="middle" class="p24">
      <a-col :xs="12" :sm="12" :md="12">
        <div class="title">Daftar pengajuan</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" class="text-right">
        <a-button
          @click="showSubmission"
          type="primary"
          icon="plus"
        >Buat Pengajuan</a-button>
      </a-col>
    </a-row>

    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
      <span slot="status" slot-scope="text, record">
        <span class="color-red">{{record.status}}</span>
      </span>
    </a-table>

    <!-- if add submission show modal -->
    <a-modal
      title="Buat Pengajuan"
      :footer="false"
      v-model="visibleSubmission"
      @ok="handleSubmission"
      centered
    >
      <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
        <a-form-item label="Jenis Kegiatan" has-feedback>
          <a-select
            v-decorator="['kegiatan',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Jenis Kegiatan"
            setFieldsValue="selectKegiatan"
            @change="handleChangeOption"
          >
            <a-select-option
              v-for="(item) in events"
              :value="item.id"
              v-bind:key="item.id"
            >{{ item.jenisdiklat }}</a-select-option>
            <!-- <a-select-option value="1">Kegiatan 1</a-select-option>
            <a-select-option value="2">Kegiatan 2</a-select-option>-->
          </a-select>
        </a-form-item>

        <a-form-item label="Angkatan" has-feedback>
          <a-input
            v-decorator="['angkatan',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>

        <a-form-item label="Bulan Kegiatan" has-feedback>
          <a-month-picker style="width: 100%" placeholder="Pilih Bulan" v-decorator="['tgladd', config]" />
        </a-form-item>

        <!-- <a-form-item label="Tanggal Kegiatan" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
            :disabledDate="disabledDate"
            v-decorator="['tgladd', config]"
          />
        </a-form-item> -->

        <a-form-item label="Jumlah Peserta" has-feedback>
          <a-input
            v-decorator="['jumlahpeserta',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>

        <a-form-item label="Tempat Kegiatan" has-feedback>
          <a-select
            v-decorator="['tempat',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Tempat Kegiatan"
          >
            <a-select-option value="P">Kantor Pusat</a-select-option>
            <a-select-option value="K">Kabupaten</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="Dokumen Pengajuan">
          <a-upload-dragger
            name="dokumen"
            :multiple="true"
            action="/api/upload/bkd"
            @change="handleChange"
            v-decorator="['dokumen',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          >
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text fs-14 cr-gray">Click atau drag dokumen pengajuan disini</p>
          </a-upload-dragger>
        </a-form-item>
        <a-button type="primary" html-type="submit">Kirim Pengajuan</a-button>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import moment from "moment";
import jsonp from "fetch-jsonp";
import querystring from "querystring";
import axios from "axios";

moment.locale("id");

const columns = [
  {
    title: "Jenis Kegiatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat"
  },
  { title: "Angkatan", dataIndex: "namaangkatan", key: "namaangkatan" },
  { title: "Peserta", dataIndex: "jmlpeserta", key: "jmlpeserta" },
  { title: "Tanggal Kegiatan", dataIndex: "tglkegiatan", key: "tglkegiatan" },
  {
    title: "Tanggal Pengajuan",
    dataIndex: "tglpengajuan",
    key: "tglpengajuan"
  },
  {
    title: "Status Pengajuan",
    key: "status",
    fixed: "right",
    width: 180,
    scopedSlots: { customRender: "status" }
  }
];

const data = [
  {
    key: "1",
    name: "Diklat Prajabatan Golongan I Angkatan X dan XI Tahun 2019",
    tgl_kegiatan: "Senin, 10 November 2019",
    tgl_pengajuan: "Senin, 1 November 2019",
    member: "40",
    status: "Menunggu Verifikasi"
  },
  {
    key: "2",
    name: "Diklat Prajabatan Golongan II Angkatan X dan XI Tahun 2019",
    tgl_kegiatan: "Minggu, 17 November 2019",
    tgl_pengajuan: "Senin, 2 November 2019",
    member: "45",
    status: "Menunggu Verifikasi"
  }
];

export default {
  name: "submission",
  layout: "bkd",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  head() {
    return {
      title: "Daftar Pengajuan Kegiatan - BKD"
    };
  },
  data() {
    return {
      visibleSubmission: false,
      selectKegiatan: "",
      events: {},
      selectTempat: "",
      tempats: {},
      data: [],
      columns,
      config: {
        rules: [{ required: true, message: "Harus di isi!" }]
      }
    };
  },

  mounted() {
    let idbkd = this.$store.state.localStorage.authUser['bkdid']
    
    axios.get(`pengajuan/bkd/${idbkd}`).then(result => {
        this.data = result.data.values;
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
      }
        //console.log(this.data)
        this.$store.commit("pengajuan/set", data.values);
      });
  },

  methods: {
    moment,
    /*handleSearch (value) {
      fetch(value, data => this.data = data);
    },*/
    handleChangeOption(value) {
      var idkegiatan = `${value}`;
      console.log(idkegiatan);
    },
    showSubmission() {
      this.$store.dispatch("diklat/diklatfetch").then(({ data }) => {
        this.events = data.values;
        this.$store.commit("diklat/set", data.values);

        this.visibleSubmission = true;
        console.log(this.events);
      });

      this.$store.dispatch("tempat/tempatfetch").then(({ data }) => {
        this.tempats = data.values;
        this.$store.commit("tempat/set", data.values);
        console.log(this.tempats);
      });
    },
    handleSubmission() {
      this.visibleSubmission = false;
    },
    // disabledDate(current) {
    //   return current && current < moment().endOf("day");
    // },
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
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let bkdid = this.$store.state.localStorage.authUser["bkdid"]
          const tglku = moment(values.tgladd.format("YYYY-MM-DD"));
          this.$store
            .dispatch("pengajuan/pengajuanadd", {
              idBkd: bkdid,
              namaKegiatan: values.kegiatan,
              jmlPeserta: values.jumlahpeserta,
              tglKegiatan: tglku,
              tempatpengajuan: values.tempat,
              filepengajuan: values.dokumen.file.name,
              angkatan: values.angkatan
            })
            .then(result => {
              this.alert = { type: "success", message: result.data.message };
              
              axios.get(`skpd/bkd/${bkdid}`).then(result => {
              this.data = result.data.values;
              for (let index = 0; index < this.data.length; index++) {
                    const tglevent = moment(
                      this.data[index]["tglkegiatan"]
                    ).format("dddd, D MMMM YYYY");
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
                  }
              
               this.$store.commit("pengajuan/set", data.values);
                  this.visibleAdd = false;
             });


            })
            .catch(error => {
              this.loading = false;
              if (error.response && error.response.data) {
                //this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
              }
            });

          this.visibleSubmission = false;
        }
      });
    }
  }
};
</script>