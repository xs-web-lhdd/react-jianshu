import React from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem,
        NavSearch, Addition, Button, SearchWrapper,
        SearchInfo, SearchInfoTitle, SearchInfoSwitch,
        SearchInfoItem, SearchInfoList
} from './style'
import { GlobalStyle } from './../../assets/iconfont/iconfont';
import { actionCreater }  from './store/index'


class Header extends React.Component {

  getListArea = () => {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = page*10; i < (page+1)*10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe795;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const { focused, handleInputFocus, handleInputBlur } = this.props
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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={focused ? 'focused' : ''}
            ></NavSearch>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
            {this.getListArea()}
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


const mapStateToProps = (state)  => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn((['header', 'list'])),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreater.getList())
      dispatch(actionCreater.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreater.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreater.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreater.mouseLeave())
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page < totalPage - 1) {
        dispatch(actionCreater.changePage(page + 1))
      } else {
        dispatch(actionCreater.changePage(0))
      }
    }
  }
}

// eslint-disable-next-line no-undef
export default connect(mapStateToProps, mapDispatchToProps)(Header)