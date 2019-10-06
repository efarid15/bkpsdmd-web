<template>
  <div class="container">
    <div class="title p24">Kotak Saran</div>

    <a-list
      class="comment-list"
      itemLayout="horizontal"
      :dataSource="data"
       style="padding: 0 24px"
    >
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        <a-comment :author="item.author" :avatar="item.avatar">
          <div slot="content">
            {{item.content}}
            <div style="color:#9e9e9e;font-size:12px;margin-top:8px;">
              <a-tooltip :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                <span>{{item.datetime.fromNow()}}</span>
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
export default {
  name: "suggestion",
  head() {
    return {
      title: "Kotak Saran - SIPP BPSDM"
    };
  },
  
  data() {
    return {
      data: [
        {
          author: "Admin BKPSDM Gowa",
          avatar: "/logo-sulsel.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: moment().subtract(1, "days")
        },
        {
          author: "Admin BKPSDM Gowa",
          avatar: "/logo-sulsel.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: moment().subtract(2, "days")
        }
      ]
    };
  },

  methods: {
    moment
  }
};
</script>