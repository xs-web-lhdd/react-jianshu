import styled from "styled-components";
import PicOne from '../../assets/1.png'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  height: 300px;
  background: red;
  .banner-img {
    width: 100%;
  }
`
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
`
export const HomeRight = styled.div`
  width: 240px;
  float: right;
  height: 200px;
  background: url(${PicOne});
`