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

      <div class="ant-items--body">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="20" :lg="20">
            <div class="heading">
              <div class="divider"></div>
              <h2>
                Jadwal Pelaksanaan Pelatihan Dasar (Latsar)
                <br />Pemerintah Provinsi Sulawesi Selatan dan Kabupaten/Kota Se SulSel Periode Agustus Sampai Dengan Oktober 2019
              </h2>
            </div>

            <a-list
              :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }"
              :pagination="pagination"
              :dataSource="data"
            >
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a-card hoverable>
                  <a-list-item-meta>
                    <div slot="title" class="fs-15 cr-black mb-4">{{item.title}}</div>
                    <div slot="description">
                      <div class="d-flex align-items-center mb-4">
                        <div class="mr4">
                          <a-icon type="calendar" />
                        </div>
                        <div>
                          <span>{{moment(item.dateStart, "YYYY-MM-DD").format('ddd')}}, {{moment(item.dateStart, "YYYY-MM-DD").format('ll')}}</span> -
                          <span>{{moment(item.dateEnd, "YYYY-MM-DD").format('ddd')}}, {{moment(item.dateEnd, "YYYY-MM-DD").format('ll')}}</span>
                        </div>
                      </div>

                      <div class="d-flex align-items-center">
                        <div class="mr4">
                          <a-icon type="environment" />
                        </div>
                        <div>{{item.place}}</div>
                      </div>
                    </div>
                    <a-avatar
                      style="backgroundColor:#4481eb"
                      slot="avatar"
                      icon="bulb"
                    />
                  </a-list-item-meta>
                </a-card>
              </a-list-item>
            </a-list>
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
const data = [
  {
    title: "Latsar Kab. Bulukumba, Angkatan 28",
    dateStart: "2019-08-01",
    dateEnd: "2019-09-30",
    place: "BPSDM (Kampus 1)"
  },
  {
    title: "Latsar Kab. Bulukumba, Angkatan 29",
    dateStart: "2019-08-01",
    dateEnd: "2019-09-30",
    place: "BPSDM (Kampus 1)"
  },

  {
    title: "Latsar BPSDM Prov. Sul Sel, Angkatan 33",
    dateStart: "2019-08-05",
    dateEnd: "2019-10-04",
    place: "BPSDM (Kampus 2)"
  },
  {
    title: "Latsar BPSDM Prov. Sul Sel, Angkatan 37",
    dateStart: "2019-08-06",
    dateEnd: "2019-10-07",
    place: "BPSDM (Kampus 1)"
  },
  {
    title: "Latsar BPSDM Prov. Sul Sel, Angkatan 46",
    dateStart: "2019-08-28",
    dateEnd: "2019-10-25",
    place: "BPSDM (Kampus 2)"
  },
  {
    title: "Latsar BPSDM Prov. Sul Sel, Angkatan 47",
    dateStart: "2019-08-28",
    dateEnd: "2019-10-25",
    place: "BPSDM (Kampus 2)"
  },
  {
    title: "Latsar BPSDM Prov. Sul Sel, Angkatan 48",
    dateStart: "2019-08-28",
    dateEnd: "2019-10-25",
    place: "BPSDM (Kampus 2)"
  },
  {
    title: "Latsar BPSDM Prov. Sul Sel, Angkatan 84",
    dateStart: "2019-10-07",
    dateEnd: "2019-12-02",
    place: "BPSDM (Kampus 1)"
  },
  {
    title: "Latsar BPSDM Prov. Sul Sel, Angkatan 85",
    dateStart: "2019-10-07",
    dateEnd: "2019-12-02",
    place: "BPSDM (Kampus 1)"
  },
  {
    title: "Latsar BPSDM Prov. Sul Sel, Angkatan 86",
    dateStart: "2019-10-10",
    dateEnd: "2019-12-09",
    place: "BPSDM (Kampus 2)"
  },

  {
    title: "Latsar Kab. Pinrang, Angkatan 30",
    dateStart: "2019-08-01",
    dateEnd: "2019-10-02",
    place: "Kab. Pinrang"
  },
  {
    title: "Latsar Kab. Pinrang, Angkatan 31",
    dateStart: "2019-08-01",
    dateEnd: "2019-10-02",
    place: "Kab. Pinrang"
  },
  {
    title: "Latsar Kab. Pinrang, Angkatan 32",
    dateStart: "2019-08-01",
    dateEnd: "2019-10-02",
    place: "Kab. Pinrang"
  },
  {
    title: "Latsar Kab. Pinrang, Angkatan 69",
    dateStart: "2019-09-23",
    dateEnd: "2019-11-20",
    place: "Kab. Pinrang"
  },
  {
    title: "Latsar Kab. Pinrang, Angkatan 70",
    dateStart: "2019-09-23",
    dateEnd: "2019-11-20",
    place: "Kab. Pinrang"
  }
];
export default {
  name: "onepages",
  layout: "login",
  data() {
    return {
      data,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 12
      }
    };
  },
  methods: {
    moment
  }
};
</script>