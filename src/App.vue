<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 19:28:08
 * @LastEditTime: 2019-08-19 20:09:31
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
<router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
    };
  },
  methods: {
  }

}
</script>

<style type="text/scss" lang="scss" rel="stylesheet/scss">

html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
