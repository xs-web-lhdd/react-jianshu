import { fromJS } from 'immutable'

const defaultState = fromJS({
  topList: [],
  articleList: [],
  recommendList: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  if (action.type === 'change_home_data') {
    state.set('topList', fromJS(action.topicList))
    return state.merge({
      topList: fromJS(action.topicList),
      articleList: fromJS(action.articleList),
      recommendList: fromJS(action.recommendList)
    })
  }
  return state
}