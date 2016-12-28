/**
 * Created by Administrator on 2016/12/27.
 */
import * as types from '../mutation-types'

const state = {
  content: '',
  title: '',
  imageUrl: ''
}

const mutations = {
  [types.GET_ARTICLE] (state, data) {
    state.content = data.content
    state.title = data.title
    state.imageUrl = data.imageUrl
  },
  [types.GET_ARTICLE_FAILURE] (state) {
    return state
  },
  [types.CLEAR_ARTICLE] (state) {
    state.content = ''
    state.title = ''
    state.imageUrl = ''
  }
}

export default {
  state,
  mutations
}
