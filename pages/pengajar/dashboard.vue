<template>
  <a-row :gutter="16">
    <a-col :xs="24" :sm="12" :md="8" :style="{ marginBottom: '16px' }">
      <div class="container">
        <a-card :bordered="false">
          <div class="d-flex align-items-center">
            <div :style="{ marginRight: '16px' }">
              <a-avatar style="backgroundColor: #1e90ff" size="large" icon="reconciliation" />
            </div>
            <div>
              <div class="fs-14">Jumlah Kegiatan</div>
              <div class="fs-18">350</div>
            </div>
          </div>
        </a-card>
      </div>
    </a-col>

    <a-col :xs="24" :sm="12" :md="8" :style="{ marginBottom: '16px' }">
      <div class="container">
        <a-card :bordered="false">
          <div class="d-flex align-items-center">
            <div :style="{ marginRight: '16px' }">
              <a-avatar style="backgroundColor: #2ed573" size="large" icon="schedule" />
            </div>
            <div>
              <div class="fs-14">Jumlah Kegiatan Di Setujui</div>
              <div class="fs-18">280</div>
            </div>
          </div>
        </a-card>
      </div>
    </a-col>

    <a-col :xs="24" :sm="12" :md="8" :style="{ marginBottom: '16px' }">
      <div class="container">
        <a-card :bordered="false">
          <div class="d-flex align-items-center">
            <div :style="{ marginRight: '16px' }">
              <a-avatar style="backgroundColor: #ff4757" size="large" icon="disconnect" />
            </div>
            <div>
              <div class="fs-14">Jumlah Kegiatan Di Tolak</div>
              <div class="fs-18">70</div>
            </div>
          </div>
        </a-card>
      </div>
    </a-col>
  </a-row>
</template>
<script>
export default {
  name: "dashboard",
  layout: "pengajar",
  head() {
    return {
      title: "Dashboard Badan Kepegawaian Dan Sumber Daya Manusia Daerah Kota Makassar - BKPSDMD"
    };
  }
};
</script>