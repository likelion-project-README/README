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

export const ImgBox = styled.img`
  width: 322px;
  height: 204px;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  object-fit: cover;
`;

export const ImgUploadLab = styled.label`
  display: inline-block;
  position: relative;
  top: -48px;
  left: 276px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url(${sprite}) 0px 0px / 146px 132px;
  cursor: pointer;
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
