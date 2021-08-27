import React from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import Write from './components/Write'
import Recommend from './components/Recommend'
import List from './components/List'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { actionCreate } from './store/index'

class Home extends React.Component {

  handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

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
        <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action =actionCreate.getHomeInfo()
    dispatch(action)
  }
})

export default connect(null, mapDispatch)(Home)