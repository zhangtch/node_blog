<template>
  <div>
    <div class="article">
      <div v-html="content"></div>
    </div>
    <comment></comment>
  </div>
</template>

<script type="text/babel">
  import marked from 'marked'
  import Prism from 'prismjs'
  import 'prismjs/themes/prism.css'
  import Comment from './tools/Comment'
  import {mapActions, mapGetters} from 'vuex'

  marked.setOptions({
    highlight: (code) => Prism.highlight(code, Prism.languages.javascript)
  })
  export default {
    components: {
      Comment
    },
    created () {
      this.getArticle(this.$route.params.id)
    },
    computed: {
      ...mapGetters(['headline', 'article']),
      content () {
        this.updateHeadline({headline: this.article.title, imageUrl: this.article.imageUrl})
        let _content = this.article.content
        marked(this.article.content, (err, content) => {
          if (!err) {
            _content = content
          }
        })
        return _content
      }
    },
    methods: {
      ...mapActions({
        'updateHeadline': 'updateHeadline',
        'getArticle': 'getArticle',
        'clearArticle': 'clearArticle'
      })
    },
    beforeDestroy () {
      this.clearArticle()
    }
  }
</script>

<style>
  .article{
    display: flex;
    margin:2rem 1rem;
  }
  .article pre {
    max-width: 800px;
    padding:1rem;
    font:14px Consolas,"Liberation Mono",Menlo,Coourier,monospace;
    background-color: #f7f7f7;
    white-space: pre-wrap;
    overflow: auto;
  }
  .article code{
    font:inherit;
  }
  .article table{
    border-collapse: collapse;
  }
  .article td,.article th{
    padding:.3rem .6rem;
    border:1px solid #dddddd;
  }
  .article tbody tr:nth-child(2n+1){
    background-color: #f7f7f7;
  }
  .article a{
    color: #4078c0;
    transition: all .4s;
  }
  .article a:hover{
    color: #80b2ff;
  }
  .article img,.article code{
    max-width: 100%;
  }
  .article h1, .article h2 {
    border-bottom: 1px solid #d2d2d2;
    margin: 1rem 0;
  }
  .article ul {
    padding-left: 2rem;
  }

  .article li {
    list-style: disc;
  }

  .article p, .article li {
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, .8);
  }

  .article blockquote {
    padding: 0 1.5rem;
    margin: 0;
    color: #777;
    border-left: 4px solid #ddd;
  }

  @media screen and (max-width: 768px) {
    .article {
      padding: 1rem;
      margin: 0;
      font-size: 1.4rem;
    }

    .article h1 {
      font-size: 2.4rem;
    }

    .article h2 {
      font-size: 2.2rem;
    }

    .article h3 {
      font-size: 2rem;
    }

    .article pre {
      font-size: 1.2rem;
    }
  }

</style>
