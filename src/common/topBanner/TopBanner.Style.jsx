import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgSprite from '../../assets/css_sprites.png';

const BannerCont = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  height: 48px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #dbdbdb;
  padding: 0 16px;
  z-index: 100;
`;
const BackBtn = styled.button`
  width: 22px;
  height: 22px;
  background: url(${imgSprite}) no-repeat -122px -72.5px / 146px 132px;
  margin: 13px 10px 13px 0px;
  cursor: pointer;
`;

const MoreBtn = styled.button`
  width: 24px;
  height: 24px;
  background: url(${imgSprite}) no-repeat -0px -62px / 146px 132px;
  margin: 0px;
  cursor: pointer;
`;

const SearchInp = styled.input.attrs({
  placeholder: '계정 검색',
})`
  display: block;
  height: 32px;
  border-radius: 32px;
  margin: 8px 0px;
  border: none;
  background-color: var(--main-disabled-color);
  opacity: 0.4;
  padding: 0px 16px;
  font-size: 14px;
  flex-grow: 1;
`;

const SearchBtn = styled(Link)`
  width: 24px;
  height: 24px;
  background: url(${imgSprite}) no-repeat 0px -86px / 146px 132px;
  margin: 12px 0px;
`;

const SaveBtn = styled.button`
  background-color: var(--main-color);
  width: 90px;
  height: 32px;
  color: white;
  border-radius: 1rem;
  margin: 8px 0px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const TitleDiv = styled.div`
  font-family: 'Pretendard-Medium';
  width: auto;
  height: 18px;
  font-size: ${(props) => props.fontSize};
  color: var(--main-text-color);
  font-weight: 700;
  line-height: 16px;
  margin: 15px auto 15px 0px;
`;

export {
  BannerCont,
  BackBtn,
  MoreBtn,
  SearchInp,
  SearchBtn,
  SaveBtn,
  TitleDiv,
};
