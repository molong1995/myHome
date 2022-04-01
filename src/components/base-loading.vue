<template>
  <div class="base-loading">
    <div class="base-loading-icon">
      <img src="../assets/images/loading.gif">
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
    },
    props: {
      type: {
        type: String,
        default: 'ios'
      }
    },
    computed: {}
  }
</script>
<style type="text/scss" lang="less">
  .base-loading {
    /*padding-top: 160px;*/
    /*width: 80px;*/
    /*height: 80px;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    position: absolute;
    padding-top: 160px;
    width: 80px;
    height: 80px;
    z-index: 112;
    left: 50%;
    margin-left: -40px;
    .base-loading-icon {
      position: absolute;
      background: #646464;
      width: 80px;
      height: 80px;
      border-radius: 6px;
      padding: 20px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
</style>