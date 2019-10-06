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
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jenis Kegiatan</div>
            <div
              class="fs-14 cr-black text-capitalize"
            >{{ this.detail.jenisdiklat }}</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jumlah Peserta</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.jmlpeserta }}</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Mulai</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.tglmulai }}</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Berakhir</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.tglberakhir }}</div>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tempat Kegiatan</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.namakampus }}</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Ruangan</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.namaruangan }}</div>
          </a-col>
          <a-col :xs="24" :sm="24" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Alamat</div>
            <div class="fs-14 cr-black text-capitalize">{{ this.detail.alamat }}</div>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="container">
      <div class="title p24">Formulir peserta kegiatan</div>

      <div style="padding: 0 24px 24px 24px">
        <a-form layout="vertical" :form="form"  @submit="handleSubmit" hideRequiredMark>
          <div v-for="(member, index) in form.getFieldValue('keys')" :key="member">
            <a-row :gutter="16" type="flex" justify="space-around" align="middle">
              <a-col :xs="24" :sm="6" :md="6">
                <a-form-item :label="index === 0 ? '' : ''" :required="false">
                  <a-select style="width: 100%" v-decorator="[`skpd[${index}]`,{rules: [{ required: true, message: 'Harus di pilih!' }]}]" showSearch placeholder="Pilih SKPD">
                    <a-select-option v-for="(item) in skpd" :value="item.id" v-bind:key="item.id+13">{{ item.namaskpd }}</a-select-option>
                    <!--<a-select-option value="skpd 1">SKPD 1</a-select-option>
                    <a-select-option value="skpd 2">SKPD 2</a-select-option>-->
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xs="14" :sm="6" :md="6">
                <a-form-item :label="index === 0 ? '' : ''" :required="false">
                  <a-input
                    v-decorator="[`nama[${index}]`,
                    {
                        validateTrigger: ['change', 'blur'],
                        rules: [{
                        required: true,
                        whitespace: true,
                        message: 'Harus di isi!',
                        }],
                    }
                    ]"
                    placeholder="Nama Peserta"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="16" :sm="4" :md="4">
                <a-form-item :label="index === 0 ? '' : ''" :required="false">
                  <a-input
                    v-decorator="[`nip[${index}]`,
                    {
                        validateTrigger: ['change', 'blur'],
                        rules: [{
                        required: true,
                        whitespace: true,
                        message: 'Harus di isi!',
                        }],
                    }
                    ]"
                    placeholder="NIP Peserta"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="4" :md="4">
                <a-form-item :label="index === 0 ? '' : ''" :required="false">
                  <a-input
                    v-decorator="[`email[${index}]`,
                    {
                        validateTrigger: ['change', 'blur'],
                        rules: [{
                        required: true,
                        whitespace: true,
                        message: 'Harus di isi!',
                        }],
                    }
                    ]"
                    placeholder="Email Peserta"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="12" :sm="2" :md="2">
                <a-form-item>
                  <div
                    v-if="form.getFieldValue('keys').length > 0"
                    :disabled="form.getFieldValue('keys').length === 0"
                    @click="() => remove(member)"
                  >
                    <a-button type="danger" block>
                      <a-icon type="minus" />
                    </a-button>
                  </div>
                </a-form-item>
              </a-col>
            </a-row>
            <a-divider></a-divider>
          </div>

          <a-row :gutter="16">
            <a-col :xs="24" :sm="6" :md="4">
              <a-button type="dashed" @click="add" block style="margin-bottom: 8px">
                <a-icon type="plus" />Tambah Peserta
              </a-button>
            </a-col>
            <a-col :xs="24" :sm="6" :md="4">
              <a-button
                v-if="form.getFieldValue('keys').length > 0"
                type="primary"
                html-type="submit"
                block
                style="margin-bottom: 8px"
              >Simpan</a-button>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </div>
    
    <div class="container">
      <div class="title p24">Informasi peserta kegiatan</div>

      <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id" />
    </div>

  </div>
</template>
<script>
import axios from "axios"
import moment from "moment"

moment.locale("id");

let id = 0;
const columns = [
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
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Instansi SKPD",
    dataIndex: "namaskpd",
    key: "namaskpd"
  }
];

export default {
  name: "formulir",
  layout: "bkd",
  beforeCreate() {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator("keys", { initialValue: [], preserve: true });
  },
  head() {
    return {
      title: "Formulir Peserta Kegiatan - BKD"
    };
  },
  data(){
    return {
      events:{},
      skpd: {},
      detail: {},
      member:[],
      peserta: [],
      data: [],
      columns
    }
  },

  created() {
     let idpengajuan = this.$route.params.id 
     axios.get(`pengajuan/approve/${idpengajuan}`).then(result => {
        
        this.detail = result.data.values[0]
        
        let tglstart = moment(this.detail.tglmulai).format('dddd, D MMMM YYYY')
        this.$set(this.detail, 'tglmulai', tglstart)
        let tglend = moment(this.detail.tglberakhir).format('dddd, D MMMM YYYY')
        this.$set(this.detail, 'tglberakhir', tglend)

        

        });
      
    //this.baseaccount = this.$route.params.baseaccount;
  },

  mounted () {
    let idpengajuan = this.$route.params.id 
    axios.get(`peserta/${idpengajuan}`).then(result => {
        this.data = result.data.values;
      });

  },

  
  methods: {
    remove(member) {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      // We need at least one passenger
      if (keys.length === 0) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== member)
      });
    },

    add() {
      
      this.$store.dispatch("skpd/skpdfetch").then(({ data }) => {
        this.skpd = data.values;
        
      });

      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      const nextKeys = keys.concat(++id);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys,
        
      });

      
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.peserta = []
          this.peserta = values
          //console.log(this.peserta)
          //let keys = this.form.getFieldValue("keys");
          //let pengajuanID = this.$route.params.id
          //let bkdID = this.$store.state.auth.authLogin["bkdid"]
          //console.log(keys)
      
          for(let index=0; index < this.peserta.keys.length; index++ ){
            this.$store.dispatch('users/memberuseradd', {
            nip: this.peserta.nip[index],
            idbkd: bkdID,
            idskpd: this.peserta.skpd[index],
            idkegiatan: pengajuanID,
            nama: this.peserta.nama[index],
            roleid: 3, // roleid perserta
            email: this.peserta.email[index],
            password: this.peserta.nip[index],

            
          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            let idpengajuan = this.$route.params.id 
             axios.get(`peserta/${idpengajuan}`).then(result => {
            this.data = result.data.values;
            this.remove(index)

            
          });

            
          }).catch(error => {
            this.loading = false
            if (error.response && error.response.data) {
              
            }
          })
          //console.log(this.form.getFieldValue("keys"))
          
          }

          

        }
      });
    }
  }
};
</script>