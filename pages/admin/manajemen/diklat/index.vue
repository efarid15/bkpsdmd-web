<template>
  <div class="container">
    <a-row :gutter="16" type="flex" justify="space-around" align="middle">
      <a-col :xs="24" :sm="12" :md="12">
        <div class="title">Diklat / Kegiatan</div>
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
          @confirm="() => onDelete(record.key)"
        >
          <a-button size="small" type="link" class="color-red">Hapus</a-button>
        </a-popconfirm>
      </span>
    </a-table>

    <!-- if add diklat show modal -->
    <a-modal title="Tambah Diklat / Kegiatan" :footer="false" v-model="visibleAdd" @ok="handleAdd" centered>
      <a-form layout="vertical" :form="form" @submit="handleSubmitAdd" hideRequiredMark>
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
        <a-form-item label="Jenis Diklat / Kegiatan" has-feedback>
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
const columns = [
  {
    title: "No",
    dataIndex: "key",
    key: "key"
  },
  {
    title: "Jenis Diklat / Kegiatan",
    dataIndex: "name",
    key: "name"
  },
  { title: "Durasi / Lama Pelaksanaan Kegiatan", dataIndex: "time", key: "time" },
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

    onDelete(key) {
      const data = [...this.data];
      this.data = data.filter(item => item.key !== key);
    }
  }
};
</script>