<template>
  <a-layout class="ant-layout--onepages">
    <a-layout-content>
      <div class="ant-carousel--slide">
        <a-carousel vertical effect="fade">
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
          <div class="title">SIPP BPSDM</div>
          <div class="subtitle">Badan Pengembangan Sumber Daya Manusia Provinsi Sulawesi Selatan</div>
          <a-button size="large">
            <nuxt-link to="/login">
              Masuk ke Dashboard
              <a-icon type="right" />
            </nuxt-link>
          </a-button>
        </div>
      </div>

      <div class="mD-card__room">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="20" :lg="20">
            <a-row :gutter="16">
              <a-col :xs="24" :sm="12" :md="12">
                <nuxt-link to="/room/campus/1">
                  <a-card hoverable :bordered="false">
                    <template slot="cover">
                      <div
                        class="mD-cover__room mD-cover__room-1"
                        style="backgroundImage: url('/campus/1/kampus.JPG')"
                      >
                        <div class="mD-cover__room-caption d-flex align-items-center">
                          <div class="items">
                            <h2>Campus I BPSDM</h2>
                            <a-breadcrumb separator="|">
                              <a-breadcrumb-item>Ruang Kelas</a-breadcrumb-item>
                              <a-breadcrumb-item>Ruang Makan</a-breadcrumb-item>
                              <a-breadcrumb-item>Ruang Belajar</a-breadcrumb-item>
                              <a-breadcrumb-item>Ruang Aula</a-breadcrumb-item>
                              <a-breadcrumb-item>Ruang Fitness</a-breadcrumb-item>
                            </a-breadcrumb>
                            <a-button>
                              <nuxt-link to="/room/campus/1">Lihat Detail</nuxt-link>
                            </a-button>
                          </div>
                        </div>
                      </div>
                    </template>
                  </a-card>
                </nuxt-link>
              </a-col>
              <a-col :xs="24" :sm="12" :md="12">
                <nuxt-link to="/room/campus/2">
                  <a-card hoverable :bordered="false">
                    <template slot="cover">
                      <div
                        class="mD-cover__room mD-cover__room-2"
                        style="backgroundImage: url('/campus/2/kampus22.JPG')"
                      >
                        <div class="mD-cover__room-caption d-flex align-items-center">
                          <div class="items">
                            <h2>Campus II BPSDM</h2>
                            <a-breadcrumb separator="|">
                              <a-breadcrumb-item>Ruang Kelas</a-breadcrumb-item>
                              <a-breadcrumb-item>Ruang Makan</a-breadcrumb-item>
                              <a-breadcrumb-item>Ruang Belajar</a-breadcrumb-item>
                              <a-breadcrumb-item>Ruang Aula</a-breadcrumb-item>
                            </a-breadcrumb>
                            <a-button>
                              <nuxt-link to="/room/campus/2">Lihat Detail</nuxt-link>
                            </a-button>
                          </div>
                        </div>
                      </div>
                    </template>
                  </a-card>
                </nuxt-link>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>

      <div class="ant-items--body">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="20" :lg="20">
            <div class="heading">
              <div class="divider"></div>
              <h2>
                Jadwal Pelaksanaan Kegiatan Diklat
                <br />Pemerintah Provinsi Sulawesi Selatan dan Kabupaten/Kota Se SulSel
                <br />
                Periode {{ bulanlalu }} - {{ bulanini }}
              </h2>
            </div>
            <a-card class="ant-card__schedule" :bordered="false">
              <div>
                <strong>Status :</strong>
                <div v-if="$nuxt.isOnline">
                  <a-badge status="success" text="Online" />
                </div>
                <div v-else>
                  <a-badge status="error" text="Offline" />
                </div>
              </div>
              <br />

              <a-table
                :columns="columns"
                :dataSource="live"
                class="ant-table__schedule components-table-demo-nested"
                rowKey="id"
                @expand="show"
                @expandIcon="customExpandIcon(props)"
              >
                <span slot="tglmulai" slot-scope="text, record">
                  <span>{{moment(record.tglmulai, "YYYY-MM-DD").format('ddd')}}, {{moment(record.tglmulai, "YYYY-MM-DD").format('ll')}}</span>
                </span>
                <span slot="tglberakhir" slot-scope="text, record">
                  <span>{{moment(record.tglberakhir, "YYYY-MM-DD").format('ddd')}}, {{moment(record.tglberakhir, "YYYY-MM-DD").format('ll')}}</span>
                </span>
                <span slot="namakampus" slot-scope="text, record">
                  <span>BPSDM {{record.namakampus}}</span>
                </span>

                <a-table
                  slot="expandedRowRender"
                  slot-scope="text, record"
                  :columns="rKolom"
                  :dataSource="rData"
                  :pagination="false"
                  rowKey="id"
                >
                  <span slot="hari" slot-scope="text, record">
                    <span>{{moment(record.hari, "YYYY-MM-DD").format('ddd')}}, {{moment(record.hari, "YYYY-MM-DD").format('ll')}}</span>
                  </span>
                  <span slot="jam" slot-scope="text, record">
                    <span v-if="record.jam != null">{{moment(record.jam, "HH:mm").format('HH:mm')}}</span>
                    <span v-else>--</span>
                  </span>
                  <span slot="deskripsi" slot-scope="text, record">
                    <span class="text-capitalize">{{ record.deskripsi }}</span>
                  </span>
                </a-table>
              </a-table>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer>
      <span>&copy; 2019 SIPP BPSDM</span>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import moment from "moment";
