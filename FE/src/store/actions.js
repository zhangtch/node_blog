/**
 * Created by tianzhang on 16/12/25.
 */
import Vue from 'vue'
import * as types from './mutation-types'
let API_ROOT = 'http://localhost:3000/'

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
      commit(types.GET_CONTENT_LIST, response.data.rows)
    }).catch(error => {
      commit(types.GET_CONTENT_LIST_FAILURE, error)
    })
  } else {
    Vue.axios.get(API_ROOT + 'getContent').then(response => {
      commit(types.GET_CONTENT_LIST, response.data.rows)
    }).catch(error => {
      commit(types.GET_CONTENT_LIST_FAILURE, error)
    })
  }
}

export const getArticle = ({commit}, id) => {
  Vue.axios.get(API_ROOT + 'article/' + id).then(response => {
    commit(types.GET_ARTICLE, response.data.rows)
  }).catch(error => {
    commit(types.GET_ARTICLE_FAILURE, error)
  })
}
export const clearArticle = function ({ commit }) {
  commit(types.CLEAR_ARTICLE)
}

export const getTags = function ({ commit }) {
  Vue.axios.get(API_ROOT + 'getAllTags').then(response => {
    commit(types.GET_TAGS, response.data.rows)
  }).catch(error => {
    commit(types.GET_TAGS_FAILURE, error)
  })
}
