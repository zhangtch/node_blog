/**
 * Created by Administrator on 2016/12/27.
 */
import * as types from '../mutation-types'

const state = {
  content: '',
  title: ''
}

const mutations = {
  [types.GET_ARTICLE] (state, data) {
    state.content = data.content
    state.title = data.title
  },
  [types.GET_ARTICLE_FAILURE] (state) {
    return state
  },
  [types.CLEAR_ARTICLE] (state) {
    state.content = ''
    state.title = ''
  }
}

export default {
  state,
  mutations
}
