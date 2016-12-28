<template>
  <div class="list-wrapper">
    <ul class="list-container" v-if="show" transition="fade">
      <li v-for="item in finalList">
        <router-link :to="{ name: 'article', params: {id: item._id}}">
          <p class="list-title">{{item.title}}</p>
          <p class="list-updated">{{item.createdAt}}</p>
          <p class="list-abstract">{{item.abstract}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        show: true,
        finalList: []
      }
    },
    computed: {
      ...mapGetters({
        'content': 'contentList'
      })
    },
    watch: {
      'content.contentList': function (val) {
        this.show = false
        setTimeout(() => {
          this.show = true
          this.finalList = val
        }, 200)
      }
    }
  }
</script>

<style>
  .list-container li {
    border-bottom: 1px solid #eee;
  }

  .list-title {
    font-size: 2.6rem;
    font-weight: 400;
    color: #404040;
    margin-top: 0;
  }

  .list-abstract {
    font-size: 1.6rem;
    color: #919191;
    font-weight: 300;
  }

  .list-updated {
    font-family: "Comic Sans MS", curslve, sans-serif;
    font-size: 1.8rem;
    color: #8b8b8b;
    padding: 5px 0;
  }

  .list-container li a {
    padding: 1rem 1.5rem;
    border-radius: .5rem;
    display: block;
    transition: all .3s;
    margin: 0;
  }

  .list-container li a:hover {
    background-color: Rgba(0, 0, 0, .02);
  }

  @media screen and (max-width: 768px) {
    .list-title {
      font-size: 2.2rem;
    }

    .list-updated {
      font-size: 1.6rem;
    }
  }
</style>
