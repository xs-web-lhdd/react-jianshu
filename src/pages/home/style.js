import styled from "styled-components";
import PicOne from '../../assets/1.png'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
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
// Topic
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height:32px;
  margin-left: 10px;
  margin-bottom: 14px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    width: 32px;
    height: 32px;
    display: block;
    margin-right: 10px;
    float: left;
  }
`

// List
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`