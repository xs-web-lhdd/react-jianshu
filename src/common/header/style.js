import styled from "styled-components";
import LogoPic from '../../assets/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0
`
export const Logo = styled.div`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  display: block;
  background-color: red;
  background: url(${LogoPic});
  background-size: cover;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  display: block;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  .zoom {
    position: absolute;
    left: 310px;
    top: 16.5px;
    font-size: 20px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
    padding-top: 3px;
    display: block;
    transition: all .5s;
    &.focused {
      background-color: #777;
      left: 450px;
      color: #fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  box-sizing: border-box;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 35px 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  font-size: 14px;
  color: #777;
  transition: width .5s;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 300px;
  }
`
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  width: 80px;
  line-height: 38px;
  margin-right: 9px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  text-align: center;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    width: 100px;
    color: #fff;
    background-color: #ec6149;;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 180px;
  width: 260px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    color: red;
    font-size: 12px;
    margin-right: 5px;
    transition: all .2s;
    transform-origin: center;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin-bottom: 10px;
`