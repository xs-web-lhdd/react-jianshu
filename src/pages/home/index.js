import React from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import Write from './components/Write'
import Recommend from './components/Recommend'
import List from './components/List'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { get } from './../../utils/request'

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='https://img.bagevent.com/resource/20210819/1859143282971445.jpg?imageView2/2/w/1920/interlace/1/q/100&lazy=0' />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Write></Write>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const res = await get('/home')
    const { topicList, articleList, recommendList } = res.data
    const action = {
      type: 'change_home_data',
      topicList,
      articleList,
      recommendList
    }
    this.props.changeHomeData(action)
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeHomeData (action) {
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatch)(Home)