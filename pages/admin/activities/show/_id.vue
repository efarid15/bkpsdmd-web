<template>
  <div>
    <a-button
      @click="$router.go(-1)"
      type="link"
      class="cr-gray"
      icon="arrow-left"
      style="margin-bottom: 8px"
    >Kembali</a-button>

    <div class="container" style="padding: 16px">
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :xs="24" :sm="24" :md="16" :lg="12">
          <expandable-image v-if="src === []" :src="src" />
          <!-- <img style="max-width: 100%" :src="src" /> -->
          <!-- <client-only>
         <vuePdf style="display: inline-block; width: 100%" :src="src"></vuePdf>
          </client-only>-->
          <a-empty v-else />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

var vuePdf;
if (process.browser) {
  vuePdf = require("vue-pdf").default;
}
export default {
  components: {
    vuePdf
  },

  data() {
    return {
      data: [],
      detail: [],
      src: ""
    };
  },

  created() {
    let idpengajuan = this.$route.params.id;
    axios.get(`pengajuan/approve/${idpengajuan}`).then(result => {
      this.detail = result.data.values[0];
      this.src = "/api/uploads/bpsdm/" + this.detail.dokumenpengajuan;
      console.log(this.src);

      let tglstart1 = moment(this.detail.tglstartoncamp1).format("DD MMM YYYY");
      this.$set(this.detail, "tglstartoncamp1", tglstart1);
      let tglend1 = moment(this.detail.tglendoncamp1).format("DD MMM YYYY");
      this.$set(this.detail, "tglendoncamp1", tglend1);

      let tglstart2 = moment(this.detail.tglstartoncamp2).format("DD MMM YYYY");
      this.$set(this.detail, "tglstartoncamp2", tglstart2);
      let tglend2 = moment(this.detail.tglendoncamp2).format("DD MMM YYYY");
      this.$set(this.detail, "tglendoncamp2", tglend2);

      if (this.detail.tglstartoncamp3 != null) {
        let tglstart3 = moment(this.detail.tglstartoncamp3).format(
          "DD MMM YYYY"
        );
        console.log(tglstart3);
        this.$set(this.detail, "tglstartoncamp3", tglstart3);
      } else {
        let tglstart3 = "-";
        this.$set(this.detail, "tglstartoncamp3", tglstart3);
      }

      if (this.detail.tglendoncamp3 != null) {
        let tglend3 = moment(this.detail.tglendoncamp3).format("DD MMM YYYY");
        this.$set(this.detail, "tglendoncamp3", tglend3);
      } else {
        let tglend3 = "-";
        this.$set(this.detail, "tglendoncamp3", tglend3);
      }
    });
  }
};
</script>