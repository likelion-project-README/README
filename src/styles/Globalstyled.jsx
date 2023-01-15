import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reset from 'styled-reset';
import PretendardRegularSub from '../assets/fonts/Pretendard-Regular.subset.woff';
import PretendardMediumSub from '../assets/fonts/Pretendard-Medium.subset.woff';
import PretendardBoldSub from '../assets/fonts/Pretendard-Bold.subset.woff';
import PretendardRegularSub2 from '../assets/fonts/Pretendard-Regular.subset.woff2';
import PretendardMediumSub2 from '../assets/fonts/Pretendard-Medium.subset.woff2';
import PretendardBoldSub2 from '../assets/fonts/Pretendard-Bold.subset.woff2';

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url(${PretendardRegularSub2}) format('woff2'),
         url(${PretendardRegularSub}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Medium';
    src: url(${PretendardMediumSub2}) format('woff2'),
         url(${PretendardMediumSub}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url(${PretendardBoldSub2}) format('woff2'),
         url(${PretendardBoldSub}) format('woff');
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
    margin-top: 48px;
    max-height: calc(100vh - 60px);
  }
`;

export default GlobalStyled;
