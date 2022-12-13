import styled from 'styled-components';
import imgSprite from '../../assets/css_sprites.png';

const BannerCont = styled.div`
  width: 390px;
  height: 48px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
const BackBtn = styled.button`
  width: 22px;
  height: 22px;
  background: url(${imgSprite}) no-repeat -158px -59px / 183px 144px;
  margin: 13px 0px 13px 16px;
  cursor: pointer;
`;
const MoreBtn = styled.button`
  width: 24px;
  height: 24px;
  background: url(${imgSprite}) no-repeat -31px -117px / 183px 144px;
  margin: 12px;
  cursor: pointer;
`;

const SearchInp = styled.input.attrs({
  placeholder: '계정 검색',
})`
  display: block;
  width: 316px;
  height: 32px;
  border-radius: 32px;
  margin: 8px 16px;
  border: none;
  background-color: var(--main-disabled-color);
  opacity: 0.4;
  padding: 0px 16px;
  font-size: 14px;
`;

const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  background: url(${imgSprite}) no-repeat -60px -88px / 183px 144px;
  margin: 12px 16px;
`;

const SaveBtn = styled.button`
  background-color: var(--main-color);
  width: 90px;
  height: 32px;
  color: white;
  border-radius: 1rem;
  margin: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const TitleDiv = styled.div`
  width: auto;
  height: 18px;
  font-size: 14px;
  color: var(--main-text-color);
  font-weight: 500;
  line-height: 18px;
  margin: 15px auto 15px 10px;
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
