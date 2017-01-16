<template>
  <div>
    <div class="header-background">
      <img :src="imgUrl" alt="">
    </div>
    <ul :class="['nav',{'nav-fixed':!isTop,'nav-inVisible':!isVisible}]">
      <li>
        <router-link :to="'/home'">主页</router-link>
      </li>
      <li>
        <router-link :to="'/tags'">标签</router-link>
      </li>
      <li>
        <router-link :to="'/about'">关于</router-link>
      </li>
    </ul>
    <div class="header-title">
      <h1 v-if="show" transition="fade">{{headlineFinal}}</h1>
    </div>
    <div class="return" title="返回顶部" :style="{display:returnBtn}"
         @click="toTop()"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        show: true,
        nav: 'nav',
        isTop: true,
        isVisible: true,
        headlineFinal: '',
        imgUrl: '',
        returnBtn: false
      }
    },
    mounted () {
      this.scroll()
    },
    created () {
      this.headlineFinal = this.headline.headline
    },
    computed: {
      ...mapGetters(['headline'])
    },
    watch: {
      'headline.headline': function (val, oldVal) {
        this.show = false
        setTimeout(() => {
          this.show = true
          this.headlineFinal = val
        }, 200)
      },
      'headline.imageUrl': function (val, oldVal) {
        this.show = false
        setTimeout(() => {
          this.show = true
          this.imgUrl = val
        }, 200)
      }
    },
    methods: {
      scroll () {
        let beforeScrollTop = document.body.scrollTop

        window.onscroll = () => {
          const afterScrollTop = document.body.scrollTop
          const delta = afterScrollTop - beforeScrollTop
          this.isTop = afterScrollTop === 0
          if (delta === 0) {
            return false
          }
          beforeScrollTop = afterScrollTop
          this.isVisible = delta <= 0
          if (afterScrollTop < 48) {
            this.isVisible = true
          }
          this.returnBtn = afterScrollTop > 0 ? 'block' : 'none'
        }
      },
      toTop () {
        //  IE10+/Android Browser4.4+/
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (clb) {
          return setTimeout(clb, 1000 / 60)
        }

        var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function (id) {
          clearTimeout(id)
        }
        var top = document.body.scrollTop || document.documentElement.scrollTop

        // 滚动时长
        var duration = 300
        // 计算步长
        var step = top / (duration / (1000 / 60)) >> 0

        function fn () {
          if (top >= 0) {
            top -= step
            document.documentElement.scrollTop = document.body.scrollTop = top
            fn.rafTimer = requestAnimationFrame(fn)
          } else {
            document.body.scrollTop = 0
            cancelAnimationFrame(fn.rafTimer)
          }
        }

        fn.rafTimer = requestAnimationFrame(fn)
      }
    }
  }
</script>

<style scoped>
  .nav{
    position: fixed;
    display: flex;
    width:100%;
    flex-flow:row wrap;
    justify-content: flex-end;
    background-color: rgba(0,0,0,0);
    color: #ffffff;
    transition: all .4s;
  }
  .nav-fixed{
    border-bottom: 1px solid #bababa;
    background-color: rgba(255, 255, 255, 0.95);
    color: rgba(0, 0, 0, .8);
  }
  .nav-inVisible{
    transform: translate(0, -4.8rem);
  }
  .nav a{
    display: block;
    margin:0;
    padding:1.2rem 1.8rem;
    opacity:1;
    font-size: 1.4rem;
    transition: opacity .4s;
  }
  .nav a:hover{
    opacity:0.7;
  }

  .header{
    display: flex;
    height: 100%;
    flex-direction: column;
    background-color: rgba(0,0,0,.2);
  }
  .header-background{
    position: absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    z-index:-1;
    /*background:rgba(0,0,0,.4) url('http://ogcpvbso8.bkt.clouddn.com/banner.jpg') no-repeat;*/
    /*background-size:cover;*/
  }
  .header-background img{
    width:100%;
    height:100%;
  }
  .header-title{
    display: flex;
    justify-content: center;
    align-items: center;
    align-self:center;
    margin:auto;
    max-width: 94%;
    color: #ffffff;
  }
  .header-title h1{
    font-size: 4rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px){
    .header-title h1{
      font-size: 2.6rem;
    }
    .nav-inVisible{
      transform: translate(0, -4.4rem);
    }
    .nav a{
      font-size: 1.4rem;
      padding:1rem 1.4rem;
    }
    .header,.header-background{
      height:24rem;
    }
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
    background: url(http://ogcpvbso8.bkt.clouddn.com/return_bg.png) no-repeat 0 -50px;
  }
</style>
