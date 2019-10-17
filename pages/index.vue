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
                Jadwal Pelaksanaan Pelatihan Dasar (Latsar)
                <br />Pemerintah Provinsi Sulawesi Selatan dan Kabupaten/Kota Se SulSel
                <br />Periode Agustus Sampai Dengan Oktober 2019
              </h2>
            </div>

            <a-table :columns="columns" :dataSource="latsar" bordered :scroll="{ x: 980 }">
              <span slot="nama" slot-scope="text, record">
                <span>{{record.nama}}</span> <span>Angkatan {{record.angkatan}}</span>
              </span>
              <span slot="pembukaan" slot-scope="text, record">
                <span>{{moment(record.pembukaan, "YYYY-MM-DD").format('dddd')}}, {{moment(record.pembukaan, "YYYY-MM-DD").format('LL')}}</span>
              </span>
              <span slot="penutupan" slot-scope="text, record">
                <span>{{moment(record.penutupan, "YYYY-MM-DD").format('dddd')}}, {{moment(record.penutupan, "YYYY-MM-DD").format('LL')}}</span>
              </span>
              <span slot="tempat" slot-scope="text, record">
                <span>{{record.tempat}}</span> <span>{{record.campus}}</span>
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
    title: "No",
    dataIndex: "key",
    key: "key"
  },
  {
    title: "Provinsi dan Kab/Kota",
    dataIndex: "provinsi",
    key: "provinsi"
  },
  {
    title: "Nama Kegiatan",
    dataIndex: "nama",
    key: "nama",
    scopedSlots: { customRender: "nama" }
  },
  {
    title: "Tanggal Kegiatan",
    children: [
      {
        title: "Pembukaan",
        dataIndex: "pembukaan",
        key: "pembukaan",
        scopedSlots: { customRender: "pembukaan" }
      },
      {
        title: "Penutupan",
        dataIndex: "penutupan",
        key: "penutupan",
        scopedSlots: { customRender: "penutupan" }
      }
    ]
  },
  {
    title: "Tempat Pelaksanaan",
    dataIndex: "tempat",
    key: "tempat",
    scopedSlots: { customRender: "tempat" }
  }
];

