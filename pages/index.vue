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

      <div class="ant-items--body">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="20" :lg="20">
            <div class="heading">
              <div class="divider"></div>
              <h2>
                Jadwal Pelaksanaan Kegiatan Diklat 
                <br />Pemerintah Provinsi Sulawesi Selatan dan Kabupaten/Kota Se SulSel
                <br />Periode {{ bulanlalu }} - {{ bulanini }}
              </h2>
            </div>

            <a-table :columns="columns" :dataSource="live" :scroll="{ x: 980 }" rowKey="id">
              <span slot="jenisdiklat" slot-scope="text, record">
                <span>{{record.jenisdiklat}}</span> <span>Angkatan {{record.namaangkatan}}</span>
              </span>
              <span slot="tglmulai" slot-scope="text, record">
                <span>{{moment(record.tglmulai, "YYYY-MM-DD").format('ddd')}}, {{moment(record.tglmulai, "YYYY-MM-DD").format('ll')}}</span>
              </span>
              <span slot="tglberakhir" slot-scope="text, record">
                <span>{{moment(record.tglberakhir, "YYYY-MM-DD").format('ddd')}}, {{moment(record.tglberakhir, "YYYY-MM-DD").format('ll')}}</span>
              </span>
              <span slot="namakampus" slot-scope="text, record">
                <span>BPSDM {{record.namakampus}}</span>
              </span>
            </a-table>
          </a-col>
        </a-row>
      </div>

      <div class="ant-items--body">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="20" :lg="20">
            <div class="heading">
              <div class="divider"></div>
              <h2>
                Tempat Kegiatan
                <strong>Campus I</strong>
              </h2>
            </div>

            <div class="items-images">
              <a-row :gutter="8">
                <a-col :xs="24" :sm="24" :md="8">
                  <a-row>
                    <a-col :span="24">
                      <div class="items-images-small">
                        <div class="items-cover" style="backgroundImage: url('/campus/1/1.JPG')"></div>
                      </div>
                    </a-col>
                    <a-col :span="24">
                      <div class="items-images-small">
                        <div class="items-cover" style="backgroundImage: url('/campus/1/2.JPG')"></div>
                      </div>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col :xs="24" :sm="24" :md="8">
                  <div class="items-images-large">
                    <div class="items-cover" style="backgroundImage: url('/campus/1/C1.JPG')"></div>
                  </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="8">
                  <a-row>
                    <a-col :span="24">
                      <div class="items-images-small">
                        <div class="items-cover" style="backgroundImage: url('/campus/1/3.JPG')"></div>
                      </div>
                    </a-col>
                    <a-col :span="24">
                      <div class="items-images-small">
                        <div class="items-cover" style="backgroundImage: url('/campus/1/4.JPG')"></div>
                      </div>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
              <a-row :gutter="8">
                <a-col :xs="24" :sm="24" :md="8">
                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/1/5.JPG')"></div>
                  </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="8">
                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/1/C2.JPG')"></div>
                  </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="8">
                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/1/6.JPG')"></div>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </div>

      <div class="banners">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="20" :lg="20">
            <h2>Sukseskan Kegiatan Mu Dengan Fasilitas dan Pelayanan Terbaik</h2>
            <a-button size="large">
              <nuxt-link to="/login">
                Buat Pengajuan Sekarang
                <a-icon type="right" />
              </nuxt-link>
            </a-button>
          </a-col>
        </a-row>
      </div>

      <div class="ant-items--body">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="20" :lg="20">
            <div class="heading">
              <div class="divider"></div>
              <h2>
                Tempat Kegiatan
                <strong>Campus II</strong>
              </h2>
            </div>

            <div class="items-images">
              <a-row :gutter="8">
                <a-col :xs="24" :sm="24" :md="16">
                  <div class="items-images-large">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/C1.JPG')"></div>
                  </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="8">
                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/1.JPG')"></div>
                  </div>

                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/2.JPG')"></div>
                  </div>
                </a-col>
              </a-row>

              <a-row :gutter="8">
                <a-col :xs="24" :sm="24" :md="8">
                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/3.JPG')"></div>
                  </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="8">
                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/4.JPG')"></div>
                  </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="8">
                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/5.JPG')"></div>
                  </div>
                </a-col>
              </a-row>

              <a-row :gutter="8">
                <a-col :xs="24" :sm="24" :md="8">
                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/C2.JPG')"></div>
                  </div>

                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/6.JPG')"></div>
                  </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="16">
                  <div class="items-images-large">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/7.JPG')"></div>
                  </div>
                </a-col>
              </a-row>

              <a-row :gutter="8">
                <a-col :xs="24" :sm="24" :md="16">
                  <div class="items-images-large">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/8.JPG')"></div>
                  </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="8">
                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/9.JPG')"></div>
                  </div>

                  <div class="items-images-small">
                    <div class="items-cover" style="backgroundImage: url('/campus/2/10.JPG')"></div>
                  </div>
                </a-col>
              </a-row>
            </div>
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
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "BKD Kab/Kota",
    dataIndex: "namabkd",
    key: "namabkd"
  },
  {
    title: "Nama Kegiatan / Angkatan",
    dataIndex: "jenisdiklat",
    key: "jenisdiklat",
    scopedSlots: { customRender: "jenisdiklat" }
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

const latsar = [
  {
    provinsi: "Kab. Bulukumba",
    nama: "Latsar",
    angkatan: "28",
    pembukaan: "2019-08-01",
    penutupan: "2019-09-30",
    tempat: "BPSDM",
    campus: "Kampus 1"
  }
  
];
export default {
  name: "onepages",
  layout: "login",
  data() {
    return {
      live: [],
      latsar,
      columns,
      bulanini: "",
      bulanlalu: "",
    };
  },
  mounted(){
     this.$store.dispatch('pengajuan/livepengajuanfetch').then( ({ data }) => {
      this.live = data.values
      this.$store.commit('pengajuan/set', data.values)
         this.bulanlalu = moment().subtract(3, 'months').endOf('month').format('MMMM')
         this.bulanini = moment().format('MMMM YYYY')
         
    })

  },
  methods: {
    moment
  }
};
</script>