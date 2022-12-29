import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const ProfileSettingWrap = styled.section`
  width: 390px;
  height: 820px;
`;

export const ProfileSettingTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const Title = styled.strong`
  display: inline-block;
  font-weight: 500;
  font-size: 24px;
  margin: 30px 137px 12px 137px;
  color: var(--main-text-color);
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: center;
  color: var(--sub-text-color);
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
  top: -36px;
  left: 74px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url(${sprite}) 0px 0px / 146px 132px;
  cursor: pointer;
`;

export const ImgUploadInp = styled.input`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const BtnWrap = styled.div`
  margin: 30px 34px;
`;
