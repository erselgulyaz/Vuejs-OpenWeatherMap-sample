<template>
  <div class="action-row">
    <router-link :to=this.actionUrl class="action-link">{{this.actionText}}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    actionUrl: { type: String, required: true },
    actionText: { type: String, required: true },
  }  
}
</script>

<style lang="scss">
.action-row {
  display: block;
  padding: 20px 0;
  text-align: right;
  .action-link {
    color: #212121;
    font-size: 16px;
    line-height: 24px;
    padding-right: 20px;
    text-decoration: none;
  }
}
</style>