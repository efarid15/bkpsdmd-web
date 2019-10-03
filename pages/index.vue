<template>
  <a-layout class="ant-layout--onepages">
    <a-layout-content>
      <div class="ant-carousel--slide">
        <a-carousel vertical autoplay effect="fade">
          <div
            class="ant-carousel--slide-images"
            style="backgroundImage: url('https://images.unsplash.com/photo-1568284440614-7155befdc39d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80')"
          ></div>
          <div
            class="ant-carousel--slide-images"
            style="backgroundImage: url('https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2853&q=80')"
          ></div>
        </a-carousel>
        <div class="ant-carousel--slide-caption">
          <div class="title">SIPP BPSM</div>
          <div class="subtitle">Badan Kepegawaian Dan Sumber Daya Manusia Kota Makassar</div>
          <a-button size="large">
            <nuxt-link to="/login">Masuk ke Dashboard <a-icon type="right" /></nuxt-link>
          </a-button>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  name: "onepages",
  layout: "login"
};
</script>