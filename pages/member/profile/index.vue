<template>
  <div>
    <div class="container" style="margin-bottom: 16px">
      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
        <a-col :xs="24" :sm="12" :md="12">
          <div class="title fs-18">Profil Saya</div>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" class="text-right">
          <a-button
            @click="showEdit"
            type="danger"
            icon="edit"
            :style="{ marginRight: '16px' }"
          >Edit</a-button>
        </a-col>
      </a-row>

      <a-list itemLayout="horizontal" style="padding: 0 20px 10px 20px">
        <a-list-item>
          <a-row :gutter="8" type="flex" justify="space-around" align="middle" style="width: 100%">
            <a-col :xs="24" :sm="6" :md="4">
              <span class="fs-14 cr-gray">Foto Profil</span>
            </a-col>
            <a-col :xs="24" :sm="18" :md="20">
              <span>
                <a-avatar :size="64" src="/user.png" />
              </span>
            </a-col>
          </a-row>
        </a-list-item>
        <a-list-item>
          <a-row :gutter="8" style="width: 100%">
            <a-col :xs="24" :sm="6" :md="4">
              <span class="fs-14 cr-gray">SKPD</span>
            </a-col>
            <a-col :xs="24" :sm="18" :md="20">
              <span class="fs-14 cr-black">Badan Pemberdayaan Masyarakat</span>
            </a-col>
          </a-row>
        </a-list-item>
        <a-list-item>
          <a-row :gutter="8" style="width: 100%">
            <a-col :xs="24" :sm="6" :md="4">
              <span class="fs-14 cr-gray">NIP</span>
            </a-col>
            <a-col :xs="24" :sm="18" :md="20">
              <span class="fs-14 cr-black">09298227727277277</span>
            </a-col>
          </a-row>
        </a-list-item>
        <a-list-item>
          <a-row :gutter="8" style="width: 100%">
            <a-col :xs="24" :sm="6" :md="4">
              <span class="fs-14 cr-gray">Nama Lengkap</span>
            </a-col>
            <a-col :xs="24" :sm="18" :md="20">
              <span class="fs-14 cr-black">Jordi Alba S.kom</span>
            </a-col>
          </a-row>
        </a-list-item>
        <a-list-item>
          <a-row :gutter="8" style="width: 100%">
            <a-col :xs="24" :sm="6" :md="4">
              <span class="fs-14 cr-gray">No. Telepon</span>
            </a-col>
            <a-col :xs="24" :sm="18" :md="20">
              <span class="fs-14 cr-black">085213247455</span>
            </a-col>
          </a-row>
        </a-list-item>
        <a-list-item>
          <a-row :gutter="8" style="width: 100%">
            <a-col :xs="24" :sm="6" :md="4">
              <span class="fs-14 cr-gray">Alamat</span>
            </a-col>
            <a-col :xs="24" :sm="18" :md="20">
              <span class="fs-14 cr-black">Jl. BTP Blok A No 537</span>
            </a-col>
          </a-row>
        </a-list-item>
      </a-list>

      <!-- if edit profile show modal -->
      <a-modal title="Edit" :footer="false" v-model="visibleEdit" @ok="handleEdit" centered>
        <a-form layout="vertical" :form="form" @submit="handleSubmitEdit" hideRequiredMark>
          <a-form-item label="Foto Profil" has-feedback>
            <a-upload
              name="avatar"
              listType="picture-card"
              :showUploadList="false"
              action="#"
              :beforeUpload="beforeUpload"
              @change="handleChange"
            >
              <img style="max-height: 80px" v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </a-form-item>
          <a-form-item label="Nama SKPD" has-feedback>
            <a-select
              v-decorator="['skpd',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
              placeholder="Pilih SKPD"
              showSearch
            >
              <a-select-option :value="1">Badan Pemberdayaan Masyarakat</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="Nama Lengkap" has-feedback>
            <a-input
              v-decorator="['nameEdit',{initialValue: 'Jordi Alba S.kom', rules: [{ required: true, message: 'Harus di isi!' }]}]"
            />
          </a-form-item>

          <a-form-item label="NIP" has-feedback>
            <a-input
              v-decorator="['nipEdit',{initialValue: '09298227727277277', rules: [{ required: true, message: 'Harus di isi!' }]}]"
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

    <!-- password -->
    <div class="container" style="margin-bottom: 16px">
      <a-row :gutter="16" type="flex" justify="space-around" align="middle">
        <a-col :xs="24" :sm="12" :md="12">
          <div class="title fs-18">Password</div>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" class="text-right">
          <a-button
            @click="showEditPassword"
            type="danger"
            icon="edit"
            :style="{ marginRight: '16px' }"
          >Edit</a-button>
        </a-col>
      </a-row>

      <a-list itemLayout="horizontal" style="padding: 0 20px 10px 20px">
        <a-list-item>
          <a-row :gutter="8" style="width: 100%">
            <a-col :xs="24" :sm="6" :md="4">
              <span class="fs-14 cr-gray">Username</span>
            </a-col>
            <a-col :xs="24" :sm="18" :md="20">
              <span class="fs-14 cr-black">09298227727277277</span>
            </a-col>
          </a-row>
        </a-list-item>
        <a-list-item>
          <a-row :gutter="8" style="width: 100%">
            <a-col :xs="24" :sm="6" :md="4">
              <span class="fs-14 cr-gray">Password</span>
            </a-col>
            <a-col :xs="24" :sm="18" :md="20">
              <span class="fs-14 cr-gray">
                <i>Password terakhir diubah 19 Desember 2019</i>
              </span>
            </a-col>
          </a-row>
        </a-list-item>
      </a-list>

      <!-- if edit password show modal -->
      <a-modal
        title="Edit Password"
        :footer="false"
        v-model="visibleEditPassword"
        @ok="handleEditPassword"
        centered
      >
        <a-form layout="vertical" :form="form" @submit="handleSubmitEditPassword" hideRequiredMark>
          <a-form-item label="Password" has-feedback>
            <a-input
              v-decorator="['password',{rules: [{required: true, message: 'Harus di isi!',}],}]"
              type="password"
            />
          </a-form-item>
          <a-form-item label="Password Baru" has-feedback>
            <a-input
              v-decorator="['newpassword',{rules: [{required: true, message: 'Harus di isi!',},{validator: validateToNextPassword,}],}]"
              type="password"
            />
          </a-form-item>
          <a-form-item label="Konfirmasi Password" has-feedback>
            <a-input
              v-decorator="['confirm',{rules: [{required: true, message: 'Please confirm your password!',}, {validator: compareToFirstPassword,}],}]"
              type="password"
              @blur="handleConfirmBlur"
            />
          </a-form-item>
          <a-button type="primary" html-type="submit">Simpan</a-button>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>
<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  name: "profile",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  head() {
    return {
      title: "Pengaturan Akun"
    };
  },
  data() {
    return {
      visibleEdit: false,
      visibleEditPassword: false,
      confirmDirty: false,
      loading: false,
      imageUrl: "/user.png"
    };
  },
  methods: {
    showEdit() {
      this.visibleEdit = true;
    },
    handleEdit() {
      this.visibleEdit = false;
    },
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Size gambar tidak boleh lebih dari 2MB!");
      }
      return isLt2M;
    },
    handleSubmitEdit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.visibleEdit = false;
        }
      });
    },

    showEditPassword() {
      this.visibleEditPassword = true;
    },
    handleEditPassword() {
      this.visibleEditPassword = false;
    },
    handleConfirmBlur  (e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('newpassword')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword  (rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleSubmitEditPassword(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.visibleEditPassword = false;
        }
      });
    }
  }
};
</script>