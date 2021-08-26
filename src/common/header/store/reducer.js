import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，
    // 返回一个全新的对象
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)   
  }
  if (action.type === constants.CHANGE_LIST) {
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
    // return state.set('list', action.data).set('totalPage', action.totalPage)
  }
  if (action.type === constants.MOUSE_ENTER) {
    return state.set('mouseIn', true)
  }
  if (action.type === constants.MOUSE_LEAVE) {
    return state.set('mouseIn', false)
  }
  if (action.type === constants.CHANGE_PAGE) {
    return state.set('page', action.page)
  }
  return state
}