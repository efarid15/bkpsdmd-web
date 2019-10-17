<template>
  <a-layout style="min-height: 100vh">
    <client-only placeholder="Loading...">
      <a-layout-sider class="ant-layout-sider--admin">
        <sider-admin />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff;">
          <header-admin />
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
import headerAdmin from "~/components/header/admin.vue";
import siderAdmin from "~/components/sider/admin.vue";
import footerApp from "~/components/footer/app.vue";
export default {
  components: {
    headerAdmin,
    siderAdmin,
    footerApp
  }
};
</script>