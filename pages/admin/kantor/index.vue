<template>
  <div class="container">
    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
      <a-col :xs="24" :sm="12" :md="12">
        <div class="title">Daftar Badan Kepegawaian Daerah (BKD)</div>
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
    <a-table id="tableBkd" :columns="columns" :dataSource="data" :scroll="{ x: 980 }" rowKey="id">
      <span slot="action" slot-scope="text, record">
        <a-button size="small" type="link" class="color-blue" @click="showEdit(record.id)">Edit</a-button>
        <a-divider type="vertical"></a-divider>
        <a-popconfirm
          v-if="data.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)">
          <a-button size="small" type="link" class="color-red">Hapus</a-button>
        </a-popconfirm>
      </span>
    </a-table>

    <!-- if add bkd show modal -->
    <a-modal title="Tambah" :footer="false" v-model="visibleAdd" @ok="handleAdd" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitAdd" hideRequiredMark>
        <a-form-item label="Nama / Kantor" has-feedback>
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

    <!-- if edit bkd show modal -->
    <a-modal title="Edit" :footer="false" v-model="visibleEdit" @ok="handleEdit"  centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitEdit" hideRequiredMark>
        <a-form-item label="Nama / Kantor" has-feedback>
          <a-input
            v-decorator="['nameEdit',{initialValue: 'Dinas Pelayanan Kota Makassar', rules: [{ required: true, message: 'Harus di isi!' }]}]"
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
  import * as store from "lodash";
  import nuxt from "../../../.nuxt/components/nuxt";
  import {mapMutations} from "vuex";

const columns = [
  {
    title: "No",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Nama BKD",
    dataIndex: "namabkd",
    key: "namabkd"
  },
  { title: "Alamat", dataIndex: "alamat", key: "alamat" },
  { title: "Telepon", dataIndex: "notelp", key: "notelp" },
  {
    title: "Action",
    fixed: "right",
    width: 160,
    scopedSlots: { customRender: "action" }
  }
];


/* const data = [
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
];*/

export default {

  name: "skpd",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  head() {
    return {
      title: "Daftar Badan Kepegawaian Daerah"
    };
  },
  data() {
    return {
      visibleAdd: false,
      visibleEdit: false,
      data: [],
      columns,
    };
  },

  computed: {
    bkds: {
      get() {
        return this.$store.state.bkd
      },
      set(val) {
        this.$store.commit('bkd/set', val)
      }
    }
  },


  mounted () {
    this.$store.dispatch('bkd/bkdfetch').then( ({ data }) => {
      this.data = data.data
      this.$store.commit('bkd/set', data)
      console.log(data)
    })

  },


  methods: {

    ...mapMutations({
      setBkds: 'bkd/set'
    }),

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
            //this.alert = null
            this.$store.dispatch('bkd/bkdadd', {
              bkdnama: values.name,
              bkdalamat: values.address,
              bkdkabupaten: 'makassar',
              bkdnotelp: values.telp,

            }).then(result => {
              this.alert = {type: 'success', message: result.data.message}
              this.$store.commit('bkd/set', message)
              this.loading = true
              this.visibleAdd = false
              //location.reload()


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

      axios.get(`auth/bkd/${key}`).then(result => {
        let res = result.data.data[0]
        let namaBkd = res['namabkd']
        let alamatBkd = res['alamat']
        let notelpBkd = res['notelp']

        this.form.setFieldsValue({
          nameEdit: namaBkd,
          telpEdit: notelpBkd,
          addressEdit: alamatBkd,
        });

        console.log(res['namabkd'])
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
          this.visibleEdit = false;
        }
      });
    },

    onDelete (key) {
      const data = [...this.data]
      this.data = data.filter(item => item.key !== key)
    },
  }
};
</script>