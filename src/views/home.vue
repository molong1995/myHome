<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 19:28:08
 * @LastEditTime: 2019-09-06 13:06:34
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="home">

    <el-container class="content">
      <el-header>
        <div class="left"></div>
        <div class="center">人间不值得</div>
        <div class="right"></div>
      </el-header>
      <el-main class="main">
        <div class="img-bix"></div>
      </el-main>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// import cavas from './cavas'
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: 'home',
  components: {
    // cavas
  },
  data () {
    return {
      ind: 0,
      navList:[ '图片', '音乐', '视频', '旅游',]
    }
  },
  methods: {
    itemClick(index) {
      this.ind = index
    },
    con() {
      console.log('444')
    }
  }
}
</script>

<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
  .home {
    width: 100%;
    height: 100%;
    text-align: center;
    .content {
      width: 100%;
      height: 100%;
      .el-header {
        width: 100%;
        line-height: 60px;
        color: #fff;
        border-bottom: 1px solid #ccc;
        font-size: 20px;
        padding: 0;
        display: flex;
        background-color: #336699;
        .left {
          width: 45%;
          // background-color: red;
        }
        .center {
          width: 10%;
          text-align: center;
          // background-color: green;
        }
        .right {
          width: 45%;
          // background-color: blue;
        }
      }
      .main {
        background-color: lightgreen;
        .img-bix {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 10px solid #336699;
          background-color: #fff;
        }
      }
      .footer {
        background-color: #336699;
      }
    }
  }
</style>
