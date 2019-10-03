<template>
  <div style="width: 100%;height: 100vh">
    <div class="d-flex align-items-center" style="height: 100%">
      <div style="margin: 0 auto">
        <a-button type="primary" size="large">
          <nuxt-link to="/login">Login</nuxt-link>
        </a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "onepages",
  layout: "login"
};
</script>