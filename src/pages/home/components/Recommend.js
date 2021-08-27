import React from 'react'
import { connect } from 'react-redux'
import { Recommend, RecommendItem } from './../style'

class Recommond extends React.PureComponent {
  render() {
    return (
      <Recommend>
        {
          this.props.list.map((item) => {
            return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
            )
          })
        }
      </Recommend>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})


export default connect(mapState, null)(Recommond)