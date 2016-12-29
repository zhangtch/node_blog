/**
 * Created by Administrator on 2016/12/28.
 */
import * as types from '../mutation-types'

const state = {
  commentList: []
}

const mutations = {
  [types.GET_COMMENTS_LIST] (state, data) {
    state.commentList = data
  },
  [types.GET_COMMENTS_LIST_FAILURE] (state) {
    return state
  },
  [types.SUBMIT_COMMENT] (state, data) {
    state.commentList.push(data)
  },
  [types.SUBMIT_COMMENT_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
