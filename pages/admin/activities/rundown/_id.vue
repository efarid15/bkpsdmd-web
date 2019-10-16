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

    <div class="container" style="margin-bottom: 16px">
      <div class="title p24">Rundown Kegiatan</div>

      <div style="padding: 0 24px 24px 24px;">
        <a-timeline>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 1</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Senin, 12 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 2</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Selasa, 13 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 3</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Rabu, 14 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 4</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Kamis, 15 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 5</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Jumat, 16 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 6</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Sabtu, 17 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>

    <div class="container">
      <div style="padding: 24px;text-align:center">
        <a-button type="primary" size="large" icon="plus" @click="showModal">Buat Rundown Kegiatan</a-button>
      </div>

      <!-- if add rundown -->
      <a-modal title="Rundown Kegiatan" :footer="false" v-model="visible" @ok="handleOk">
        <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
        
        <a-form-item label="Tgl Kegiatan" has-feedback>
              <a-date-picker @change="onChangeTgl" 
               v-decorator="['tglAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]" 
               />
        </a-form-item>
        <a-form-item label="Hari Ke" has-feedback>
          <a-input
            v-decorator="['dayAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Kegiatan" has-feedback>
          <a-textarea
            v-decorator="['eventAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]" :autosize="{ minRows: 3, maxRows: 6 }"
          />
        </a-form-item>
        <a-button type="primary" html-type="submit">Simpan</a-button>

        </a-form>
      </a-modal>
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

export default {
  name: "rundown",
  middleware: "auth",
  beforeCreate() {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator("keys", { initialValue: [], preserve: true });
  },
  head() {
    return {
      title: "Rundown Kegiatan - BKPSDMD"
    };
  },
  data() {
    return {
      detail: {},
      columns,
      data: [],
      visible: false,
      config: {
        rules: [{ type: "object", required: true, message: "Harus di isi!" }]
      }
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
    
  },

  methods: {
    moment,
    onChangeTgl(date, dateString) {
        console.log(date, dateString);
      },

    showModal() {
      this.visible = true;
    },

    handleOk(e) {
      console.log(e);
      this.visible = false;
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
        }
      });
    }
  }
};
</script>