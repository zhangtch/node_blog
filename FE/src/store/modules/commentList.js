/**
 * Created by Administrator on 2016/12/28.
 */
import * as types from '../mutation-types'

const state = {
  commentsList: []
}

const mutations = {
  [types.GET_COMMENTS_LIST] (state, data) {
    state.commentsList = data
  },
  [types.GET_COMMENTS_LIST_FAILURE] (state) {
    return state
  },
  [types.SUBMIT_COMMENT] (state, data) {
    state.commentsList.push(data)
  },
  [types.SUBMIT_COMMENT_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
