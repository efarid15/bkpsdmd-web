<template>
  <div class="container">
    <a-row :gutter="16" type="flex" justify="space-around" align="middle" class="p24">
      <a-col :xs="12" :sm="12" :md="12">
        <div class="title">User BKD Kabupaten / Kota</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" class="text-right">
        <a-button
          @click="showAdd"
          type="primary"
          icon="plus"
        >Tambah</a-button>
      </a-col>
    </a-row>
    
    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
      <span slot="action" slot-scope="text, record">
        <a-button size="small" type="link" class="color-blue" @click="showEdit(record.id)">Edit</a-button>
        <a-divider type="vertical"></a-divider>
        <!--<a-popconfirm
          v-if="data.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.id)">
          <a-button size="small" type="link" class="color-red">Hapus</a-button>
        </a-popconfirm>-->
      </span>
    </a-table>

    <!-- if add room show modal -->
    <a-modal title="Tambah User" :footer="false" v-model="visibleAdd" @ok="handleAdd" centered>
        <a-form layout="vertical" :form="form" @submit="handleSubmitAdd" hideRequiredMark>
          <a-form-item label="Nama Pengguna">
            <a-input
              v-decorator="['namaAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
              placeholder="Nama"
            />
          </a-form-item>
        <a-row :gutter="8">
        <a-col :span="12">
          <a-form-item label="Email">
            <a-input
              v-decorator="['emailAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
              placeholder="Email"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Password">
            <a-input type="passwordAdd"
              v-decorator="['passwordAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
              placeholder="Password"
            />
          </a-form-item>
        </a-col>
      </a-row>
          
      <a-row :gutter="8">
        <a-col :span="6">

           <a-form-item label="Role" has-feedback>
            <a-select
              v-decorator="['roleAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
              placeholder="Pilih Role User"
              showSearch
            >
              <a-select-option :value="2">BKD</a-select-option>
            </a-select>
          </a-form-item>

        </a-col>

        <a-col :span="18">
           
           <a-form-item label="Nama Instansi" has-feedback>
            <a-select
              v-decorator="['bkdAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
              placeholder="Pilih Instansi"
              showSearch
            >
            <a-select-option  v-for="(item) in bkdlist" :value="item.id" v-bind:key="item.id+20">{{ item.namabkd }}</a-select-option>
              
            </a-select>
          </a-form-item>

        </a-col>
      </a-row>
          
          
          <a-button type="primary" html-type="submit">Simpan</a-button>
      </a-form>
    </a-modal>

    <!-- Modal Edit Akun -->
    <a-modal title="Edit User BKD" :footer="false" v-model="visibleEdit" @ok="handleEdit" centered>
        <a-form layout="vertical" :form="form" @submit="handleSubmitEdit" hideRequiredMark>

          <a-form-item label="Nama Pengguna">
            <a-input
              v-decorator="['namaEdit',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
              placeholder="Nama Admin"
            />
          </a-form-item>
          <a-form-item label="Nama Instansi" has-feedback>
            <a-select
              v-decorator="['bkdEdit',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
              placeholder="Pilih Instansi"
              showSearch
            >
            <a-select-option  v-for="(item) in bkdlist" :value="item.id" v-bind:key="item.id+16">{{ item.namabkd }}</a-select-option>
              
            </a-select>
          </a-form-item>
          <a-form-item label="Email Pengguna">
            <a-input
              v-decorator="['emailEdit',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
              placeholder="Email"
            />
          </a-form-item>

          <a-button type="primary" html-type="submit">Simpan</a-button>

        </a-form>
    </a-modal>


  </div>
</template>
<script>

import axios from "axios"

const columns = [
  { title: "Nama", dataIndex: "nama", key: "nama" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "BKD", dataIndex: "namabkd", key: "namabkd" },
  { title: "Alamat BKD", dataIndex: "alamat", key: "alamat" },
  { title: "Kabupaten / Kota", dataIndex: "kabupaten_kota", key: "kabupaten_kota" },

  {
    title: "Action",
    fixed: "right",
    width: 160,
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    nama: "Samsul Efendi",
    email: "japrudt@gmail.com",
    bkd: "BKD Kota Makassar",
    alamat: "JL Hertasning Kota Makassar",
    kabupaten_kota: "Kota Makassar"
  },
 {
    key: "2",
    nama: "Samsul Efendi",
    email: "japrudt@gmail.com",
    bkd: "BKD Kab Gowa",
    alamat: "JL Hertasning Kota Makassar",
    kabupaten_kota: "Kabupaten Gowa"
  },
  {
    key: "3",
    nama: "Samsul Efendi",
    email: "japrudt@gmail.com",
    bkd: "BKD Kab Maros",
    alamat: "JL Hertasning Kota Makassar",
    kabupaten_kota: "Kabupaten Maros"
  },
];


export default {
    
name: "userbkd",
middleware: "auth",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  head() {
    return {
      title: "Management User"
    };
  },
  data() {
    return {
      visibleAdd: false,
      visibleEdit: false,
      email: "",
      nama: "",
      idbkd: "",
      bkdlist: {},
      data: [],
      columns
    };
  },

  mounted () {
    this.$store.dispatch('users/bkduserfetch').then( ({ data }) => {
      this.data = data.values
      this.$store.commit('users/set', data.values)
    })

  },

  methods: {

    showAdd() {

      this.$store.dispatch('bkd/bkdfetch').then( ({ data }) => {
      this.bkdlist = data.values
      
    })
      
      this.visibleAdd = true;
    },

    showEdit(key){
      this.$store.dispatch('bkd/bkdfetch').then( ({ data }) => {
          this.bkdlist = data.values
      })

      axios.get(`users/${key}`).then(result => {

          this.$store.commit('users/setUserbkd', result.data.values[0])
          this.nama = result.data.values[0]['nama']
          this.email = result.data.values[0]['email']
          this.idbkd = result.data.values[0]['bkdid']

          this.form.setFieldsValue({
          namaEdit: this.nama,
          emailEdit: this.email,
          bkdEdit: this.idbkd,

        });

      });

      this.visibleEdit = true;

    },

    handleEdit() {
       this.visibleEdit = false;
    },



    handleAdd() {
      this.visibleAdd = false;
    },

    handleSubmitEdit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {

          let userid = this.$store.state.users.userbkd['id']
          let bkdid = this.$store.state.users.userbkd['bkdid']
          
          this.$store.dispatch('users/useredit', {
              userid: userid,
              bkdid: bkdid,
              nama: values.namaEdit,
              email: values.emailEdit,
        
            }).then(result => {
              this.alert = {type: 'success', message: result.data.message}
            
              this.$store.dispatch('users/bkduserfetch').then( ({ data }) => {
                this.data = data.values
                this.$store.commit('users/set', data.values)
                this.visibleEdit = false
            
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

        }
      });
    },
    handleSubmitAdd(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {

          this.$store.dispatch('users/bkduseradd', {
              roleid: values.roleAdd,
              email: values.emailAdd,
              nama: values.namaAdd,
              password: values.passwordAdd,
              idbkd: values.bkdAdd,
              

            }).then(result => {
              this.alert = {type: 'success', message: result.data.message}
            
              this.$store.dispatch('users/bkduserfetch').then( ({ data }) => {
                this.data = data.values
                this.$store.commit('tempat/set', data.values)
                this.visibleAdd = false
            
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
        
        }
      });
    },

    
  },

}

</script>