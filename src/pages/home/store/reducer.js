import { fromJS } from 'immutable'

const defaultState = fromJS({
  topList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/475d2b0c75de4fb4ac3de06f987e5ea4~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09d7e54cdc7645528910a4bfb70d207c~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp'
    }    
  ]
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  return state
}