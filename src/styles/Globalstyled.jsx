import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('../assets/fonts/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('../assets/fonts/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('../assets/fonts/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  ${reset}
  :root {
    --main-color : #85AFC7;
    --main-disabled-color: #B6CFDD;
    --main-text-color : #333333;
    --sub-text-color : #767676;
    --sub2-text-color : #dbdbdb;
  }

  *{
    box-sizing: border-box;
  }

  body{
    font-family: 'Pretendard-Regular', sans-serif;
    font-weight: 400;
  }

  button{
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer
  }

  .hidden {
    position: relative;
    z-index: -1px;
    display: inline-block;
    overflow: hidden;
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    word-break: initial;
    word-wrap: initial;
  }

  .max-width {
  max-width: 800px;
  margin: 0 auto;
}

.min-width {
  min-width: 390px;
}

 .wrapper-contents {
  max-height: calc(100vh - 60px);
}
`;

export default GlobalStyled;
