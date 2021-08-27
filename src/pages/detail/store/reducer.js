import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  title: '',
  content: ''
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  if (action.type === constants.CHANGE_DETAIL) {
    return state.merge({
      title: action.title,
      content: action.content
    })
  }
  return state
}