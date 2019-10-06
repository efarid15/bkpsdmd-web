<template>
  <div class="container">
    <a-row :gutter="16" type="flex" justify="space-around" align="middle" class="p24">
      <a-col :xs="12" :sm="12" :md="12">
        <div class="title">Tempat Diklat / Kegiatan</div>
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
        <a-popconfirm
          v-if="data.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.id)">
          <a-button size="small" type="link" class="color-red">Hapus</a-button>
        </a-popconfirm>
      </span>
    </a-table>

    <!-- if add room show modal -->
    <a-modal title="Tambah Tempat Kegiatan" :footer="false" v-model="visibleAdd" @ok="handleAdd" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitAdd" hideRequiredMark>
        <a-form-item label="Nama Tempat Kegiatan" has-feedback>
          <a-input
            v-decorator="['nameAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Ruangan" has-feedback>
          <a-input
            v-decorator="['roomAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Alamat">
          <a-textarea :rows="4" v-decorator="['addressAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]" />
        </a-form-item>
        <a-button type="primary" html-type="submit">Simpan</a-button>
      </a-form>
    </a-modal>

    <!-- if edit room show modal -->
    <a-modal title="Edit Tempat Kegiatan" :footer="false" v-model="visibleEdit" @ok="handleEdit" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitEdit" hideRequiredMark>
        <a-form-item label="Nama Tempat Kegiatan" has-feedback>
          <a-input
            v-decorator="['nameEdit',{initialValue: 'Campus I', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
         <a-form-item label="Ruangan" has-feedback>
          <a-input
            v-decorator="['roomEdit',{initialValue: '1B Lantai 1', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Alamat">
          <a-textarea :rows="4" v-decorator="['addressEdit',{initialValue: 'Jl. BTP Blok A No 537', rules: [{ required: true, message: 'Harus di isi!' }]}]" />
        </a-form-item>
        <a-button type="primary" html-type="submit">Simpan Perubahan</a-button>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import axios from 'axios'
const columns = [
  {
    title: "No",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Tempat Kegiatan",
    dataIndex: "namakampus",
    key: "namakampus"
  },
  {
    title: "Ruangan",
    dataIndex: "namaruangan",
    key: "namaruangan"
  },
  {
    title: "Alamat",
    dataIndex: "alamat",
    key: "alamat"
  },
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
    name: "Campus I",
    room: "1B Lantai 1",
    address: "Jl. BTP Blok A No 537"
  },
  {
    key: "2",
    name: "Campus II",
    room: "2B Lantai 2",
    address: "Jl. Perintis Kemerdekaan 9 (Belakang Kampus STMIK Dipanegara)"
  }
];

export default {

 fetch ({store, redirect}) {
    if (!store.state.auth.authLogin) {
      redirect('/')
    }
  },

  name: "room",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  head() {
    return {
      title: "Management Room"
    };
  },
  data() {
    return {
      visibleAdd: false,
      visibleEdit: false,
      data: [],
      columns
    };
  },

  mounted () {
    this.$store.dispatch('kampus/vkampusfetch').then( ({ data }) => {
      this.data = data.values
      this.$store.commit('kampus/set', data.values)
    })

  },

  methods: {
    showAdd() {
      this.visibleAdd = true;
    },
    handleAdd() {
      this.visibleAdd = false;
    },
    
    handleSubmitAdd(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {

        this.$store.dispatch('tempat/tempatadd', {
              namaTempat: values.nameAdd,
              ruanganTempat: values.roomAdd,
              alamatTempat: values.addressAdd,
              

            }).then(result => {
              this.alert = {type: 'success', message: result.data.message}
            
              this.$store.dispatch('tempat/tempatfetch').then( ({ data }) => {
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
         


          this.visibleAdd = false;
        }
      });
    },

    showEdit(key) {
      axios.get(`tempat/${key}`).then(result => {
        
        let res = result.data.values[0]
        this.$store.commit('tempat/setTempat', result.data.values[0])
        
        
        let namaTempat = res['namatempat']
        let ruanganTempat = res['ruangan']
        let alamatTempat = res['alamat']

        this.form.setFieldsValue({
          nameEdit: namaTempat,
          roomEdit: ruanganTempat,
          addressEdit: alamatTempat,
          

        });

        
      })
      this.visibleEdit = true;
    },
    handleEdit() {
      this.visibleEdit = false;
    },
    handleSubmitEdit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const resid = this.$store.state.tempat.tempat['id']
          console.log(resid)
          this.$store.dispatch('tempat/tempatedit', {
            namaTempat: values.nameEdit,
            ruanganTempat: values.roomEdit,
            alamatTempat: values.addressEdit,
            tempatId: resid,

          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            
            this.$store.dispatch('tempat/tempatfetch').then( ({ data }) => {
            this.data = data.values
            this.$store.commit('tempat/set', data.values)
            console.log(data)
            this.visibleEdit = false
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

    onDelete (key) {
      axios.delete(`tempat/${key}`).then(result => {
         this.$store.dispatch('tempat/tempatfetch').then( ({ data }) => {
            this.data = data.values
            this.$store.commit('tempat/set', data.values)
      })  
      }).catch(error => {
            this.loading = false
            if (error.response && error.response.data) {
              this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
            }
          })
    }
    },
  
};
</script>