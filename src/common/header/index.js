import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { GlobalStyle } from './../../assets/iconfont/iconfont';

class Header extends Component {
  render() {
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
            <NavSearch></NavSearch>
            <i className="iconfont">&#xe614;</i>
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
}

export default Header