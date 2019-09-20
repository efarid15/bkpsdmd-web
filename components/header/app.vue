<template>
  <div>
    <div class="d-flex align-items-center">
      <div class="hidden-dekstop" style="margin-right:8px">
        <a @click="showDrawer">
          <a-avatar style="backgroundColor:#fafafa;color:#484848" icon="menu-fold" />
        </a>
      </div>
      <div style="margin-right: 16px" class="hidden-dekstop fs-18 cr-black">BKPSDMD</div>
      <div class="hidden-mobile">
        <a-badge status="success" text="Online" />
      </div>

      <div class="ml-auto">
        <a @click="logOut"><a-avatar class="hidden-mobile" icon="poweroff" style="margin-right: 8px" /></a>

        <a-avatar
          class="hidden-dekstop"
          style="backgroundColor:#fafafa"
          size="large"
          src="/user.png"
        />
      </div>
    </div>

    <a-drawer placement="left" :closable="false" @close="onClose" :visible="visible">
      <div slot="title">
        <div class="d-flex align-items-center">
          <div>BKPSDMD</div>
          <div class="ml-auto">
            <a-button @click="onClose" shape="circle" icon="close" />
          </div>
        </div>
      </div>

      <div class="avatar d-flex align-items-center" style="margin-bottom: 16px">
        <div class="avatar-item" style="margin-right: 8px">
          <a-avatar size="large" src="/user.png" />
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

        <a-menu-item-group key="g1">
          <template slot="title">
            <span class="text-uppercase">Menu Admin</span>
          </template>
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
              <nuxt-link to="/admin/manajemen/diklat">Diklat/Kegiatan</nuxt-link>
            </a-menu-item>
            <a-menu-item key="sub2-2">
              <nuxt-link to="/admin/manajemen/room">Tempat Kegiatan</nuxt-link>
            </a-menu-item>
            <a-menu-item key="sub2-3">
              <nuxt-link to="/admin/manajemen/widiasuara">Widiasuara/Pengajar</nuxt-link>
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
        </a-menu-item-group>

        <!-- menu BKD kab/kota -->

        <a-menu-item-group key="g2">
          <template slot="title">
            <span class="text-uppercase">Menu BKD</span>
          </template>
          <a-menu-item key="g2-1">
            <nuxt-link to="/bkd/submission">
              <a-icon type="tags" />
              <span>Pengajuan Kegiatan</span>
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="g2-2">
            <nuxt-link to="/bkd/activities">
              <a-icon type="book" />
              <span>Daftar Kegiatan</span>
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="g2-3">
            <nuxt-link to="/bkd/skpd">
              <a-icon type="bars" />
              <span>Daftar SKPD</span>
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="g2-4">
            <nuxt-link to="/bkd/report">
              <a-icon type="printer" />
              <span>Laporan</span>
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="g2-5">
            <nuxt-link to="/bkd/profile">
              <a-icon type="user" />
              <span>Pengaturan Akun</span>
            </nuxt-link>
          </a-menu-item>
        </a-menu-item-group>

        <!-- menu MEMBER -->

        <a-menu-item-group key="g3">
          <template slot="title">
            <span class="text-uppercase">Menu Member</span>
          </template>
          <a-menu-item key="g3-1">
            <nuxt-link to="/member/activities">
              <a-icon type="book" />
              <span>Daftar Kegiatan</span>
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="g3-2">
            <nuxt-link to="/member/profile">
              <a-icon type="user" />
              <span>Pengaturan Akun</span>
            </nuxt-link>
          </a-menu-item>
        </a-menu-item-group>

        <!-- menu PENGAJAR -->

        <a-menu-item-group key="g4">
          <template slot="title">
            <span class="text-uppercase">Menu Pengajar</span>
          </template>
          <a-menu-item key="g4-1">
            <nuxt-link to="/pengajar/activities">
              <a-icon type="book" />
              <span>Daftar Kegiatan</span>
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="g4-2">
            <nuxt-link to="/pengajar/profile">
              <a-icon type="user" />
              <span>Pengaturan Akun</span>
            </nuxt-link>
          </a-menu-item>
        </a-menu-item-group>
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
    logOut(){
      this.$store.dispatch('auth/reset').then(() => {
        this.$router.push('/')
      })
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