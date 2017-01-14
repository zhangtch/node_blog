/**
 * Created by tianzhang on 16/12/25.
 */
import Vue from 'vue'
import * as types from './mutation-types'
import { API_ROOT } from '../config'
// let API_ROOT = 'http://localhost:3000/'

export const getHeadline = ({commit}) => {
  commit(types.GET_HEADLINE)
}
export const updateHeadline = ({commit}, data) => {
  commit(types.UPDATE_HEADLINE, data)
}

export const getContentList = ({commit}, id) => {
  commit(types.REQUEST_CONTENT_LIST)
  if (id) {
    Vue.axios.get(API_ROOT + 'getContent/' + id).then(response => {
      commit(types.GET_CONTENT_LIST, response.data)
    }).catch(error => {
      commit(types.GET_CONTENT_LIST_FAILURE, error)
    })
  } else {
    Vue.axios.get(API_ROOT + 'getContent').then(response => {
      commit(types.GET_CONTENT_LIST, response.data)
    }).catch(error => {
      commit(types.GET_CONTENT_LIST_FAILURE, error)
    })
  }
}

export const getArticle = ({commit}, id) => {
  Vue.axios.get(API_ROOT + 'article/' + id).then(response => {
    commit(types.GET_ARTICLE, response.data)
  }).catch(error => {
    commit(types.GET_ARTICLE_FAILURE, error)
  })
}
export const clearArticle = function ({ commit }) {
  commit(types.CLEAR_ARTICLE)
}

export const getTags = function ({ commit }) {
  Vue.axios.get(API_ROOT + 'getAllTags').then(response => {
    commit(types.GET_TAGS, response.data)
  }).catch(error => {
    commit(types.GET_TAGS_FAILURE, error)
  })
}

export const getCommentList = function ({ commit }, value) {
  Vue.axios.get(API_ROOT + 'getComments/' + value).then(response => {
    commit(types.GET_COMMENTS_LIST, response.data)
  }).catch(error => {
    commit(types.GET_COMMENTS_LIST_FAILURE, error)
  })
}

export const submitComment = function ({commit}, data) {
  Vue.axios.post(API_ROOT + 'postComment', data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(response => {
    commit(types.SUBMIT_COMMENT, response.data)
  }).catch(error => {
    commit(types.SUBMIT_COMMENT_FAILURE, error)
  })
}
