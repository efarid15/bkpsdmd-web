<template>
  <div>
    <div class="brand-sider d-flex align-items-center">
      <!-- <div class="logo" :style="{ backgroundImage: 'url(/logo.png)' }" /> -->
      <div class="logo-text">SIPP BPSDM</div>
    </div>
    <div class="avatar d-flex align-items-center">
      <div class="avatar-item">
        <a-avatar :size="64"><div class="brand" style="backgroundImage: url('/logo-sulsel.png')"></div></a-avatar>
        <div class="name-user">Admin Pengajar</div>
      </div>
    </div>
    <a-menu :defaultSelectedKeys="['1']" mode="inline">
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
  </div>
</template>