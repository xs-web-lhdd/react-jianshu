import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* Project id 2672047 */
  src: url('//at.alicdn.com/t/font_2672047_8dgdzx8ijj.woff2?t=1629893830183') format('woff2'),
       url('//at.alicdn.com/t/font_2672047_8dgdzx8ijj.woff?t=1629893830183') format('woff'),
       url('//at.alicdn.com/t/font_2672047_8dgdzx8ijj.ttf?t=1629893830183') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`