import axios from "axios";
const columns = [
  {
    title: "BKD Kab/Kota",
    dataIndex: "namabkd",
    key: "namabkd"
  },
  {
    title: "Nama Kegiatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat"
  },
  {
    title: "Angkatan",
    dataIndex: "namaangkatan",
    key: "namaangkatan"
  },
  {
    title: "Tanggal Kegiatan",
    children: [
      {
        title: "Pembukaan",
        dataIndex: "tglmulai",
        key: "tglmulai",
        scopedSlots: { customRender: "tglmulai" }
      },
      {
        title: "Penutupan",
        dataIndex: "tglberakhir",
        key: "tglberakhir",
        scopedSlots: { customRender: "tglberakhir" }
      }
    ]
  },
  {
    title: "Tempat Pelaksanaan",
    dataIndex: "namakampus",
    key: "namakampus",
    scopedSlots: { customRender: "namakampus" }
  }
];

const rKolom = [
  {
    title: "Tgl Kegiatan",
    dataIndex: "hari",
    key: "hari",
    scopedSlots: { customRender: "hari" }
  },
  {
    title: "Waktu / Jam",
    dataIndex: "jam",
    key: "jam",
    scopedSlots: { customRender: "jam" }
  },
  {
    title: "Kegiatan / Materi",
    dataIndex: "deskripsi",
    key: "deksripsi",
    scopedSlots: { customRender: "deskripsi" }
  },
  { title: "Widyaiswara / Fasilitator", dataIndex: "nama", key: "nama" }
];

export default {
  name: "onepages",
  layout: "login",
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.meta.description
        },
        { hid: "og:type", property: "og:type", content: this.meta.type },
        { hid: "og:title", property: "og:title", content: this.meta.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.meta.description
        },
        { hid: "og:url", property: "og:url", content: this.meta.url },
        { hid: "og:image", property: "og:image", content: this.meta.image }
      ]
    };
  },
  data() {
    return {
      data: [],
      live: [],
      rData: [],
      child: [],
      rKolom,
      columns,
      bulanini: "",
      bulanlalu: "",
      meta: {
        title: "SIPP BPSDM - Badan Pengembangan Sumber Daya Manusia",
        description:
          "Situs Resmi Badan Pengembangan Sumber Daya Manusia Pemerintah Provinsi Sulawesi Selatan",
        type: "Beranda",
        url: "https://sipp-bpsdm.sulselprov.go.id",
        image: "https://sipp-bpsdm.sulselprov.go.id/campus/1/kampus.JPG"
      }
    };
  },
  mounted() {
    this.$store.dispatch("pengajuan/livepengajuanfetch").then(({ data }) => {
      this.live = data.values;
      this.$store.commit("pengajuan/set", data.values);
      this.bulanlalu = moment()
        .subtract(3, "months")
        .endOf("month")
        .format("MMMM");
      this.bulanini = moment().format("MMMM YYYY");
    });
  },
  methods: {
    moment,
    show(row, index) {
      if (row === true) {
        let idpengajuan = index.id;
        axios.get(`rundown/${idpengajuan}`).then(res => {
          this.rData = res.data.values;
        });
      } else {
        this.rData = [];
      }
    },

    customExpandIcon(props) {
      console.log(props);
      if (props.expanded) {
        return (
          <a
            style={{ color: "black" }}
            onClick={e => {
              props.onExpand(props.record, e);
            }}
          >
            <Icon type="minus-circle" />
          </a>
        );
      } else {
        return (
          <a
            style={{ color: "black" }}
            onClick={e => {
              props.onExpand(props.record, e);
            }}
          >
            <Icon type="plus-circle" />
          </a>
        );
      }
    }
  }
};
</script>