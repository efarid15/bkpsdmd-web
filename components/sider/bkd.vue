<template>
  <div>
    <div class="brand-sider d-flex align-items-center">
      <!-- <div class="logo" :style="{ backgroundImage: 'url(/logo.png)' }" /> -->
      <div class="logo-text">SIPP BPSDM</div>
    </div>
    <div class="avatar d-flex align-items-center">
      <div class="avatar-item">
        <a-avatar :size="64"><div class="brand" style="backgroundImage: url('/logo-sulsel.png')"></div></a-avatar>
        <div class="name-user">{{ nama }}</div>
      </div>
    </div>
    <a-menu :defaultSelectedKeys="['1']" mode="inline">
      <a-menu-item key="1">
        <nuxt-link to="/bkd/dashboard">
          <a-icon type="dashboard" />
          <span>Dashboard</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <nuxt-link to="/bkd/submission">
          <a-icon type="tags" />
          <span>Pengajuan Kegiatan</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="3">
        <nuxt-link to="/bkd/activities">
          <a-icon type="book" />
          <span>Daftar Kegiatan</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="4">
        <nuxt-link to="/bkd/skpd">
          <a-icon type="bars" />
          <span>Daftar SKPD</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="5">
        <nuxt-link to="/bkd/report">
          <a-icon type="printer" />
          <span>Laporan</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="6">
        <nuxt-link to="/bkd/profile">
          <a-icon type="user" />
          <span>Pengaturan Akun</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="7">
        <a @click="logOut">
          <a-icon type="poweroff" />
          <span>Keluar</span>
        </a>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
   computed: {
     nama() {
       return this.$store.state.auth.authUser.nama
     }
   },
   methods: {
    logOut() {
      this.$store.dispatch("auth/reset").then(() => {
        this.$router.push("/");
      });
    }
  }

};
</script>>
