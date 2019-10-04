<template>
  <div class="myLogin">
    <a-row
      type="flex"
      justify="space-around"
      align="middle"
      :style="{ height: '100vh',padding: '24px' }"
    >
      <a-col :xs="24" :sm="12" :md="12" :lg="6">
        <nuxt-link to="/"><img class="myBrand" src="/SIPP.jpeg" /></nuxt-link>
        <a-form :form="form" class="login-form" @submit="handleSubmit">
          <a-form-item>
            <a-alert style="margin-bottom: 16px;" v-if="alert" :type="alert.type" :message="alert.message" />
            <a-input
              v-decorator="[
          'email',
          { rules: [{required: true, message: 'Harus di isi!' }] }
        ]"
              placeholder="Username"
              size="large"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
          'password',
          { rules: [{required: true, message: 'Harus di isi!' }] }
        ]"
              type="password"
              placeholder="Password"
              size="large"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>

          <a-button
            type="primary"
            html-type="submit"
            size="large"
            block
            :loading="loading"
            :disable="loading"
          >Masuk</a-button>

          <div class="back-action">
            <nuxt-link to="/"><a-icon type="left" /> Kembali ke Halaman Awal</nuxt-link>
          </div>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  layout: "login",
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      user: {},
      alert: null,
      loading: null
    };
  },
  head() {
    return {
      title:
        "Masuk ke Dashboard Badan Kepegawaian Dan Sumber Daya Manusia Daerah Kota Makassar - BKPSDMD"
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.alert = null;
          this.$store
            .dispatch("auth/login", {
              email: values.email,
              password: values.password
            })
            .then(result => {
              this.alert = { type: "success", message: result.data.message };
              this.loading = false;
              this.user = result.data.user;

              switch (this.user["roleuser"]) {
                case "admin":
                  this.$router.push("/dashboard");
                  break;
                case "bkd":
                  this.$router.push("/bkd/dashboard");
                  break;
                case "pengajar":
                  this.$router.push("/pengajar/dashboard");
                  break;
                case "user":
                  this.$router.push("/member/dashboard");
                  break;
                default:
                  this.$router.push("/login");
              }
              this.$store.commit("auth/set_user", result.data.user);
            })
            .catch(error => {
              this.loading = false;
              if (error.response && error.response.data) {
                this.alert = {
                  type: "error",
                  message: error.response.data.message || error.reponse.status
                };
              }
            });
          // return this.$router.push("/dashboard");
        }
      });
    }
  }
};
</script>