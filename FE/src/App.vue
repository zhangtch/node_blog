<template>
  <div id="app">
    <vheader class="header"></vheader>
    <div class="main">
      <router-view class="main-wrapper" transition="fade" transition-mode="out-in"></router-view>
    </div>
    <vfooter class="footer"></vfooter>
  </div>
</template>

<script>
import Vheader from './components/tools/Vheader'
import Vfooter from './components/tools/Vfooter'

export default {
  name: 'app',
  components: {
    Vheader,
    Vfooter
  }
}
</script>

<style>
  html {
    font-size: 10px;
    height: 100%;
  }
  body{
    margin:0;
    padding:0;
    height:100%;
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
    font-size: 1.6rem;
    line-height: 1.7;
    color: #404040;
    -webkit-font-smoothing: antialiased;
  }
  #app{
    display: flex;
    flex-flow:column;
    height:100%;
  }
  body a{
    text-decoration: none;
  }
  .nav a:link,a:visited{
    color: inherit;
  }
  body ul,li,p{
    margin:0;
    padding:0;
    list-style:none;
  }
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .fade-transition{
    transition: all .4s ease;
  }
  .fade-enter,.fade-leave{
    opacity:0;
  }

  .header,.footer{
    flex:0 0 auto;
  }

  .main{
    display: flex;
    justify-content: center;
    flex:1 0 auto;
    order:1;
  }
  .main-wrapper{
    max-width:80rem;
    width:80%;
    transition: all .4s;
  }

  .footer{
    order:3;
    display: flex;
    height:10rem;
  }

  .return{
    display: none;
    width: 50px;
    height: 50px;
    position: relative;
    cursor: pointer;
    font-size: 12px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    position: fixed;
    _position: absolute;
    right: 50px;
    bottom: 50px;
    background: url(http://static1.tuicool.com/images/return_bg.png) no-repeat 0 -50px;
  }

  @media screen and (max-width: 768px){
    .main-wrapper{
      width:100%;
    }
    .footer{
      height:6rem;
    }
  }
</style>
