<template>
  <div class="container">
    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
      <a-col :xs="24" :sm="12" :md="12">
        <div class="title">Daftar Satuan Kerja Perangkat Daerah</div>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" class="text-right">
        <a-button
          @click="showAdd"
          type="primary"
          icon="plus"
          :style="{ marginRight: '16px' }"
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

    <!-- if add skpd show modal -->
    <a-modal title="Tambah" :footer="false" v-model="visibleAdd" @ok="handleAdd" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitAdd" hideRequiredMark>
        <a-form-item label="Nama SKPD" has-feedback>
          <a-input
            v-decorator="[
          'name',
          {
            rules: [{ required: true, message: 'Harus di isi!' }]
          }
        ]"
          />
        </a-form-item>

        <a-form-item label="No. Telepon" has-feedback>
          <a-input
            v-decorator="[
          'telp',
          {
            rules: [{ required: true, message: 'Harus di isi!' }]
          }
        ]"
          />
        </a-form-item>

        <a-form-item label="Alamat">
          <a-textarea
            :rows="4"
            v-decorator="[
          'address',
          {
            rules: [{ required: true, message: 'Harus di isi!' }]
          }
        ]"
          />
        </a-form-item>
        <a-button type="primary" html-type="submit">Simpan</a-button>
      </a-form>
    </a-modal>

    <!-- if edit skpd show modal -->
    <a-modal title="Edit" :footer="false" v-model="visibleEdit" @ok="handleEdit" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitEdit" hideRequiredMark>
        <a-form-item label="Nama SKPD" has-feedback>
          <a-input
            v-decorator="['nameEdit',{initialValue: 'Badan Pemberdayaan Masyarakat', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>

        <a-form-item label="No. Telepon" has-feedback>
          <a-input
            v-decorator="['telpEdit',{initialValue: '315049', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>

        <a-form-item label="Alamat">
          <a-textarea
            :rows="4"
            v-decorator="['addressEdit',{initialValue: 'Jl. Ahmad Yani No.2', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
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
    title: "Nama SKPD",
    dataIndex: "namaskpd",
    key: "namaskpd"
  },
  { title: "Alamat", dataIndex: "alamat", key: "alamat" },
  { title: "Kab/Kota", dataIndex: "kabupaten", key: "kabupaten" },
  { title: "Telepon", dataIndex: "notelp", key: "notelp" },
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
    name: "Badan Pemberdayaan Masyarakat",
    address: "Jl. Ahmad Yani No.2",
    telp: "315049"
  },
  {
    key: "2",
    name: "Kantor Kependudukan Catatan Sipil",
    address: "Jl. Slt. Alauddin, No.309",
    telp: "866520"
  },
  {
    key: "3",
    name: "Kantor Pelayanan Administrasi Perizinan",
    address: "Jl. Urip Sumihardjo No.8",
    telp: "436488"
  }
];

export default {
  name: "skpd",
  layout: "bkd",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  head() {
    return {
      title: "Daftar Satuan Kerja Perangkat Daerah"
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
    this.$store.dispatch('skpd/skpdfetch').then( ({ data }) => {
      this.data = data.values
      this.$store.commit('skpd/set', data.values)
      console.log(data)
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
         
          this.$store.dispatch('skpd/skpdadd', {
              namaSkpd: values.name,
              alamatSkpd: values.address,
              kabupatenSkpd: 'makassar',
              notelpSkpd: values.telp,

            }).then(result => {
              this.alert = {type: 'success', message: result.data.message}
            
              this.$store.dispatch('skpd/skpdfetch').then( ({ data }) => {
                this.data = data.values
                this.$store.commit('skpd/set', data.values)
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

    showEdit(key) {

       axios.get(`skpd/${key}`).then(result => {
        
        let res = result.data.values[0]
        this.$store.commit('skpd/setSkpd', result.data.values[0])
        
        
        let namaSkpd = res['namaskpd']
        let alamatSkpd = res['alamat']
        let notelpSkpd = res['notelp']
        
        this.form.setFieldsValue({
          nameEdit: namaSkpd,
          telpEdit: notelpSkpd,
          addressEdit: alamatSkpd,

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
          const resid = this.$store.state.skpd.skpd['id']
          console.log(resid)
          this.$store.dispatch('skpd/skpdedit', {
            namaSkpd: values.nameEdit,
            alamatSkpd: values.addressEdit,
            kabupatenSkpd: 'makassar',
            notelpSkpd: values.telpEdit,
            skpdId: resid,

          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            
            this.$store.dispatch('skpd/skpdfetch').then( ({ data }) => {
            this.data = data.values
            this.$store.commit('skpd/set', data.values)
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
      axios.delete(`skpd/${key}`).then(result => {
         this.$store.dispatch('skpd/skpdfetch').then( ({ data }) => {
            this.data = data.values
            this.$store.commit('skpd/set', data.values)
      })  
      }).catch(error => {
            this.loading = false
            if (error.response && error.response.data) {
              this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
            }
          })
    },
  }
};
</script>