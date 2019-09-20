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
        <a-button type="primary" html-type="submit">Simpan</a-button>
      </a-form>
    </a-modal>

    <!-- if edit room show modal -->
    <a-modal title="Edit Widiasuara/Pengajar" :footer="false" v-model="visibleEdit" @ok="handleEdit" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitEdit" hideRequiredMark>
        <a-form-item label="Nama Widiasuara/Pengajar" has-feedback>
          <a-input
            v-decorator="['nameEdit',{initialValue: 'Widya Pitaloka', rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
        <a-form-item label="Nomor Telepon" has-feedback>
          <a-input
            v-decorator="['telpEdit',{initialValue: '085213247488', rules: [{ required: true, message: 'Harus di isi!' }]}]"
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
    title: "Nama Widiasuara/Pengajar",
    dataIndex: "name",
    key: "name"
  },{
    title: "No. Telepon",
    dataIndex: "telp",
    key: "telp"
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
  name: "room",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  head() {
    return {
      title: "Management Widiasuara/Pengajar"
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