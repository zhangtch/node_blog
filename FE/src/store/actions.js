/**
 * Created by tianzhang on 16/12/25.
 */
import Vue from 'vue'
import * as types from './mutation-types'
// let API_ROOT = 'http://localhost:3000/'

export const getHeadline = ( {dispatch} ) => {
  dispatch(types.GET_HEADLINE)
}
export const updateHeadline = ( {dispatch} ) => {
  dispatch(types.UPDATE_HEADLINE)
}
