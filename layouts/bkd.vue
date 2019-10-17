<template>
  <a-layout style="min-height: 100vh">
    <client-only placeholder="Loading...">
      <a-layout-sider>
        <sider-bkd />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff;">
          <header-bkd />
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
import headerBkd from "~/components/header/bkd.vue";
import siderBkd from "~/components/sider/bkd.vue";
import footerApp from "~/components/footer/app.vue";
export default {
  components: {
    headerBkd,
    siderBkd,
    footerApp
  }
};
</script>