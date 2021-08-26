import React from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { GlobalStyle } from './../../assets/iconfont/iconfont';


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
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur () {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

// eslint-disable-next-line no-undef
export default connect(mapStateToProps, mapDispatchToProps)(Header)