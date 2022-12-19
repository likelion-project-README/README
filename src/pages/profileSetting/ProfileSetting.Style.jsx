import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';
import logoProfile from '../../assets/logo-profile.svg';

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
`;

export const UserImg = styled.div`
  width: 110px;
  height: 110px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
  background: url(${logoProfile});
  background-size: 110px 110px;
`;

export const ImgUploadBtn = styled.button`
  position: relative;
  top: -40px;
  left: 73px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url(${sprite}) 0px 0px / 146px 132px;
`;

export const ImgUploadLab = styled.label`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
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
