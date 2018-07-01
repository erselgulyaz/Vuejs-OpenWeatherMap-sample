<template>
  <div class="box-v1">
    <img :src=getWeatherImage class="box-media" />
    <h2 class="box-name">{{boxData.name}}</h2>
    <div class="box-highlighter">
      <span class="box-data">{{Math.ceil(boxData.main.temp)}} °C</span>
    </div>
    <div class="box-info">{{boxData.weather[0].description}}</div>
    <div class="box-action">
      <button-comp ButtonText="View 5 days" :ButtonLink=boxData.name />
    </div>
  </div><!-- /box-v1 -->
</template>

<script>
import ButtonComp from './ButtonComp.vue'

export default {
  props: {
    boxData : { type: Object, required: true }
  },
  components: {
    ButtonComp
  },
  computed: {
    getWeatherImage() {
      return `https://openweathermap.org/img/w/${this.boxData.weather[0].icon}.png`
    }
  }
}
</script>

<style lang="scss">
.box-v1 {
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,.3);
  display: block;
  position: relative;
  text-align: center;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.3);
  }
  >* {
    display: block;
  }
  .box-name {
    font-size: 16px;
    margin: 0;
    padding: 10px 5px;
  }
  .box-higlighter {
    display: inline-block;
    width: 100%;
  }
  .box-media {
    display: inline-block;
    filter: grayscale(50%);
    left: 10%;
    opacity: .2;
    position: absolute;
    top: 0;
    top: 10%;
    width: 80%;
    z-index: -1;
  }
  .box-data {
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
  }
  .box-info {
    font-size: 12px;
    font-weight: bold;
    padding: 10px;
  }
  .box-action {
    padding: 10px 0;
  }
}
</style>