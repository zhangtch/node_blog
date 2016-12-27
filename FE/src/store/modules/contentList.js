/**
 * Created by Administrator on 2016/12/26.
 */
import * as types from '../mutation-types'

const state = {
  isFetching: false,
  contentList: []
}

const mutations = {
  [types.REQUEST_CONTENT_LIST] (state) {
    state.isFetching = true
  },
  [types.GET_CONTENT_LIST] (state, items) {
    state.isFetching = false
    state.contentList = items
  },
  [types.GET_CONTENT_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
