/**
 * Created by tianzhang on 16/12/25.
 */
import * as types from '../mutation-types'

const state = {
  headline: ''
}

const mutations = {
  [types.UPDATE_HEADLINE] (state, value) {
    state.headline = value
  },
  [types.GET_HEADLINE] (state) {
    return state.headline
  }
}

export default {
  state,
  mutations
}
