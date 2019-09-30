<template>
  <a-layout style="min-height: 100vh">
    <client-only placeholder="Loading...">
      <a-layout-sider collapsible v-model="collapsed">
        <sider-admin />
      </a-layout-sider>
      <a-layout>
        <a-affix :offsetTop="0">
          <a-layout-header style="background: #fff;">
            <header-app />
          </a-layout-header>
        </a-affix>
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
import headerApp from "~/components/header/app.vue";
import siderAdmin from "~/components/sider/admin.vue";
import footerApp from "~/components/footer/app.vue";
export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    headerApp,
    siderAdmin,
    footerApp
  }
};
</script>