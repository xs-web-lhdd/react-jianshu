import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  login: false
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  if (action.type === constants.CHANGE_LOGIN) {
    return state.set('login', action.value)
  }
  if (action.type === constants.LOGOUT_LOGIN) {
    return state.set('login', action.value)
  }
  return state
}