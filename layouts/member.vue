<template>
  <a-layout style="min-height: 100vh">
    <client-only placeholder="Loading...">
      <a-layout-sider>
        <sider-member />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff;">
          <header-member />
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
import headerMember from "~/components/header/member.vue";
import siderMember from "~/components/sider/member.vue";
import footerApp from "~/components/footer/app.vue";
export default {
  components: {
    headerMember,
    siderMember,
    footerApp
  }
};
</script>