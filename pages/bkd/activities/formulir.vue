<template>
  <div>
    <a-button @click="$router.go(-1)" type="link" class="cr-gray" icon="arrow-left" style="margin-bottom: 8px">Kembali</a-button>

    <div class="container" style="margin-bottom: 16px">
      <div style="padding: 24px">
          <div class="fs-16 cr-black" style="margin-bottom: 8px">Informasi Kegiatan</div>
          <a-row :gutter="16">
            <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
                <div class="fs-12 cr-gray text-uppercase">Jenis Kegiatan</div>
                <div class="fs-14 cr-black text-capitalize">Diklat Prajabatan Golongan I Angkatan X dan XI Tahun 2019</div>
            </a-col>
            <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
                <div class="fs-12 cr-gray text-uppercase">Jumlah Peserta</div>
                <div class="fs-14 cr-black text-capitalize">40 Orang</div>
            </a-col>
            <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
                <div class="fs-12 cr-gray text-uppercase">Tanggal Mulai</div>
                <div class="fs-14 cr-black text-capitalize">Senin, 20 Oktober 2019</div>
            </a-col>
            <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
                <div class="fs-12 cr-gray text-uppercase">Tanggal Berakhir</div>
                <div class="fs-14 cr-black text-capitalize">Senin, 20 Desember 2019</div>
            </a-col>
          </a-row>

        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tempat Kegiatan</div>
            <div
              class="fs-14 cr-black text-capitalize"
            >Campus I</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Ruangan</div>
            <div class="fs-14 cr-black text-capitalize">1B Lantai 1</div>
          </a-col>
          <a-col :xs="24" :sm="24" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Alamat</div>
            <div class="fs-14 cr-black text-capitalize">Jl. BTP Blok A No 537</div>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="container">
      <div class="title fs-18">Formulir Peserta Kegiatan</div>

      <div style="padding: 0 24px 24px 24px">
        <a-form layout="vertical" :form="form" @submit="handleSubmit" hideRequiredMark>
          <div v-for="(member, index) in form.getFieldValue('keys')" :key="member">
            <a-row :gutter="16" type="flex" justify="space-around" align="middle">
              <a-col :xs="24" :sm="11" :md="11">
                <a-form-item :label="index === 0 ? '' : ''" :required="false">
                  <a-input
                    v-decorator="[`name[${member}]`,
                    {
                        validateTrigger: ['change', 'blur'],
                        rules: [{
                        required: true,
                        whitespace: true,
                        message: 'Harus di isi!',
                        }],
                    }
                    ]"
                    placeholder="Nama Peserta"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="11" :md="11">
                <a-form-item :label="index === 0 ? '' : ''" :required="false">
                  <a-input
                    v-decorator="[`nip[${member}]`,
                    {
                        validateTrigger: ['change', 'blur'],
                        rules: [{
                        required: true,
                        whitespace: true,
                        message: 'Harus di isi!',
                        }],
                    }
                    ]"
                    placeholder="NIP Peserta"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="12" :sm="2" :md="2">
                <a-form-item>
                  <div
                    v-if="form.getFieldValue('keys').length > 0"
                    :disabled="form.getFieldValue('keys').length === 0"
                    @click="() => remove(member)"
                  >
                    <a-button type="danger" block>
                      <a-icon type="minus" />
                    </a-button>
                  </div>
                </a-form-item>
              </a-col>
            </a-row>
            <a-divider></a-divider>
          </div>

          <a-row :gutter="16">
            <a-col :xs="24" :sm="6" :md="4">
              <a-button type="dashed" @click="add" block style="margin-bottom: 8px">
                <a-icon type="plus" />Tambah Peserta
              </a-button>
            </a-col>
            <a-col :xs="24" :sm="6" :md="4">
              <a-button v-if="form.getFieldValue('keys').length > 0" type="primary" html-type="submit" block style="margin-bottom: 8px">Simpan</a-button>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
let id = 0;
export default {
  name: "formulir",
  layout: "bkd",
  beforeCreate() {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator("keys", { initialValue: [], preserve: true });
  },
  head() {
    return {
      title: "Formulir Peserta Kegiatan - BKD"
    };
  },
  methods: {
    remove(member) {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      // We need at least one passenger
      if (keys.length === 0) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== member)
      });
    },

    add() {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      const nextKeys = keys.concat(++id);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys
      });
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
        }
      });
    }
  }
};
</script>