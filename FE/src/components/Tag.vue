<template>
  <div>
    <div class="tagset">
      <ul>
        <li v-for="(tag, index) in tags">
          <a @click="update(index, tag.name, tag._id)"
             :class="{'tagset-active': index === selected}">
            {{tag.name}}
          </a>
        </li>
      </ul>
    </div>
    <tag-content-list></tag-content-list>
  </div>
</template>

<script type="text/babel">
  import TagContentList from './tools/TagContentList'
  import {mapActions, mapGetters} from 'vuex'
  export default {
    components: {
      TagContentList
    },
    data () {
      return {
        selected: 0
      }
    },
    created () {
      this.getTags()
    },
    computed: {
      ...mapGetters(['tags']),
      ...mapGetters({
        'content': 'contentList'
      })
    },
    watch: {
      'tags': function (val) {
        if (val) {
          this.updateHeadline({headline: val[0].name, imageUrl: ''})
          this.getContentList(val[0].name)
        }
      }
    },
    methods: {
      ...mapActions({
        'getTags': 'getTags',
        'updateHeadline': 'updateHeadline',
        'getContentList': 'getContentList'
      }),
      update (index, name, tagId) {
        this.selected = index
        this.updateHeadline({headline: name})
        this.getContentList(name)
      }
    }
  }
</script>

<style>
  .tagset {
    margin: 2rem auto;
  }

  .tagset ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }

  .tagset li {
    margin: .3rem;
  }

  .tagset li a {
    display: block;
    cursor: pointer;
    padding: .3rem 1.6rem;
    margin: 0;
    border: 1px solid #d2d2d2;
    border-radius: .5rem;
    color: rgba(0, 0, 0, .8);
    background-color: #f7f7f7;
    transition: all .4s;
  }

  .tagset li a:hover, .tagset .tagset-active {
    background-color: #555555;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    .tagset li a {
      padding: .1rem 1rem;
    }

    .tagset li {
      margin: .2rem;
    }
  }
</style>
