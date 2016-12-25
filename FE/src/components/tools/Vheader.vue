<template>
  <div>
    <div class="header-background"></div>
    <ul :class="['nav',{'nav-fixed':!isTop,'nav-inVisible':!isVisible}]">
      <li>
        <router-link :to="'home'">主页</router-link>
      </li>
      <li>
        <router-link :to="'tags'">标签</router-link>
      </li>
      <li>
        <router-link :to="'about'">关于</router-link>
      </li>
    </ul>
    <div class="header-title">
      <h1 v-if="show" transition="fade">{{headlineFinal}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: true,
        nav: 'nav',
        isTop: true,
        isVisible: true,
        headlineFinal: '测试'
      }
    },
    mounted () {
      this.scroll()
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
        }
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
    background-color: rgba(0,0,0,.8);
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
    height: 30rem;
    flex-direction: column;
    background-color: rgba(0,0,0,.2);
  }
  .header-background{
    position: absolute;
    width:100%;
    height:30rem;
    left:0;
    top:0;
    z-index:-1;
    background:rgba(0,0,0,.4) url('../../assets/banner.jpg') no-repeat;
    background-size:cover;
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
</style>
