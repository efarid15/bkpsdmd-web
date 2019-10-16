<template>
  <div class="container">
    <a-row :gutter="16" type="flex" justify="space-around" align="middle" class="p24">
      <a-col :xs="12" :sm="12" :md="12">
        <div class="title">Diklat / Kegiatan</div>
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
          @confirm="() => onDelete(record.id)"
        >
          <a-button size="small" type="link" class="color-red">Hapus</a-button>
        </a-popconfirm>
      </span>
    </a-table>

    <!-- if add diklat show modal -->
    <a-modal title="Tambah Diklat / Kegiatan" :footer="false" v-model="visibleAdd" @ok="handleAdd" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitAdd" hideRequiredMark>
        <a-form-item label="Kategori Diklat" :required="false">
            <a-select style="width: 100%" v-decorator="['kategoriAdd', {rules: [{ required: true, message: 'Harus di pilih!' }]}]" showSearch placeholder="Pilih Kategori Diklat">
                    <a-select-option value="0">LATPIM</a-select-option>
                    <a-select-option value="1">LATSAR</a-select-option>
            </a-select>
                  
        </a-form-item>
        <a-form-item label="Jenis Diklat / Kegiatan" has-feedback>
          <a-input
            v-decorator="[
          'nameAdd',
          {
            rules: [{ required: true, message: 'Harus di isi!' }]
          }
        ]"
          />
        </a-form-item>

        <a-form-item label="Durasi / Lama Pelaksanaan Kegiatan" has-feedback>
          <a-input
            v-decorator="[
          'timeAdd',
          {
            rules: [{ required: true, message: 'Harus di isi!' }]
          }
        ]"
          />
        </a-form-item>
        <a-button type="primary" html-type="submit">Simpan</a-button>
      </a-form>
    </a-modal>

    <!-- if edit diklat show modal -->
    <a-modal title="Edit Diklat/Kegiatan" :footer="false" v-model="visibleEdit" @ok="handleEdit" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitEdit" hideRequiredMark>
        <a-form-item label="Kategori Diklat" :required="false">
            <a-select style="width: 100%" v-decorator="['kategoriEdit', {rules: [{ required: true, message: 'Harus di pilih!' }]}]" showSearch placeholder="Pilih Kategori Diklat">
                    <a-select-option value="0">LATPIM</a-select-option>
                    <a-select-option value="1">LATSAR</a-select-option>
            </a-select>
                  
        </a-form-item>

        <a-form-item label="Diklat / Kegiatan" has-feedback>
          <a-input
            v-decorator="['name',{initialValue: 'Diklat I', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>

        <a-form-item label="Durasi / Lama Pelaksanaan Kegiatan" has-feedback>
          <a-input
            v-decorator="['time',{initialValue: '2 Bulan', rules: [{ required: true, message: 'Harus di isi!' }]}]"
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
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Jenis Diklat / Kegiatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat"
  },
  { title: "Durasi / Lama Pelaksanaan Kegiatan", dataIndex: "durasi", key: "durasi" },
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
    name: "Diklat I",
    time: "1 Bulan"
  },
  {
    key: "2",
    name: "Diklat II",
    time: "3 Bulan"
  },
  {
    key: "3",
    name: "Diklat III",
    time: "3 Bulan"
  }
];

export default {

  name: "diklat",
  middleware: "auth",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  head() {
    return {
      title: "Management Diklat"
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
    this.$store.dispatch('diklat/diklatfetch').then( ({ data }) => {
      this.data = data.values
      this.$store.commit('diklat/set', data.values)
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

          this.$store.dispatch('diklat/diklatadd', {
              jenisDiklat: values.nameAdd,
              durasiJenis: values.timeAdd,
              kategoriDiklat: values.kategoriAdd,
              

            }).then(result => {
              this.alert = {type: 'success', message: result.data.message}
            
              this.$store.dispatch('diklat/diklatfetch').then( ({ data }) => {
                this.data = data.values
                this.$store.commit('diklat/set', data.values)
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
      
      axios.get(`jenisdiklat/${key}`).then(result => {
        
        let res = result.data.values[0]
        this.$store.commit('diklat/setDiklat', result.data.values[0])
        
        let idKategori = res['idkategori']
        let jenisDiklat = res['jenisdiklat']
        let durasi = res['durasi']
        
        this.form.setFieldsValue({
          name: jenisDiklat,
          time: durasi,
          kategoriEdit: idKategori,
          

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
          
          const resid = this.$store.state.diklat.diklat['id']
          console.log(resid)
          this.$store.dispatch('diklat/diklatedit', {
            jenisDiklat: values.name,
            durasiJenis: values.time,
            jenisId: resid,
            kategoriDiklat: values.kategoriEdit

          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            
            this.$store.dispatch('diklat/diklatfetch').then( ({ data }) => {
            this.data = data.values
            this.$store.commit('diklat/set', data.values)
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

    onDelete(key) {
      axios.delete(`jenisdiklat/${key}`).then(result => {
         this.$store.dispatch('diklat/diklatfetch').then( ({ data }) => {
            this.data = data.values
            this.$store.commit('diklat/set', data.values)
      })  
      }).catch(error => {
            this.loading = false
            if (error.response && error.response.data) {
              this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
            }
          })
    }
  }
};
</script>