<template>
  <div class="container">

     <a-row :gutter="16" type="flex" justify="space-around" align="middle" class="p24">
      <a-col :xs="12" :sm="12" :md="12">
        <div class="title">Kampus Diklat</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" class="text-right">
        <a-button
          @click="showAddKampus"
          type="primary"
          icon="plus"
        >Tambah</a-button>
      </a-col>
    </a-row>

    <a-table :columns="camps" :dataSource="kampus" :scroll="{ x: 980 }" rowKey="id">
      <span slot="actionkampus" slot-scope="text, record">
        <a-button size="small" type="link" class="color-blue" @click="showEditKampus(record.id)">Edit</a-button>
        <a-divider type="vertical"></a-divider>
      </span>
    </a-table>




    <a-row :gutter="16" type="flex" justify="space-around" align="middle" class="p24">
      <a-col :xs="12" :sm="12" :md="12">
        <div class="title">Ruangan Kampus</div>
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

    <!-- if add Kampus show modal -->
    <a-modal title="Tambah Kampus" :footer="false" v-model="visibleAddKampus" @ok="handleAddKampus" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitAddKampus" hideRequiredMark>
        <a-form-item label="Nama Kampus" has-feedback>
          <a-input
            v-decorator="['nameAddKampus',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Alamat">
          <a-textarea :rows="4" v-decorator="['addressAddKampus',{rules: [{ required: true, message: 'Harus di isi!' }]}]" />
        </a-form-item>
        <a-button type="primary" html-type="submit">Simpan</a-button>
      </a-form>
    </a-modal>

    <!-- if edit kampus show modal -->
    <a-modal title="Edit Kampus" :footer="false" v-model="visibleEditKampus" @ok="handleEditKampus" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitEditKampus" hideRequiredMark>
        <a-form-item label="Nama Kampus" has-feedback>
          <a-input
            v-decorator="['nameEditKampus',{initialValue: 'Campus I', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Alamat">
          <a-textarea :rows="4" v-decorator="['addressEdit',{initialValue: 'Jl. BTP Blok A No 537', rules: [{ required: true, message: 'Harus di isi!' }]}]" />
        </a-form-item>
        <a-button type="primary" html-type="submit">Simpan Perubahan</a-button>
      </a-form>
    </a-modal>

    <!-- if add room show modal -->
    <a-modal title="Tambah Ruangan" :footer="false" v-model="visibleAdd" @ok="handleAdd" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitAdd" hideRequiredMark>
        <a-form-item label="Nama Kampus" has-feedback>
          <a-select
            v-decorator="['kampus',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
            placeholder="Pilih Kampus"
            setFieldsValue="selectKampus"
            
          >
            <a-select-option
              v-for="(item) in kampus"
              :value="item.id"
              v-bind:key="item.id"
            >{{ item.namakampus }}</a-select-option>
            <!-- <a-select-option value="1">Kegiatan 1</a-select-option>
            <a-select-option value="2">Kegiatan 2</a-select-option>-->
          </a-select>
        </a-form-item>
        <a-form-item label="Ruangan" has-feedback>
          <a-input
            v-decorator="['roomAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-button type="primary" html-type="submit">Simpan</a-button>
      </a-form>
    </a-modal>

    <!-- if edit room show modal -->
    <a-modal title="Edit Ruangan" :footer="false" v-model="visibleEdit" @ok="handleEdit" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitEdit" hideRequiredMark>
        <a-form-item label="Nama Tempat Kegiatan" has-feedback>
          <a-input
             v-decorator="['nameEdit', {initialValue: 'Campus I', rules: [{ required: true, message: 'Harus di isi!', },]}]" disabled
          />
        </a-form-item>
         <a-form-item label="Ruangan" has-feedback>
          <a-input
            v-decorator="['roomEdit',{initialValue: '1B Lantai 1', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-button type="primary" html-type="submit">Simpan Perubahan</a-button>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import axios from 'axios'
