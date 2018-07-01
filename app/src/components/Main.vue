<template>
  <div class="container">
    <div class="row row-spacer column-wrap">
      <div class="column" v-for="item in this.cityDatas" :key=item.id>
        <box-v1 :boxData=item />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import BoxV1 from './BoxV1.vue'

export default {
  data () {
    return {
      appId: this.$store.getters.getAppId,
      cities: this.$store.getters.getCities,
      cityDatas: [],
    }
  },
  components: {
    BoxV1
  },
  created() {
    const datas = this.cityDatas;
    this.firstTimeCall(datas, this.cities,this.appId);
  },
  methods: {
    firstTimeCall: (datas,cities,appId) => {
      Array.prototype.forEach.call(cities, city => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.countryCode}&appid=${appId}&units=metric`)
        .then(function (response) {
          datas.push(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    },
  }  
}
</script>

<style lang="scss">
@import './../assets/scss/app.scss'
</style>