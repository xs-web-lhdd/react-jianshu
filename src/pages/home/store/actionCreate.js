import { get } from '../../../utils/request'
import * as constants from './constants'
import { fromJS } from 'immutable'

const changeHomeData = (topicList, articleList, recommendList) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList,
  articleList,
  recommendList
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return async (dispatch) => {
    const res = await get('/home')
    const { topicList, articleList, recommendList } = res.data
    const action = changeHomeData(topicList, articleList, recommendList)
    dispatch(action)
  }
}

export const getMoreList = (page) => {
  return async (dispatch) => {
    const res = await get(`/homeList?page=${page}`)
    dispatch(addHomeList(res.data, page + 1))
  }
}

export const toggleTopShow = (flag) => ({
  type: constants.TOGGLE_SCROLL_SHOW,
  show: flag
})