<template>
  <a-layout class="ant-layout--onepages">
    <a-layout-content>
      <div class="mD-header--room d-flex align-items-center">
        <div class="m-auto">
          <a-button type="primary" shape="circle" icon="close" size="large" />
          <h2>Fasilitas Kampus 1</h2>
        </div>
      </div>

      <div class="md-items--room">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="24" :lg="20">
            <a-row :gutter="16" class="ant-row--gutters">
              <a-col :xs="24" :sm="12" :md="6">
                <a-card :bordered="false">
                  <expandable-image slot="cover" src="/campus/2/6.JPG" />
                  <a-card-meta>
                    <template slot="title">
                      <h2>Sipakatau</h2>
                      <p>Gd. D Samping Lift</p>
                    </template>
                    <template slot="description">
                        <p>Luas <span>128,04</span> M2</p>
                        <p>Panjang <span>13,2</span></p>
                        <p>Lebar <span>9,7</span></p>
                        <p>Tinggi <span>3,35</span></p>
                        <p>Teather <span>80</span> Orang</p>
                        <p>Class Room <span>40</span> Orang</p>
                        <p>Round Table <span>40</span> Orang</p>
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col>
              <a-col :xs="24" :sm="12" :md="6">
                <a-card :bordered="false">
                  <expandable-image slot="cover" src="/campus/2/5.JPG" />
                  <a-card-meta>
                    <template slot="title">
                      <h2>Sipakalebbi</h2>
                      <p>Gd. C Samping Klinik</p>
                    </template>
                    <template slot="description">
                        <p>Luas <span>128,04</span> M2</p>
                        <p>Panjang <span>13,2</span></p>
                        <p>Lebar <span>9,7</span></p>
                        <p>Tinggi <span>3,35</span></p>
                        <p>Teather <span>80</span> Orang</p>
                        <p>Class Room <span>40</span> Orang</p>
                        <p>Round Table <span>40</span> Orang</p>
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col>
              <a-col :xs="24" :sm="12" :md="6">
                <a-card :bordered="false">
                  <expandable-image slot="cover" src="/campus/2/4.JPG" />
                  <a-card-meta>
                    <template slot="title">
                      <h2>Sipakainga</h2>
                      <p>Gd. C Belakang Resepsionis</p>
                    </template>
                    <template slot="description">
                        <p>Luas <span>128,04</span> M2</p>
                        <p>Panjang <span>13,2</span></p>
                        <p>Lebar <span>9,7</span></p>
                        <p>Tinggi <span>3,35</span></p>
                        <p>Teather <span>80</span> Orang</p>
                        <p>Class Room <span>40</span> Orang</p>
                        <p>Round Table <span>40</span> Orang</p>
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col>
              <a-col :xs="24" :sm="12" :md="6">
                <a-card :bordered="false">
                  <expandable-image slot="cover" src="/campus/2/3.JPG" />
                  <a-card-meta>
                    <template slot="title">
                      <h2>Sipakalila</h2>
                      <p>Gd. C Samping Sipakainga</p>
                    </template>
                    <template slot="description">
                        <p>Luas <span>128,04</span> M2</p>
                        <p>Panjang <span>13,2</span></p>
                        <p>Lebar <span>9,7</span></p>
                        <p>Tinggi <span>3,35</span></p>
                        <p>Teather <span>80</span> Orang</p>
                        <p>Class Room <span>40</span> Orang</p>
                        <p>Round Table <span>40</span> Orang</p>
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col>
            </a-row>
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
export default {
  name: "campus-1",
  layout: "login",
  data() {
    return {};
  },
  methods: {
    moment
  }
};
</script>