<template>
  <div>
    <div class="brand-sider d-flex align-items-center">
      <!-- <div class="logo" :style="{ backgroundImage: 'url(/logo.png)' }" /> -->
      <div class="logo-text">SIPP BPSDM</div>
    </div>
    <div class="avatar d-flex align-items-center">
      <div class="avatar-item">
        <a-avatar :size="64"><div class="brand" style="backgroundImage: url('/logo-sulsel.png')"></div></a-avatar>
        <div class="name-user">Gustang</div>
      </div>
    </div>
    <a-menu :defaultSelectedKeys="['1']" mode="inline">
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
            <nuxt-link to="/admin/manajemen/widiasuara"> <a-icon type="right" /> Widiasuara/Pengajar</nuxt-link>
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
  </div>
</template>