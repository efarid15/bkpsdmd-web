<template>
  <div class="container">
    <a-row
      :gutter="16"
      type="flex"
      justify="space-around"
      align="middle"
      class="p24"
    >
      <a-col :xs="12" :sm="12" :md="12">
        <div class="title">Daftar Saran</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" class="text-right">
        <a-button type="primary" icon="plus" @click="showSuggestion">Kirim Saran</a-button>
      </a-col>
    </a-row>

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

    <!-- show send suggestion -->
    <a-modal title="Kirimkan Saran Anda!" :visible="visibleSuggestion" @ok="handleOk">
      <a-form layout="vertical" :form="form" hideRequiredMark>
        <a-form-item label="Judul Saran" has-feedback>
          <a-input v-decorator="['title',{rules: [{ required: true, message: 'Harus di isi!' }]}]" />
        </a-form-item>

        <a-form-item label="Keterangan">
          <a-textarea
            :rows="4"
            v-decorator="['desc',{rules: [{ required: true, message: 'Harus di isi!' }]}]"
          />
        </a-form-item>
      </a-form>

      <template slot="footer">
        <a-button key="back" @click="handleCancel">Kembali</a-button>
        <a-button key="submit" type="primary" :loading="confirmLoading" @click="handleOk">Kirim</a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";
export default {
  name: "suggestion",
  layout: "bkd",
  head() {
    return {
      title: "Kotak Saran - BKD"
    };
  },
  data() {
    return {
      visibleSuggestion: false,
      confirmLoading: false,
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

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },

  methods: {
    moment,
    showSuggestion() {
      this.visibleSuggestion = true;
    },
    handleOk(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.confirmLoading = true;
          setTimeout(() => {
            this.visibleSuggestion = false;
            this.confirmLoading = false;
          }, 2000);
        }
      });
    },
    handleCancel(e) {
      this.visibleSuggestion = false;
    }
  }
};
</script>