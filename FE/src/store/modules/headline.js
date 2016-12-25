/**
 * Created by tianzhang on 16/12/25.
 */
import {UPDATE_HEADLINE,GET_HEADLINE} from './mutation-types'

const state = {
  headline: ''
}

const mutations = {
  [UPDATE_HEADLINE] (state, value) {
    state.headline = value
  },
  [GET_HEADLINE] (state) {
    return state.headline
  }
}

export default {
  state,
  mutations
}
