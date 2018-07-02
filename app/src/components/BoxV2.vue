<template>
  <div class="box-v2">
    <div class="box-icon">
      <img :src=getWeatherImage class="box-media" />
    </div>
    <div class="box-date">{{this.dateFormat}} <span class="sub-info">{{this.timeFormat}}</span></div>
    <div class="box-highlighter">{{Math.ceil(boxData.main.temp)}} °C</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fullDate: this.boxData.dt_txt,
        dateFormat: ((this.boxData.dt_txt).split(" ")[0]).replace(/-/g, ' '),
        timeFormat:  ((this.boxData.dt_txt).split(" ")[1]).slice(0,5),
      }
    },
    props: {
      boxData: { type: Object, required: true }
    },
    computed: {
      getWeatherImage() {
        return `https://openweathermap.org/img/w/${this.boxData.weather[0].icon}.png`
      }
    }
  }
</script>

<style lang="scss">
.box-v2 {
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,.3);
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  overflow: hidden;
  padding: 10px 20px;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.3);
  }
  .box-icon{
    height: 100%;
    padding: 0 10px;
    position: absolute;
    right: 0;
    top: 0;
    >* {
      height: 60px;
      margin-top: 15px;
      opacity: .5;
    }
  }
  .box-date{
    color: #424242;
    font-size: 22px;
    .sub-info {
      background-color: rgba(0,0,0,.3);
      color: #ffffff;
      font-size: 18px;
      padding: 3px 10px;
    }
  }
  .box-highlighter{
    color: #212121;
    font-size: 30px;
    margin-top: 10px;
  }
}
</style>