import React from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreater } from './store/index'

class Detail extends React.Component {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDisPatch = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreater.getDetail(id))
    }
  }
}

export default connect(mapState, mapDisPatch)(Detail)