const latsar = [
  {
    key: 1,
    provinsi: "Kab. Bulukumba",
    nama: "Latsar",
    angkatan: "28",
    pembukaan: "2019-08-01",
    penutupan: "2019-09-30",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 2,
    provinsi: "Kab. Bulukumba",
    nama: "Latsar",
    angkatan: "29",
    pembukaan: "2019-08-01",
    penutupan: "2019-09-30",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 3,
    provinsi: "BPSDM Prov. Sul Sel",
    nama: "Latsar",
    angkatan: "33",
    pembukaan: "2019-08-05",
    penutupan: "2019-10-04",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 4,
    provinsi: "BPSDM Prov. Sul Sel",
    nama: "Latsar",
    angkatan: "37",
    pembukaan: "2019-08-06",
    penutupan: "2019-10-07",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 5,
    provinsi: "BPSDM Prov. Sul Sel",
    nama: "Latsar",
    angkatan: "46",
    pembukaan: "2019-08-28",
    penutupan: "2019-10-25",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 6,
    provinsi: "BPSDM Prov. Sul Sel",
    nama: "Latsar",
    angkatan: "47",
    pembukaan: "2019-08-28",
    penutupan: "2019-10-25",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 7,
    provinsi: "BPSDM Prov. Sul Sel",
    nama: "Latsar",
    angkatan: "48",
    pembukaan: "2019-08-28",
    penutupan: "2019-10-25",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 8,
    provinsi: "BPSDM Prov. Sul Sel",
    nama: "Latsar",
    angkatan: "84",
    pembukaan: "2019-10-07",
    penutupan: "2019-12-02",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 9,
    provinsi: "BPSDM Prov. Sul Sel",
    nama: "Latsar",
    angkatan: "85",
    pembukaan: "2019-10-07",
    penutupan: "2019-12-02",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 10,
    provinsi: "BPSDM Prov. Sul Sel",
    nama: "Latsar",
    angkatan: "86",
    pembukaan: "2019-10-10",
    penutupan: "2019-12-09",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 11,
    provinsi: "Kab. Pinrang",
    nama: "Latsar",
    angkatan: "30",
    pembukaan: "2019-08-01",
    penutupan: "2019-10-02",
    tempat: "Kab. Pinrang",
    campus: ""
  },
  {
    key: 12,
    provinsi: "Kab. Pinrang",
    nama: "Latsar",
    angkatan: "31",
    pembukaan: "2019-08-01",
    penutupan: "2019-10-02",
    tempat: "Kab. Pinrang",
    campus: ""
  },
  {
    key: 13,
    provinsi: "Kab. Pinrang",
    nama: "Latsar",
    angkatan: "32",
    pembukaan: "2019-08-01",
    penutupan: "2019-10-02",
    tempat: "Kab. Pinrang",
    campus: ""
  },
  {
    key: 14,
    provinsi: "Kab. Pinrang",
    nama: "Latsar",
    angkatan: "69",
    pembukaan: "2019-09-23",
    penutupan: "2019-11-20",
    tempat: "Kab. Pinrang",
    campus: ""
  },
  {
    key: 15,
    provinsi: "Kab. Pinrang",
    nama: "Latsar",
    angkatan: "70",
    pembukaan: "2019-09-23",
    penutupan: "2019-11-20",
    tempat: "Kab. Pinrang",
    campus: ""
  },
  {
    key: 16,
    provinsi: "Kab. Enrekang",
    nama: "Latsar",
    angkatan: "34",
    pembukaan: "2019-08-05",
    penutupan: "2019-10-05",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 17,
    provinsi: "Kab. Enrekang",
    nama: "Latsar",
    angkatan: "35",
    pembukaan: "2019-08-05",
    penutupan: "2019-10-05",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 18,
    provinsi: "Kab. Enrekang",
    nama: "Latsar",
    angkatan: "36",
    pembukaan: "2019-08-05",
    penutupan: "2019-10-05",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 19,
    provinsi: "Kota Parepare",
    nama: "Latsar",
    angkatan: "38",
    pembukaan: "2019-08-22",
    penutupan: "2019-10-19",
    tempat: "Kota Parepare",
    campus: ""
  },
  {
    key: 20,
    provinsi: "Kota Parepare",
    nama: "Latsar",
    angkatan: "39",
    pembukaan: "2019-08-22",
    penutupan: "2019-10-19",
    tempat: "Kota Parepare",
    campus: ""
  },
  {
    key: 21,
    provinsi: "Kota Parepare",
    nama: "Latsar",
    angkatan: "40",
    pembukaan: "2019-08-22",
    penutupan: "2019-10-19",
    tempat: "Kota Parepare",
    campus: ""
  },
  {
    key: 22,
    provinsi: "Kota Parepare",
    nama: "Latsar",
    angkatan: "44",
    pembukaan: "2019-08-26",
    penutupan: "2019-10-29",
    tempat: "Kota Parepare",
    campus: ""
  },
  {
    key: 23,
    provinsi: "Kota Parepare",
    nama: "Latsar",
    angkatan: "45",
    pembukaan: "2019-08-26",
    penutupan: "2019-10-29",
    tempat: "Kota Parepare",
    campus: ""
  },
  {
    key: 24,
    provinsi: "Kab. Toraja Utara",
    nama: "Latsar",
    angkatan: "41",
    pembukaan: "2019-08-26",
    penutupan: "2019-10-23",
    tempat: "Kab. Toraja Utara",
    campus: ""
  },
  {
    key: 25,
    provinsi: "Kab. Toraja Utara",
    nama: "Latsar",
    angkatan: "42",
    pembukaan: "2019-08-26",
    penutupan: "2019-10-23",
    tempat: "Kab. Toraja Utara",
    campus: ""
  },
  {
    key: 26,
    provinsi: "Kab. Toraja Utara",
    nama: "Latsar",
    angkatan: "43",
    pembukaan: "2019-08-26",
    penutupan: "2019-10-23",
    tempat: "Kab. Toraja Utara",
    campus: ""
  },
  {
    key: 27,
    provinsi: "Kota Palopo",
    nama: "Latsar",
    angkatan: "49",
    pembukaan: "2019-09-02",
    penutupan: "2019-10-30",
    tempat: "Kota Palopo",
    campus: ""
  },
  {
    key: 28,
    provinsi: "Kota Palopo",
    nama: "Latsar",
    angkatan: "50",
    pembukaan: "2019-09-10",
    penutupan: "2019-11-07",
    tempat: "Kota Palopo",
    campus: ""
  },
  {
    key: 29,
    provinsi: "Kota Palopo",
    nama: "Latsar",
    angkatan: "51",
    pembukaan: "2019-09-23",
    penutupan: "2019-11-20",
    tempat: "Kota Palopo",
    campus: ""
  },
  {
    key: 30,
    provinsi: "Kota Palopo",
    nama: "Latsar",
    angkatan: "4 (K2)",
    pembukaan: "2019-09-02",
    penutupan: "2019-09-09",
    tempat: "Kota Palopo",
    campus: ""
  },
  {
    key: 31,
    provinsi: "Kab. Wajo",
    nama: "Latsar",
    angkatan: "52",
    pembukaan: "2019-09-09",
    penutupan: "2019-11-06",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 32,
    provinsi: "Kab. Wajo",
    nama: "Latsar",
    angkatan: "53",
    pembukaan: "2019-09-09",
    penutupan: "2019-11-06",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 33,
    provinsi: "Kab. Wajo",
    nama: "Latsar",
    angkatan: "54",
    pembukaan: "2019-09-09",
    penutupan: "2019-11-06",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 34,
    provinsi: "Kab. Wajo",
    nama: "Latsar",
    angkatan: "55",
    pembukaan: "2019-09-23",
    penutupan: "2019-11-21",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 35,
    provinsi: "Kab. Luwu",
    nama: "Latsar",
    angkatan: "58",
    pembukaan: "2019-09-11",
    penutupan: "2019-11-08",
    tempat: "Belopa Kab. Luwu",
    campus: ""
  },
  {
    key: 36,
    provinsi: "Kab. Luwu",
    nama: "Latsar",
    angkatan: "59",
    pembukaan: "2019-09-11",
    penutupan: "2019-11-08",
    tempat: "Belopa Kab. Luwu",
    campus: ""
  },
  {
    key: 37,
    provinsi: "Kab. Luwu",
    nama: "Latsar",
    angkatan: "60",
    pembukaan: "2019-09-11",
    penutupan: "2019-11-08",
    tempat: "Belopa Kab. Luwu",
    campus: ""
  },
  {
    key: 38,
    provinsi: "Kab. Bantaeng",
    nama: "Latsar",
    angkatan: "61",
    pembukaan: "2019-09-16",
    penutupan: "2019-11-14",
    tempat: "Kab. Bantaeng",
    campus: ""
  },
  {
    key: 39,
    provinsi: "Kab. Bantaeng",
    nama: "Latsar",
    angkatan: "62",
    pembukaan: "2019-09-16",
    penutupan: "2019-11-14",
    tempat: "Kab. Bantaeng",
    campus: ""
  },
  {
    key: 40,
    provinsi: "Kab. Bantaeng",
    nama: "Latsar",
    angkatan: "63",
    pembukaan: "2019-09-16",
    penutupan: "2019-11-14",
    tempat: "Kab. Bantaeng",
    campus: ""
  },
  {
    key: 41,
    provinsi: "Kab. Bone",
    nama: "Latsar",
    angkatan: "66",
    pembukaan: "2019-09-19",
    penutupan: "2019-11-16",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 42,
    provinsi: "Kab. Bone",
    nama: "Latsar",
    angkatan: "67",
    pembukaan: "2019-09-19",
    penutupan: "2019-11-16",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 43,
    provinsi: "Kab. Bone",
    nama: "Latsar",
    angkatan: "68",
    pembukaan: "2019-09-19",
    penutupan: "2019-11-16",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 44,
    provinsi: "Kab. Kep. Selayar",
    nama: "Latsar",
    angkatan: "71",
    pembukaan: "2019-10-07",
    penutupan: "2019-12-02",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 45,
    provinsi: "Kab. Kep. Selayar",
    nama: "Latsar",
    angkatan: "72",
    pembukaan: "2019-10-07",
    penutupan: "2019-12-02",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 46,
    provinsi: "Kab. Kep. Selayar",
    nama: "Latsar",
    angkatan: "73",
    pembukaan: "2019-10-07",
    penutupan: "2019-12-02",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 47,
    provinsi: "Kab. Kep. Selayar",
    nama: "Latsar",
    angkatan: "74",
    pembukaan: "2019-10-07",
    penutupan: "2019-12-02",
    tempat: "BPSDM",
    campus: "Kampus 1"
  },
  {
    key: 48,
    provinsi: "Kementrian Hukum dan HAM Prov. Sulawesi Utara",
    nama: "Latsar",
    angkatan: "75",
    pembukaan: "2019-10-10",
    penutupan: "2019-12-09",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 49,
    provinsi: "Kementrian Hukum dan HAM Prov. Sulawesi Utara",
    nama: "Latsar",
    angkatan: "76",
    pembukaan: "2019-10-10",
    penutupan: "2019-12-09",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 50,
    provinsi: "Kementrian Hukum dan HAM Prov. Sulawesi Utara",
    nama: "Latsar",
    angkatan: "77",
    pembukaan: "2019-10-10",
    penutupan: "2019-12-09",
    tempat: "BPSDM",
    campus: "Kampus 2"
  },
  {
    key: 51,
    provinsi: "Kementrian Hukum dan HAM Prov. Sulawesi Utara",
    nama: "Latsar",
    angkatan: "78",
    pembukaan: "2019-10-10",
    penutupan: "2019-12-09",
    tempat: "BPSDM",
    campus: "Kampus 2"
  }
];
export default {
  name: "onepages",
  layout: "login",
  data() {
    return {
      latsar,
      columns
    };
  },
  methods: {
    moment
  }
};
</script>