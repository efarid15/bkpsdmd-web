<template>
  <div>
    <div class="d-flex align-items-center">
      <div class="hidden-dekstop" style="margin-right:8px">
        <a @click="showDrawer">
          <a-avatar style="backgroundColor:#fafafa;color:#484848" icon="menu-fold" />
        </a>
      </div>
      <div style="margin-right: 16px" class="hidden-dekstop fs-18 cr-black">SIPP BPSDM</div>
      <div class="hidden-mobile">
        <a-badge status="success" text="Online" />
      </div>

      <div class="ml-auto">
        <a @click="logOut">
          <a-avatar class="hidden-mobile" icon="poweroff" style="margin-right: 8px" />
        </a>

        <a-avatar class="hidden-dekstop" size="large">
          <div class="brand" style="backgroundImage: url('/logo-sulsel.png')"></div>
        </a-avatar>
      </div>
    </div>

    <a-drawer placement="left" :closable="false" @close="onClose" :visible="visible">
      <div slot="title">
        <div class="d-flex align-items-center">
          <div>SIPP BPSDM</div>
          <div class="ml-auto">
            <a-button @click="onClose" shape="circle" icon="close" />
          </div>
        </div>
      </div>

      <div class="avatar d-flex align-items-center" style="margin-bottom: 16px">
        <div class="avatar-item" style="margin-right: 8px">
          <a-avatar size="large">
            <div class="brand" style="backgroundImage: url('/logo-sulsel.png')"></div>
          </a-avatar>
        </div>
        <div class="name-user fs-14 cr-black">Jordi Alba Mustafa</div>
      </div>

      <a-menu @click="handleClick" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <nuxt-link to="/dashboard">
            <a-icon type="dashboard" />
            <span>Dashboard</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="2">
          <nuxt-link to="/admin/submission">
            <a-icon type="tags" />
            <span>Semua Pengajuan</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="3">
          <nuxt-link to="/admin/activities">
            <a-icon type="book" />
            <span>Daftar Kegiatan</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="4">
          <nuxt-link to="/admin/kantor">
            <a-icon type="cluster" />
            <span>Daftar BKD</span>
          </nuxt-link>
        </a-menu-item>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="appstore" />
            <span>Manajemen</span>
          </span>
          <a-menu-item key="sub2-1">
            <nuxt-link to="/admin/manajemen/diklat"><a-icon type="right" /> Diklat/Kegiatan</nuxt-link>
          </a-menu-item>
          <a-menu-item key="sub2-2">
            <nuxt-link to="/admin/manajemen/room"><a-icon type="right" /> Tempat Kegiatan</nuxt-link>
          </a-menu-item>
          <a-menu-item key="sub2-3">
            <nuxt-link to="/admin/manajemen/widiasuara"><a-icon type="right" /> Widiasuara/Pengajar</nuxt-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="5">
          <nuxt-link to="/admin/report">
            <a-icon type="printer" />
            <span>Laporan</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="6">
          <nuxt-link to="/admin/profile">
            <a-icon type="user" />
            <span>Pengaturan Akun</span>
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    logOut() {
      this.$store.dispatch("auth/reset").then(() => {
        this.$router.push("/");
      });
    },
    onClose() {
      this.visible = false;
    },
    handleClick() {
      this.visible = false;
    }
  }
};
</script>