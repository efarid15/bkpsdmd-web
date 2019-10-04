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
            >Diklat Prajabatan Golongan I Angkatan X dan XI Tahun 2019</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jumlah Peserta</div>
            <div class="fs-14 cr-black text-capitalize">40 Orang</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Mulai</div>
            <div class="fs-14 cr-black text-capitalize">Senin, 20 Oktober 2019</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Berakhir</div>
            <div class="fs-14 cr-black text-capitalize">Senin, 20 Desember 2019</div>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tempat Kegiatan</div>
            <div class="fs-14 cr-black text-capitalize">Campus I</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Ruangan</div>
            <div class="fs-14 cr-black text-capitalize">1B Lantai 1</div>
          </a-col>
          <a-col :xs="24" :sm="24" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Alamat</div>
            <div class="fs-14 cr-black text-capitalize">Jl. BTP Blok A No 537</div>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="container">
      <div class="title fs-18">Formulir Peserta Kegiatan</div>

      <div style="padding: 0 24px 24px 24px">
        <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
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
  </div>
</template>
<script>
let id = 0;
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
      skpd: {},
      member:[],
      data: [],
    }
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
        console.log(this.skpd);
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

          this.data = values
          //console.log(this.data.nama.length)
          
          for(let index=0; index < this.data.keys.length; index++ ){
            this.$store.dispatch('users/memberuseradd', {
            nip: this.data.nip[index],
            idbkd: 1,
            idskpd: this.data.skpd[index],
            idkegiatan: 1,
            nama: this.data.nama[index],
            roleid: 3,
            email: this.data.email[index],
            password: this.data.nip[index],

          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            
          }).catch(error => {
            this.loading = false
            if (error.response && error.response.data) {
              //this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
            }
          })
          //console.log(this.data.email[index])
          }

          /*this.$store.dispatch('users/memberuseradd', {
            nip: values.nip,
            idbkd: 1,
            idskpd: values.skpd,
            idkegiatan: 1,
            nama: values.nama,
            roleid: 3,
            email: values.email,
            password: values.nip,

          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            
          }).catch(error => {
            this.loading = false
            if (error.response && error.response.data) {
              //this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
            }
          })*/


        }
      });
    }
  }
};
</script>