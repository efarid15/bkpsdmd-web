<template>
  <div class="container">
    <div class="title" style="padding-bottom: 0">Rundown Kegiatan</div>
    <full-calendar :events="fcEvents" locale="en" @eventClick="eventClick"></full-calendar>
    
    <a-modal
      title="Diklat Prajabatan Golongan I Angkatan X dan XI Tahun 2019 Makassar"
      v-model="visible"
      @ok="handleOk"
      centered
    >
      <div class="fs-16 cr-black">Rundown Kegiatan</div>
      <a-timeline :style="{ marginTop: '24px' }">
        <a-timeline-item>
          <div class="txt-day fs-14 cr-black">Hari ke 1</div>
          <div
            class="txt-desc fs-14 cr-gray"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sit non aliquam neque distinctio. Iure, adipisci consequatur voluptas, non nostrum fugit atque voluptatum odio distinctio aliquam mollitia vero sed id.</div>
        </a-timeline-item>
        <a-timeline-item>
          <div class="txt-day fs-14 cr-black">Hari ke 2</div>
          <div
            class="txt-desc fs-14 cr-gray"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sit non aliquam neque distinctio. Iure, adipisci consequatur voluptas, non nostrum fugit atque voluptatum odio distinctio aliquam mollitia vero sed id.</div>
        </a-timeline-item>
        <a-timeline-item>
          <div class="txt-day fs-14 cr-black">Hari ke 3</div>
          <div
            class="txt-desc fs-14 cr-gray"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sit non aliquam neque distinctio. Iure, adipisci consequatur voluptas, non nostrum fugit atque voluptatum odio distinctio aliquam mollitia vero sed id.</div>
        </a-timeline-item>
        <a-timeline-item>
          <div
            v-bind:class="visibleAdd ? 'd-none' : ''"
            class="txt-day fs-14 cr-black"
            @click="showAdd"
          >Tambah</div>
          <div v-show="visibleAdd">
            <a-textarea placeholder="Deskripsi Kegiatan" :rows="3" />
          </div>
        </a-timeline-item>
      </a-timeline>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: "submission",
  head() {
    return {
      title: "Buat Rundown Kegiatan - BKPSDMD"
    };
  },
  data() {
    return {
      visibleAdd: false,
      visible: false,
      fcEvents: [
        {
          title: "Diklat Prajabatan Golongan I Angkatan X dan XI Tahun 2019",
          start: "2019-09-10",
          end: "2019-09-11",
          cssClass: "eventred"
        },
        {
          title: "Diklat Prajabatan Golongan II Angkatan X dan XI Tahun 2019",
          start: "2019-09-10",
          end: "2019-09-12",
          cssClass: "eventblue"
        },
        {
          title: "Diklat Prajabatan Golongan III Angkatan X dan XI Tahun 2019",
          start: "2019-09-20",
          end: "2019-09-21",
          cssClass: "eventgreen"
        }
      ]
    };
  },
  methods: {
    eventClick() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
    },
    showAdd() {
      this.visibleAdd = !this.visibleAdd;
    }
  }
};
</script>