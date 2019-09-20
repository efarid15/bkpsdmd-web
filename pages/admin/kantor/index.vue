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
    <a-table :columns="columns" :dataSource="data" :scroll="{ x: 980 }">
      <span slot="action" slot-scope="text, record">
        <a-button size="small" type="link" class="color-blue" @click="showEdit">Edit</a-button>
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
    <a-modal title="Edit" :footer="false" v-model="visibleEdit" @ok="handleEdit" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitEdit" hideRequiredMark>
        <a-form-item label="Nama / Kantor" has-feedback>
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
const columns = [
  {
    title: "No",
    dataIndex: "key",
    key: "key"
  },
  {
    title: "Nama BKD",
    dataIndex: "name",
    key: "name"
  },
  { title: "Alamat", dataIndex: "address", key: "address" },
  { title: "Telepon", dataIndex: "telp", key: "telp" },
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
      data,
      columns
    };
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
          this.visibleAdd = false;
        }
      });
    },

    showEdit() {
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