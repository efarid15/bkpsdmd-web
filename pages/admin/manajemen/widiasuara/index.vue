<template>
  <div class="container">
    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
      <a-col :xs="24" :sm="12" :md="12">
        <div class="title">Daftar Widiasuara / Pengajar</div>
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

    <!-- if add room show modal -->
    <a-modal title="Tambah Widiasuara/Pengajar" :footer="false" v-model="visibleAdd" @ok="handleAdd" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitAdd" hideRequiredMark>
        <a-form-item label="Nama Widiasuara/Pengajar" has-feedback>
          <a-input
            v-decorator="['nameAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Nomor Telepon" has-feedback>
          <a-input
            v-decorator="['telpAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Email" has-feedback>
          <a-input
            v-decorator="['emailAdd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>

        <a-button type="primary" html-type="submit">Simpan</a-button>
      </a-form>
    </a-modal>

    <!-- if edit room show modal -->
    <a-modal title="Edit Widiasuara/Pengajar" :footer="false" v-model="visibleEdit" @ok="handleEdit" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitEdit" hideRequiredMark>
        <a-form-item label="Nama Widyaiswara/Pengajar" has-feedback>
          <a-input
            v-decorator="['nameEdit',{initialValue: 'Widya Pitaloka', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Nomor Telepon" has-feedback>
          <a-input
            v-decorator="['telpEdit',{initialValue: '085213247488', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Email" has-feedback>
          <a-input
            v-decorator="['emailEdit',{initialValue: 'pengajar@test.com', rules: [{ required: true, message: 'Harus di isi!' }]}]"
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
    title: "Nama Widyaiswara/Pengajar",
    dataIndex: "nama",
    key: "nama"
  },{
    title: "No. Telepon",
    dataIndex: "notelp",
    key: "notelp"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
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
    name: "Widya Pitaloka",
    telp: "085213247466"
  },
  {
    key: "2",
    name: "Nur Elsa",
    telp: "085213247488"
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
      title: "Management Widyaiswara/Pengajar"
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
    this.$store.dispatch('widyaiswara/widyaiswarafetch').then( ({ data }) => {
      this.data = data.values
      this.$store.commit('widyaiswara/set', data.values)
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

            this.$store.dispatch('widyaiswara/widyaiswaraadd', {
              namaWidyaiswara: values.nameAdd,
              notelpWidyaiswara: values.telpAdd,
              emailWidyaiswara: values.emailAdd,
              

            }).then(result => {
              this.alert = {type: 'success', message: result.data.message}
            
              this.$store.dispatch('widyaiswara/widyaiswarafetch').then( ({ data }) => {
                this.data = data.values
                this.$store.commit('widyaiswara/set', data.values)
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
     axios.get(`widyaiswara/${key}`).then(result => {
        
        let res = result.data.values[0]
        this.$store.commit('widyaiswara/setWidyaiswara', result.data.values[0])
        
        
        let namaWidyaiswara = res['nama']
        let notelpWidyaiswara = res['notelp']
        let emailWidyaiswara = res['email']

        this.form.setFieldsValue({
          nameEdit: namaWidyaiswara,
          telpEdit: notelpWidyaiswara,
          emailEdit: emailWidyaiswara,
          

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

         const resid = this.$store.state.widyaiswara.widyaiswara['id']
          console.log(resid)
          this.$store.dispatch('widyaiswara/widyaiswaraedit', {
            namaWidyaiswara: values.nameEdit,
            notelpWidyaiswara: values.telpEdit,
            emailWidyaiswara: values.emailEdit,
            widyaiswaraId: resid,

          }).then(result => {
            this.alert = {type: 'success', message: result.data.message}
            
            this.$store.dispatch('widyaiswara/widyaiswarafetch').then( ({ data }) => {
            this.data = data.values
            this.$store.commit('widyaiswara/set', data.values)
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
      axios.delete(`widyaiswara/${key}`).then(result => {
         this.$store.dispatch('widyaiswara/widyaiswarafetch').then( ({ data }) => {
            this.data = data.values
            this.$store.commit('widyaiswara/set', data.values)
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