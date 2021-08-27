import { get } from '../../../utils/request'
import * as constants from './constants'

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
})

export const getDetail = (id) => {
  return async (dispatch) => {
    const res = await get(`detail?id=${id}`)
    dispatch(changeDetail(res.data.title, res.data.content))
  }
}