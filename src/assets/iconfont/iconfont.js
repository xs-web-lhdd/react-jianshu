import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* Project id 2672047 */
  src: url('//at.alicdn.com/t/font_2672047_jj5mo2mse5.woff2?t=1629982664953') format('woff2'),
       url('//at.alicdn.com/t/font_2672047_jj5mo2mse5.woff?t=1629982664953') format('woff'),
       url('//at.alicdn.com/t/font_2672047_jj5mo2mse5.ttf?t=1629982664953') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`


