import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const ProfileEditWrap = styled.section`
  width: 390px;
  height: 820px;
`;

export const ProfileEditTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const ImgWrap = styled.div`
  margin: 30px 140px;
  width: 110px;
  height: 110px;
`;

export const UserImg = styled.img`
  width: 110px;
  height: 110px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImgUploadLab = styled.label`
  display: inline-block;
  position: relative;
  top: -40px;
  left: 73px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url(${sprite}) 0px 0px / 146px 132px;
`;

export const ImgUploadInp = styled.input`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
