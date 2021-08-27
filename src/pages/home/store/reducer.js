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
  ],
  articleList: [
    {
      id: 1,
      title: '那一夜，我错的太离谱',
      desc: '同学聚会结束后，我和前夫去了酒店，也就是在那一夜，我才知道自己错的有多离谱。 我叫曼曼(化名），和前夫是大学同学，曾经的我们感情非常好，大学校园...',
      imgUrl: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09d7e54cdc7645528910a4bfb70d207c~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp'
    },
    {
      id: 2,
      title: '那一夜，我错的太离谱',
      desc: '同学聚会结束后，我和前夫去了酒店，也就是在那一夜，我才知道自己错的有多离谱。 我叫曼曼(化名），和前夫是大学同学，曾经的我们感情非常好，大学校园...',
      imgUrl: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09d7e54cdc7645528910a4bfb70d207c~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp'
    },
    {
      id: 3,
      title: '那一夜，我错的太离谱',
      desc: '同学聚会结束后，我和前夫去了酒店，也就是在那一夜，我才知道自己错的有多离谱。 我叫曼曼(化名），和前夫是大学同学，曾经的我们感情非常好，大学校园...',
      imgUrl: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09d7e54cdc7645528910a4bfb70d207c~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp'
    }
  ]
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  return state
}