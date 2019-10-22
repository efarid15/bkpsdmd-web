<template>
  <a-layout class="ant-layout--onepages">
    <a-layout-content>
      <div class="mD-header--room d-flex align-items-center">
        <div class="m-auto">
          <a @click="$router.go(-1)">
            <a-button type="primary" shape="circle" icon="close" size="large" />
          </a>
          <h2>Fasilitas Kampus II BPSDM</h2>
        </div>
      </div>

      <div class="md-items--room">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="24" :sm="24" :md="20" :lg="16">
            <a-tabs defaultActiveKey="1" @change="callback">
              <a-tab-pane tab="Ruang Kelas" key="1">
                <a-list itemLayout="horizontal" size="large">
                  <a-list-item>
                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="8">
                        <div class="mD-room">
                          <expandable-image src="/campus/1/2.JPG" />
                        </div>
                      </a-col>
                      <a-col :xs="24" :sm="24" :md="16">
                        <div class="mD-room__information">
                          <div class="title">
                            <h2>Bantimurung</h2>
                            <div class="text">(Samping Ruang Kepala Badan)</div>
                          </div>

                          <div>
                            <span class="text">Panjang <strong>9,13</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar <strong>8,12</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi <strong>2,7</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas <strong>74,13</strong>M<small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">Theater <strong>50</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room <strong>50</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Round Table <strong>40</strong> Orang</span>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-list-item>

                  <a-list-item>
                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="8" class="float-right">
                        <div class="mD-room">
                          <expandable-image src="/campus/1/1.JPG" />
                        </div>
                      </a-col>
                      <a-col :xs="24" :sm="24" :md="16">
                        <div class="mD-room__information mD-room__information-right">
                          <div class="title">
                            <h2>Tanjung Bira</h2>
                            <div class="text">(Samping Ruang Sekretaris Badan)</div>
                          </div>

                          <div>
                            <span class="text">Panjang <strong>7,76</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar <strong>6,73</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi <strong>2,7</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas <strong>52,22</strong>M<small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">U-Shape <strong>20</strong> Orang</span>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-list-item>

                  <a-list-item>
                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="8">
                        <div class="mD-room">
                          <expandable-image src="/campus/1/7.JPG" />
                        </div>
                      </a-col>
                      <a-col :xs="24" :sm="24" :md="16">
                        <div class="mD-room__information">
                          <div class="title">
                            <h2>Malino</h2>
                            <div class="text">(Samping Ruang Widyaiswara)</div>
                          </div>

                          <div>
                            <span class="text">Panjang <strong>13,9</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar <strong>7,78</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi <strong>2,7</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas <strong>108,14</strong>M<small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">Theater <strong>80</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room <strong>80</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Round Table <strong>40</strong> Orang</span>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-list-item>

                  <a-list-item>
                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="8" class="float-right">
                        <div class="mD-room">
                          <expandable-image src="/campus/1/4.JPG" />
                        </div>
                      </a-col>
                      <a-col :xs="24" :sm="24" :md="16">
                        <div class="mD-room__information mD-room__information-right">
                          <div class="title">
                            <h2>Samalona</h2>
                            <div class="text">(Samping Pendopo)</div>
                          </div>

                          <div>
                            <span class="text">Panjang <strong>10</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar <strong>6,7</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi <strong>2,7</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas <strong>67</strong>M<small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">Theater <strong>50</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room <strong>50</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Round Table <strong>40</strong> Orang</span>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-list-item>

                  <a-list-item>
                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="8">
                        <div class="mD-room">
                          <expandable-image src="/campus/1/4.JPG" />
                        </div>
                      </a-col>
                      <a-col :xs="24" :sm="24" :md="16">
                        <div class="mD-room__information">
                          <div class="title">
                            <h2>Taka Bonerate</h2>
                            <div class="text">(Samping Pendopo)</div>
                          </div>

                          <div>
                            <span class="text">Panjang <strong>10</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar <strong>6,7</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi <strong>2,7</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas <strong>67</strong>M<small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">Theater <strong>50</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room <strong>50</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Round Table <strong>40</strong> Orang</span>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-list-item>
                </a-list>
              </a-tab-pane>

              <a-tab-pane tab="Ruang Makan" key="2">
                <a-list itemLayout="horizontal" size="large">
                  <a-list-item>
                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="8">
                        <div class="mD-room">
                          <expandable-image
                            src="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                          />
                        </div>
                      </a-col>
                      <a-col :xs="24" :sm="24" :md="16">
                        <div class="mD-room__information">
                          <div class="title">
                            <h2>Ruang Makan Utama</h2>
                          </div>

                          <div>
                            <span class="text">Panjang <strong>36</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar <strong>10</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi <strong>3,48</strong>m</span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">
                              Luas <strong>360</strong> M<small>2</small>
                            </span>
                            <a-divider type="vertical" />
                            <span class="text">Kapasitas 160 Orang</span>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-list-item>
                </a-list>
              </a-tab-pane>

              <a-tab-pane tab="Ruang Belajar" key="3">
                <a-empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  style="padding: 40px 0"
                >
                  <span slot="description" style="font-size: 13px;color: #9e9e9e;margin-top: 24px">
                    Maaf, Data <strong>Ruang Kelas</strong> tidak ditemukan
                  </span>
                </a-empty>
              </a-tab-pane>

              <a-tab-pane tab="Ruang Aula" key="4">
                <a-list itemLayout="horizontal" size="large">
                  <a-list-item>
                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="8">
                        <div class="mD-room">
                          <expandable-image
                            src="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                          />
                        </div>
                      </a-col>
                      <a-col :xs="24" :sm="24" :md="16">
                        <div class="mD-room__information">
                          <div class="title">
                            <h2>Ruang Aula Utama</h2>
                          </div>

                          <div>
                            <span class="text">Panjang <strong>24,86</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar <strong>9,73</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi <strong>3,4</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas <strong>241,88</strong>M<small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">Theater <strong>200</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room <strong>150</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room <strong>120</strong> Orang</span>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-list-item>
                </a-list>
              </a-tab-pane>
            </a-tabs>
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
    moment,
    callback(key) {}
  }
};
</script>