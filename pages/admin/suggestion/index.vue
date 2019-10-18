<template>
  <div class="container">
    <div class="title p24">Kotak Saran</div>

    <a-list
      class="comment-list"
      itemLayout="horizontal"
      :pagination="pagination"
      :dataSource="kritik"
      style="padding: 0 24px 32px 24px"
    >
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        <a-comment :author="item.nama" :avatar="item.avatar">
          <div slot="content">
            <div>{{item.kritiksaran}}</div>
            <div style="color:#9e9e9e;font-size:12px;margin-top:8px;">
              <a-tooltip :title="item.tglposting">
                <span>{{ moment(item.tglposting, "YYYYMMDD").fromNow() }}</span>
              </a-tooltip>
            </div>
          </div>
        </a-comment>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";
moment.locale("id");
export default {
  name: "suggestion",
  middleware: "auth",
  head() {
    return {
      title: "Kotak Saran - SIPP BPSDM"
    };
  },

  data() {
    return {
      kritik: [],
      pagination: {
        onChange: page => {},
        pageSize: 10
      }
    };
  },

  mounted() {
    axios.get("kritik").then(result => {
      this.kritik = result.data.values;
      for (let index = 0; index < this.kritik.length; index++) {
        let tglevent = moment(this.kritik[index]["tglposting"]).format(
          "YYYYMMDD"
        );
        this.$set(this.kritik[index], "tglposting", tglevent);
      }
    });
  },

  methods: {
    moment
  }
};
</script>