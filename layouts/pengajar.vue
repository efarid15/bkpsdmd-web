<template>
  <a-layout style="min-height: 100vh">
    <client-only placeholder="Loading...">
      <a-layout-sider>
        <sider-pengajar />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff;">
          <header-pengajar />
        </a-layout-header>
        <a-layout-content style="margin: 16px">
          <nuxt />
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <footer-app />
        </a-layout-footer>
      </a-layout>
    </client-only>
  </a-layout>
</template>
<script>
import headerPengajar from "~/components/header/pengajar.vue";
import siderPengajar from "~/components/sider/pengajar.vue";
import footerApp from "~/components/footer/app.vue";
export default {
  components: {
    headerPengajar,
    siderPengajar,
    footerApp
  }
};
</script>