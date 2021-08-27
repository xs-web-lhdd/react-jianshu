import { post } from '../../../utils/request'
import * as constants from './constants'


const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const logOut = () => ({
  type: constants.LOGOUT_LOGIN,
  value: false
})

export const login = (account, password) => {
  return async (dispatch) => {
    const res = await post('/login')
    if (res.code === '200') {
      dispatch(changeLogin())
    } else {
      alert('账号或密码错误')
    }
  }
}