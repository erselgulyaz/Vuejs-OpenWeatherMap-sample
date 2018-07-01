<template>
  <div>
    <router-link :to=getDetailLink class="btn">{{ButtonText}}</router-link>
  </div>
</template>

<script>
  export default {
    props: {
      ButtonText : { type: String, required: true },
      ButtonLink : { type: String },
    },
    computed: {
      getDetailLink() {
        return `/5GunlukTahmin/${this.ButtonLink}`
      }
    }
  }
</script>

<style lang="scss">
.btn {
  display: inline-block;
  min-width: 120px;
  padding: 0 5px;
  line-height: 38px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  color: #000000;
  border: 1px solid #ededed;
  font-weight: bold;
  &:hover {
    background-color: #ededed;
  }
}
</style>