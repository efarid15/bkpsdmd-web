<template>
  <div>
    <a-button
      @click="$router.go(-1)"
      type="link"
      class="cr-gray"
      icon="arrow-left"
      style="margin-bottom: 8px"
    >Kembali</a-button>

    <div class="container" style="margin-bottom: 16px">
      <div style="padding: 24px">
        <div class="fs-16 cr-black" style="margin-bottom: 8px">Informasi Kegiatan</div>
        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jenis Kegiatan</div>
            <div
              class="fs-14 cr-black text-capitalize"
            >Diklat Prajabatan Golongan I Angkatan X dan XI Tahun 2019</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Jumlah Peserta</div>
            <div class="fs-14 cr-black text-capitalize">40 Orang</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Mulai</div>
            <div class="fs-14 cr-black text-capitalize">Senin, 20 Oktober 2019</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="5" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tanggal Berakhir</div>
            <div class="fs-14 cr-black text-capitalize">Senin, 20 Desember 2019</div>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Tempat Kegiatan</div>
            <div class="fs-14 cr-black text-capitalize">Campus I</div>
          </a-col>
          <a-col :xs="24" :sm="12" :md="4" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Ruangan</div>
            <div class="fs-14 cr-black text-capitalize">1B Lantai 1</div>
          </a-col>
          <a-col :xs="24" :sm="24" :md="10" style="margin-bottom: 16px">
            <div class="fs-12 cr-gray text-uppercase">Alamat</div>
            <div class="fs-14 cr-black text-capitalize">Jl. BTP Blok A No 537</div>
          </a-col>
        </a-row>

        <div>
          <nuxt-link to="/member/activities/detail" class="color-blue">
            Lihat Informasi Peserta
            <a-icon style="margin-left: 8px" type="right" />
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="title p24">Rundown Kegiatan</div>

      <div style="padding: 0 24px 24px 24px">
        <a-timeline>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 1</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Senin, 12 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 2</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Selasa, 13 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 3</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Rabu, 14 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 4</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Kamis, 15 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 5</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Jumat, 16 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
          <a-timeline-item>
            <div class="fw-500 cr-black">
              <span class="fs-15">Hari ke 6</span>
              <a-divider type="vertical"></a-divider>
              <span class="fs-14">Sabtu, 17 Januari 2020</span>
            </div>
            <div
              class="fs-14 fw-400 cr-black"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur explicabo ullam hic recusandae vel? Ab officia dolorem odio aperiam! Similique totam eos reprehenderit ipsa iure odio corporis molestiae illum!</div>
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rundown",
  layout: "member",
  head() {
    return {
      title: "Rundown Kegiatan"
    };
  },
  methods: {}
};
</script>