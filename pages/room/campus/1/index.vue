<template>
  <a-layout class="ant-layout--onepages">
    <a-layout-content>
      <div class="mD-header--room d-flex align-items-center">
        <div class="m-auto">
          <a @click="$router.go(-1)">
            <a-button type="primary" shape="circle" icon="close" size="large" />
          </a>
          <h2>Fasilitas Kampus I BPSDM</h2>
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
                            <h2>Ruang Sipakatau</h2>
                            <div class="text">(Gd. D Samping Lift)</div>
                          </div>

                          <div>
                            <span class="text">Panjang 13,2</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar 9,7</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi 3,35</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas 128,04 M
                              <small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">Theater 80 Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room 40 Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Round Table 40 Orang</span>
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
                            <h2>Ruang Sipakalebbi</h2>
                            <div class="text">(Gd. C Samping Klinik)</div>
                          </div>

                          <div>
                            <span class="text">Panjang 15</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar 6</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi 2,8</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas 90 M
                              <small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">Theater 70 Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room 40 Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Round Table 40 Orang</span>
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
                            <h2>Ruang Sipakainga'</h2>
                            <div class="text">(Gd. C Belakang Resepsionis)</div>
                          </div>

                          <div>
                            <span class="text">Panjang 10,8</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar 6</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi 2,8</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas 64,8 M
                              <small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">Theater 50 Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room 40 Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Round Table 40 Orang</span>
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
                            <h2>Ruang Sipakalila</h2>
                            <div class="text">(Gd. C Samping Sipakainga')</div>
                          </div>

                          <div>
                            <span class="text">Panjang 10,8</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar 6</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi 2,8</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas 64,8 M
                              <small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">Theater 50 Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room 40 Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Round Table 40 Orang</span>
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
                            <span class="text">Panjang 21,6</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar 6</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi 2,6</span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">
                              Luas 129,6 M
                              <small>2</small>
                            </span>
                            <a-divider type="vertical" />
                            <span class="text">Kapasitas 100 Orang</span>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-list-item>

                  <a-list-item>
                    <a-row :gutter="16">
                      <a-col :xs="24" :sm="24" :md="8" class="float-right">
                        <div class="mD-room">
                          <expandable-image
                            src="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                          />
                        </div>
                      </a-col>
                      <a-col :xs="24" :sm="24" :md="16">
                        <div class="mD-room__information mD-room__information-right">
                          <div class="title">
                            <h2>Ruang Makan VIP I</h2>
                          </div>

                          <div>
                            <span class="text">Panjang 8,4</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar 6</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi 2,6</span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">
                              Luas 60,4 M
                              <small>2</small>
                            </span>
                            <a-divider type="vertical" />
                            <span class="text">Kapasitas 40 Orang</span>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-list-item>

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
                            <h2>Ruang Makan VIP II</h2>
                          </div>

                          <div>
                            <span class="text">Panjang 7,2</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar 6</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi 2,6</span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">
                              Luas 43,2 M
                              <small>2</small>
                            </span>
                            <a-divider type="vertical" />
                            <span class="text">Kapasitas 40 Orang</span>
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
                            <span class="text">Panjang <strong>22</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Lebar <strong>15</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">Tinggi <strong>8</strong>m</span>
                            <a-divider type="vertical" />
                            <span class="text">
                              Luas <strong>330</strong>M<small>2</small>
                            </span>
                          </div>

                          <a-divider style="margin: 12px 0" />

                          <div>
                            <span class="text">Theater <strong>350</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room <strong>150</strong> Orang</span>
                            <a-divider type="vertical" />
                            <span class="text">Class Room <strong>130</strong> Orang</span>
                          </div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-list-item>
                </a-list>
              </a-tab-pane>

              <a-tab-pane tab="Ruang Fitness" key="5">
                <a-empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  style="padding: 40px 0"
                >
                  <span slot="description" style="font-size: 13px;color: #9e9e9e;margin-top: 24px">
                    Maaf, Data <strong>Ruang Fitness</strong> tidak ditemukan
                  </span>
                </a-empty>
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