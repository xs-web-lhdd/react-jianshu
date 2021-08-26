import React from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem,
        NavSearch, Addition, Button, SearchWrapper,
        SearchInfo, SearchInfoTitle, SearchInfoSwitch,
        SearchInfoItem, SearchInfoList
} from './style'
import { GlobalStyle } from './../../assets/iconfont/iconfont';
import { actionCreater }  from './store/index'

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

const Header = (props) => {
  return (
    <HeaderWrapper>
      {/* 引入样式 */}
      <GlobalStyle></GlobalStyle> 
      <Logo></Logo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right iconfont'>
          <i>&#xe601;</i>
        </NavItem>
        <SearchWrapper>
          <NavSearch
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
            className={props.focused ? 'focused' : ''}
          ></NavSearch>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
          {getListArea(props.focused)}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='reg'>注册</Button>
        <Button className='writing iconfont'>
          <i>&#xe767;</i>
          写文章
        </Button>
      </Addition>
    </HeaderWrapper>
  )
}


const mapStateToProps = (state)  => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreater.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreater.searchBlur())
    }
  }
}

// eslint-disable-next-line no-undef
export default connect(mapStateToProps, mapDispatchToProps)(Header)