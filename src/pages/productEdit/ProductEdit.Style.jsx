import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const ProductEditWrap = styled.section`
  width: 390px;
  height: 820px;
`;

export const ProductEditTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const ImgWrap = styled.div`
  margin: 30px 34px;
  height: 236px;
`;

export const ImgUploadTit = styled.p`
  font-size: 12px;
  color: var(--sub-text-color);
  margin-bottom: 18px;
`;

export const ImgBox = styled.img.attrs({
  alt: '유저 상품 이미지',
  src: 'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
})`
  width: 322px;
  height: 204px;
  border-radius: 10px;
  object-fit: cover;
  border: 0.5px solid #dbdbdb;
`;

export const ImgUploadBtn = styled.button`
  position: relative;
  top: -46px;
  left: 274px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url(${sprite}) -57.5px -2.5px / 183px 144px;
`;

export const ImgUploadLab = styled.label`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const ImgUploadInp = styled.input`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
