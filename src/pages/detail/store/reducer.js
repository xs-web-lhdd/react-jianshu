import { fromJS } from 'immutable'
// import * as constants from './constants'

const defaultState = fromJS({
  title: '衡水中学，被外地人占领的高考工厂',
  content: '<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/001dd37ee72d41bdaa110ca740db639e~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp" /><p>原因：docker 服务启动的时候，docker 服务会向 iptables 注册一个端口映射链，以便让 docker 服务管理的 containner 容器所暴露的 端口之间映射关系进行通信通过命令 iptables -L 可以查看 iptables 端口映射链在开发环境中，如果你删除了 iptables 中的 docker 相关的端口映射链，或者 iptables 的网络规则会因此被丢失了（例如重启firewalld），docker就会报 iptables error异常提示.</p>'
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  return state
}