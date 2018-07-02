<template>
  <div>
    <router-link :to=getDetailLink class="btn">{{ButtonText}}</router-link>
  </div>
</template>

<script>
  export default {
    props: {
      ButtonText : { type: String, required: true },
      ButtonCityName : { type: String },
      ButtonCityCountry : { type: String },
    },
    computed: {
      getDetailLink() {
        return `/5GunlukTahmin/${this.ButtonCityName}/${this.ButtonCityCountry}`
      }
    }
  }
</script>

<style lang="scss">
.btn {
  border-radius: 10px;
  border: 1px solid #ededed;
  color: #000000;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  line-height: 38px;
  min-width: 120px;
  padding: 0 5px;
  text-decoration: none;
  &:hover {
    background-color: #ededed;
  }
}
</style>