<template>
  <div class="container">
    <div class="row row-spacer">
      <page-title :titleName=$route.params.name />
      <div class="column" v-for="item in this.cityDatas[0]" :key=item.dt>
        <box-v2 :boxData=item />
      </div>
      <action-row actionUrl="/" actionText="Geri Dön" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import BoxV2 from './BoxV2.vue'
import ActionRow from './ActionRow.vue'
import PageTitle from './PageTitle.vue'
export default {
  data() {
    return {
      appId: this.$store.getters.getAppId,
      country: this.$route.params.country,
      name: this.$route.params.name,
      cityDatas: []
    }
  },
  components: {
    BoxV2,
    ActionRow,
    PageTitle,
  },
  created() {
    const datas = this.cityDatas;
    this.firstTimeCall(datas,this.appId, this.country, this.name);
  },
  methods: {
    firstTimeCall: (datas, appId, country, name) => {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${name},${country}&appId=${appId}&units=metric`)
        .then(function (response) {
          datas.push(response.data.list)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  
}
</script>

<style lang="scss">
</style>