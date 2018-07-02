<template>
  <h1 class="page-title">{{this.titleName}} 5 günlük hava durumu</h1>
</template>

<script>
export default {
  props: {
    titleName: { type: String, required: true }
  }
}
</script>

<style lang="scss">
.page-title {
  margin-bottom: 20px;
  text-align: center;
}
</style>