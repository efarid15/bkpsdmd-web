<template>
<div>
<a-button
      @click="$router.go(-1)"
      type="link"
      class="cr-gray"
      icon="arrow-left"
      style="margin-bottom: 8px"
    >Kembali</a-button>

    <div class="container">
        <div style="width: 100%">
          <img style="display: inline-block; width: 50%" :src="src"   />
      <!-- <client-only>
         <vuePdf style="display: inline-block; width: 100%" :src="src"></vuePdf>
      </client-only> -->
   </div>
    </div>

</div>
</template>

<script>

import axios from "axios";
import moment from "moment";

var vuePdf;
if (process.browser) {
  vuePdf = require('vue-pdf').default
}
export default { 
   
   components: {
      vuePdf
   },

   data() {
    return {
      data: [],
      detail: [],
      src: '',
    };
  },

  created(){
    let idpengajuan = this.$route.params.id;
    axios.get(`pengajuan/${idpengajuan}`).then(result => {
      this.detail = result.data.values[0];
      this.src = "/api/uploads/bkd/"+this.detail.filepengajuan
      console.log(this.src)
      
  
      
    });

  },


  
}
</script>