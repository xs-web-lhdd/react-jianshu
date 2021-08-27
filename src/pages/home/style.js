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
// 加载更多
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  text-align: center;
  background-color: #a5a5a5;
  border-radius: 20px;
  cursor: pointer;
  color: #fff;
`
// recommend
export const Recommend = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 240px;
  height: 50px;
  margin-bottom: 10px;
  background: url(${(props) => props.imgUrl});
  border-radius: 4px;
  background-size: cover;
`
// write
export const WriteWrapper = styled.div`
  width: 238px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`
export const WriteWrapperItem = styled.div`
`
// 返回顶部
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
`
