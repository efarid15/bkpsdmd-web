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
        <div class="name-user fs-14 cr-black">Admin Pengajar</div>
      </div>

      <a-menu @click="handleClick" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <nuxt-link to="/pengajar/dashboard">
            <a-icon type="dashboard" />
            <span>Dashboard</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="2">
          <nuxt-link to="/pengajar/activities">
            <a-icon type="book" />
            <span>Daftar Kegiatan</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="3">
          <nuxt-link to="/pengajar/profile">
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
    logOut() {},
    onClose() {
      this.visible = false;
    },
    handleClick() {
      this.visible = false;
    }
  }
};
</script>