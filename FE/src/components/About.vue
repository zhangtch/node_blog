<template>
  <div class="about-wrapper">
    <h2 class="list-title">tc</h2>
    <p>前端工程师</p>
    <a href="https://github.com/zhangtch">Github</a>
  </div>
</template>

<script type="text/babel">
  import {mapActions} from 'vuex'
  export default {
    created () {
      this.updateHeadline({headline: '关于我', imageUrl: ''})
    },
    methods: {
      ...mapActions({
        updateHeadline: 'updateHeadline'
      })
    }
  }
</script>

<style>
  .about-wrapper {
    width: 80%;
    padding: 1rem;;
  }

  .about-wrapper a {
    color: #4078c0;
    display: block;
    transition: all .4s;
  }

  .about-wrapper a:hover {
    color: #80b2ff;
  }

  .about-wrapper p, .about-wrapper h2, .about-wrapper a {
    margin: 1rem auto;
  }

  .about-wrapper p {
    font-size: 1.8rem;
  }

  .about-wrapper a {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    .about-wrapper p {
      font-size: 1.6rem;
    }

  }
</style>
