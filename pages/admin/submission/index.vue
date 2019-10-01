<template>
  <div class="container">
    <div class="title">Daftar Pengajuan</div>

    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
      <span slot="action" slot-scope="text, record">
        <a @click="showApprove" class="color-blue">Approve</a>
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
            placeholder="Pilih Tempat Kegiatan"
            showSearch
          >
            <a-select-option :value="1">Campus I</a-select-option>
            <a-select-option :value="2">Campus II</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="Ruangan Kegiatan">
          <a-select
            v-decorator="['room',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Ruangan Kegiatan"
            showSearch
          >
            <a-select-option :value="1">IB Lantai 2</a-select-option>
            <a-select-option :value="2">3A Lantai 1</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="Widiasuara/Pengajar">
          <a-select
            v-decorator="['pengajar',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Widiasuara/Pengajar"
            showSearch
          >
            <a-select-option :value="1">Widya Pitaloka</a-select-option>
            <a-select-option :value="2">Nur Elsa</a-select-option>
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
moment.locale("id");
const columns = [
  {
    title: "Nama Kegiatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat"
  },
  { title: "BKD", dataIndex: "namabkd", key: "namabkd" },
  { title: "Peserta", dataIndex: "jmlpeserta", key: "jmlpeserta" },
  { title: "Tanggal Kegiatan", dataIndex: "tglkegiatan", key: "tglkegiatan" },
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
      data: [],
      columns
    };
  },

 mounted () {
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

  },

  methods: {
    showApprove() {
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
          this.visibleApprove = false;
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