const camps = [
  {
    title: "No",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Nama Kampus",
    dataIndex: "namakampus",
    key: "namakampus"
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
    scopedSlots: { customRender: "actionkampus" }
  }
]
const columns = [
  {
    title: "No",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Nama Kampus",
    dataIndex: "namakampus",
    key: "namakampus"
  },
  {
    title: "Ruangan",
    dataIndex: "namaruangan",
    key: "namaruangan"
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
 name: "room",
 middleware: "auth",
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
      visibleAddKampus: false,
      visibleEditKampus: false,
      data: [],
      kampus: [],
      campus: {},
      columns,
      camps
    };
  },

  mounted () {
    this.$store.dispatch('kampus/kampusfetch').then( ({ data }) => {
      this.kampus = data.values
      this.$store.commit('kampus/setKampus', data.values)
    })

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

        this.$store.dispatch('kampus/ruanganadd', {
              idKampus: values.kampus,
              ruanganKampus: values.roomAdd,
              

            }).then(result => {
              this.alert = {type: 'success', message: result.data.message}
            
              this.$store.dispatch('kampus/vkampusfetch').then( ({ data }) => {
                this.data = data.values
                this.$store.commit('kampus/set', data.values)
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

    showAddKampus() {
      this.visibleAddKampus = true;
    },
    handleAddKampus() {
      this.visibleAddKampus = false;
    },

    showEditKampus(key){
      axios.get(`kampus/${key}`).then(result => {
        console.log(result.data.values)
        
        let res = result.data.values[0]
        this.$store.commit('kampus/setCampus', result.data.values[0])
        
        
        let namaTempat = res['namakampus']
        let alamatTempat = res['alamat']

        this.form.setFieldsValue({
          nameEditKampus: namaTempat,
          addressEdit: alamatTempat,
          

        });

        
      })

      this.visibleEditKampus = true;
    },

    handleEditKampus() {
      this.visibleEditKampus = false;
    },

    handleSubmitEditKampus(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
           
          const residkampus = this.$store.state.kampus.campus['id']

          console.log(residkampus)
          this.$store.dispatch('kampus/kampusedit', {
            namaKampus: values.nameEditKampus,
            alamatKampus: values.addressEdit,
            kampusId: residkampus,

          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            
            this.$store.dispatch('kampus/kampusfetch').then( ({ data }) => {
            this.kampus = data.values
            this.$store.commit('kampus/setKampus', data.values)
            this.visibleEditKampus = false
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

    handleSubmitAddKampus(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          
          this.$store.dispatch('kampus/kampusadd', {
            namaKampus: values.nameAddKampus,
            alamatKampus: values.addressAddKampus,

          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            
            this.$store.dispatch('kampus/kampusfetch').then( ({ data }) => {
            this.kampus = data.values
            this.$store.commit('kampus/setKampus', data.values)
            this.visibleAddKampus = false
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
      axios.get(`vruangan/${key}`).then(result => {

        console.log(result.data.values)
        
        let res = result.data.values[0]
        this.$store.commit('kampus/setRuangan', result.data.values[0])
        
        
        let namaKampus = res['namakampus']
        let ruanganKampus = res['namaruangan']
        
        this.form.setFieldsValue({
          nameEdit: namaKampus,
          roomEdit: ruanganKampus,

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
          const ruanganid = this.$store.state.kampus.ruangan['id']
          this.$store.dispatch('kampus/ruanganedit', {
            namaRuangan: values.roomEdit,
            idRuangan: ruanganid,

          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            
            this.$store.dispatch('kampus/vkampusfetch').then( ({ data }) => {
            this.data = data.values
            this.$store.commit('kampus/set', data.values)
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
      axios.delete(`ruangan/${key}`).then(result => {
         this.$store.dispatch('kampus/vkampusfetch').then( ({ data }) => {
            this.data = data.values
            this.$store.commit('kampus/set', data.values)
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