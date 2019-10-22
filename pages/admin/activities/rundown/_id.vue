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

      <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
        <span slot="deskripsi" slot-scope="text, record"><span class="text-capitalize">{{ record.deskripsi }}</span></span>
        <span slot="jam" slot-scope="text, record"><span>{{moment(record.jam, "HH:mm").format('HH:mm')}}</span></span>
      </a-table>

    </div>

    <div class="container">
      <div style="padding: 24px;text-align:center">
        <a-button type="primary" size="large" icon="plus" @click="showModal">Buat Rundown Kegiatan</a-button>
      </div>

      <!-- if add rundown -->
      <a-modal title="Rundown Kegiatan" :footer="false" v-model="visible" @ok="handleOk">
        <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
        
        <a-form-item label="Tgl Kegiatan / Jam" has-feedback>
              <a-date-picker @change="onChangeTgl" 
               v-decorator="['tglAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]" 
               />
               <a-divider type="vertical" />
                <a-time-picker format="HH:mm" @change="onChange"
                v-decorator="['jamAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"  />

        </a-form-item>
        <a-form-item label="Widyaiswara / Narasumber" has-feedback>
          <a-select
            v-decorator="['widyaiswara',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Widiasuara/Narasumber"
            showSearch
          >
            <a-select-option
              v-for="(item) in mentor"
              :value="item.id"
              v-bind:key="item.id+15"
            >{{ item.nama }}</a-select-option>
          </a-select>
          <!-- <a-select>
            <a-select-option :value="1">Widya Pitaloka</a-select-option>
            <a-select-option :value="2">Nur Elsa</a-select-option>
          </a-select>-->

        </a-form-item>
        <a-form-item label="Hari Ke" has-feedback>
          <a-input
            v-decorator="['dayAdd',{initialValue: '3', rules: [{ required: true, message: 'Harus di isi!' }]}]"
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
    title: "Tgl Kegiatan",
    dataIndex: "hari",
    key: "hari"
  },
  { title: "Hari Ke", dataIndex: "day", key: "day" },
  { title: "Jam", dataIndex: "jam", key: "jam", scopedSlots: { customRender: "jam" } },
  { title: "Fasilitator / Widyaiswara", dataIndex: "nama", key: "nama" },
  { title: "Materi / Acara", dataIndex: "deskripsi", key: "deskripsi", scopedSlots: { customRender: "deskripsi" } },
  
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
      title: "Rundown Kegiatan - BPSDM"
    };
  },
  
  data() {
    return {
      moment,
      columns,
      detail: {},
      data: [],
      mentor: {},
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
    axios.get(`rundown/${idpengajuan}`).then(result => {
         this.data = result.data.values
         for (let index = 0; index < this.data.length; index++) {

             let tglevent = moment(this.data[index]['hari']).format('dddd, DD MMMM YYYY')
             this.$set(this.data[index], 'hari', tglevent)

           }
         console.log(this.data)
      });
    
  },

  methods: {
    moment,
    onChange(time, timeString) {
        console.log(time, timeString);
      },
    onChangeTgl(date, dateString) {
        console.log(date, dateString);
      },

    showModal() {

      let idpengajuan = this.$route.params.id;
      this.$store
          .dispatch("widyaiswara/widyaiswarafetch")
          .then(({ data }) => {
            this.mentor = data.values;
            this.$store.commit("widyaiswara/set", data.values);
          });

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

          let idpengajuan = this.$route.params.id;
          let timeJam = moment(values.jamAdd).format("HH:mm:ss")
          axios.post('rundown', {
                    idpengajuan: idpengajuan,
                    day: values.dayAdd,
                    deskripsi: values.eventAdd,
                    hari: values.tglAdd,
                    idwidyaiswara: values.widyaiswara,
                    jam: timeJam

                })
                .then(result => {
                    
                    let idpengajuan = this.$route.params.id;

                    axios.get(`rundown/${idpengajuan}`).then(result => {
                    this.data = result.data.values;
                    for (let index = 0; index < this.data.length; index++) {

                      let tglevent = moment(this.data[index]['hari']).format('dddd, DD MMMM YYYY')
                      this.$set(this.data[index], 'hari', tglevent)
                    }
                    this.visible = false;
                    
                    
                  });

                })
                .catch(function (error) {
                    console.log(error)
                });
           

        }
      });
    }
  }
};
</script>