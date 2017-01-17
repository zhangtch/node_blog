<template>
  <div class="comment-form">
    <textarea v-model="formCookies" class="comment-form-content" name="" id="" cols="30" rows="10"
              placeholder="cookies"></textarea>
    <div class="comment-item-reply-wrapper">
      <a @click="submit" class="comment-item-reply comment-item-reply-submit">提交</a>
    </div>
  </div>
</template>

<script>
  import {API_ROOT} from '../config'
  import {mapActions} from 'vuex'
  export default{
    data () {
      return {
        formCookies: ''
      }
    },
    created () {
      this.updateHeadline({headline: '打卡考勤', imageUrl: ''})
    },
    methods: {
      ...mapActions({
        updateHeadline: 'updateHeadline'
      }),
      submit () {
        if (!this.formCookies) {
          window.alert('cookies不能为空');
          return
        }
        let cookies = this.formCookies;
        this.axios.get(API_ROOT + 'punch/' + cookies).then(response => {
          window.alert(response.data)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  .comment-form {
    display: flex;
    flex-flow: column nowrap;
    padding: 1rem;
  }

  .comment-item-reply-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }

  .comment-form-content {
    border: 1px solid #d2d2d2;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: .5rem;
  }

  .comment-form-content {
    resize: none;
  }

  .comment-item-reply {
    padding: 1rem;
    transition: all .4s;
  }

  .comment-item-reply-submit {
    border: 1px solid #d2d2d2;
    border-radius: .5rem;
  }

  .comment-item-reply:hover {
    color: #838383;
    cursor: pointer;
  }
</style>
