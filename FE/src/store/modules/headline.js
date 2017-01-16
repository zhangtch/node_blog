/**
 * Created by tianzhang on 16/12/25.
 */
import * as types from '../mutation-types'

const state = {
  headline: '',
  imageUrl: ''
}

const mutations = {
  [types.UPDATE_HEADLINE] (state, value) {
    state.headline = value.headline
    if (value.imageUrl) {
      state.imageUrl = value.imageUrl
    } else {
      state.imageUrl = 'http://ogcpvbso8.bkt.clouddn.com/node_blog1.jpg'
    }
  },
  [types.GET_HEADLINE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
