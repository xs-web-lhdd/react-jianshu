import React from 'react'
import Topic from './components/Topic'
import Write from './components/Write'
import Recommend from './components/Recommend'
import List from './components/List'
import { HomeWrapper, HomeLeft, HomeRight } from './style'

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
}

export default Home