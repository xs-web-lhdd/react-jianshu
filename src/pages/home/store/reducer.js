import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  if (action.type === constants.CHANGE_HOME_DATA) {
    state.set('topList', fromJS(action.topicList))
    return state.merge({
      topList: fromJS(action.topicList),
      articleList: fromJS(action.articleList),
      recommendList: fromJS(action.recommendList)
    })
  }
  if (action.type === constants.ADD_ARTICLE) {
    return state.merge({
      articleList: state.get('articleList').concat(action.list),
      articlePage: action.nextPage
    })
  }
  if (action.type === constants.TOGGLE_SCROLL_SHOW) {
    return state.set('showScroll', action.show)
  }
  return state
}