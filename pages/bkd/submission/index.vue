<template>
  <div class="container">
    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
      <a-col :xs="24" :sm="12" :md="12">
        <div class="title">Daftar Pengajuan</div>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" class="text-right">
        <a-button
          @click="showSubmission"
          type="primary"
          icon="plus"
          :style="{ marginRight: '16px' }"
        >Buat Pengajuan</a-button>
      </a-col>
    </a-row>
    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }">
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
          >
            <a-select-option value="1">Kegiatan 1</a-select-option>
            <a-select-option value="2">Kegiatan 2</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="Tanggal Kegiatan" has-feedback>
          <a-range-picker
            style="width: 100%"
            :placeholder="['Tanggal Mulai', 'Tanggal Berakhir']"
            :disabledDate="disabledDate"
            v-decorator="['date-picker', config]"
          />
        </a-form-item>

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
            <a-select-option value="1">Kantor Pusat</a-select-option>
            <a-select-option value="2">Kabupaten</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="Dokumen Pengajuan">
          <a-upload-dragger name="file" :multiple="true" action="#" @change="handleChange" v-decorator="['file',{rules: [{ required: true, message: 'Harus di isi!' }]}]">
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text fs-14 cr-gray">Click or drag file to this area to upload</p>
          </a-upload-dragger>
        </a-form-item>
        <a-button type="primary" html-type="submit">Kirim Pengajuan</a-button>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import moment from "moment";
const columns = [
  {
    title: "Jenis Kegiatan",
    dataIndex: "name",
    key: "name"
  },
  { title: "Peserta", dataIndex: "member", key: "member" },
  { title: "Tanggal Kegiatan", dataIndex: "tgl_kegiatan", key: "tgl_kegiatan" },
  {
    title: "Tanggal Pengajuan",
    dataIndex: "tgl_pengajuan",
    key: "tgl_pengajuan"
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
      data,
      columns,
      config: {
        rules: [{ type: "array", required: true, message: "Harus di isi!" }]
      }
    };
  },
  methods: {
    moment,
    showSubmission() {
      this.visibleSubmission = true;
    },
    handleSubmission() {
      this.visibleSubmission = false;
    },
    disabledDate(current) {
      return current && current < moment().endOf("day");
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
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.visibleSubmission = false;
        }
      });
    }
  }
};
</script>