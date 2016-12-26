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

export const getContentList = ({commit}) => {
  commit(types.REQUEST_CONTENT_LIST)
  Vue.axios.get(API_ROOT + 'getContent').then(response => {
    commit(types.GET_CONTENT_LIST, response.data)
  }).catch(error => {
    commit(types.GET_CONTENT_LIST_FAILURE, error)
  })
}
