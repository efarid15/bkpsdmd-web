<template>
  <a-row type="flex" justify="space-around" align="middle" :style="{ height: '100vh' }">
    <a-col :span="6">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>

          <a-alert v-if="alert" :type="alert.type" :message="alert.message" />
          <a-input
            v-decorator="[
          'email',
          { rules: [{required: true, message: 'Harus di isi!' }] }
        ]"
            placeholder="Username"
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
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>

        <a-button type="primary" html-type="submit" block :loading="loading" :disable="loading">Log in</a-button>
      </a-form>
    </a-col>
  </a-row>
</template>
<script>
export default {
  layout: "login",
  name: "login",
  data () {
    return {
      email: '',
      password: '',
      alert: null,
      loading: null,
    }
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
          this.alert = null
          this.$store.dispatch('auth/login', {
            email: values.email,
            password: values.password
          }).then(result => {
             this.alert = {type: 'success', message: result.data.message}
               this.loading = false
            this.$router.push('/dashboard')
            this.$store.commit('auth/set_user', data)
            console.log(data)
          }).catch(error => {
               this.loading = false
            if (error.response && error.response.data) {
              this.alert = {type: 'error', message: error.response.data.message || error.reponse.status}
            }
          })
          // return this.$router.push("/dashboard");
        }
      });



    }
  }
};
</script>