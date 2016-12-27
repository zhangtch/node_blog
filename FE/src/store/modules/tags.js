/**
 * Created by Administrator on 2016/12/27.
 */
import * as types from '../mutation-types'

const state = {
  tags: []
}

const mutations = {
  [types.GET_TAGS] (state, items) {
    state.tags = items
  },
  [types.GET_TAGS_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
