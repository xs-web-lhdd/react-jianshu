import * as constants from './constants'
import { get } from './../../../utils/request'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
})
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const changePage = (prvePage) => ({
  type: constants.CHANGE_PAGE,
  page: prvePage
})
export const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

// 发送异步请求：
export const getList = () => {
  return async (dispatch) => {
    const res = await get('/list')
    if (res.code) {
      dispatch(changeList(res.data))
    }
  }
}