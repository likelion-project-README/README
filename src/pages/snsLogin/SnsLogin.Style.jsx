import styled from 'styled-components';
import logo from '../../assets/logo-profile.svg';
import sprite from '../../assets/css_sprites.png';

export const SnsLoginSec = styled.section`
  width: 390px;
  height: 820px;
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 218px;
  height: 275px;
  position: fixed;
  margin-bottom: 94px;
  background: url(${logo}) no-repeat;
`;

export const SnsLoginWrapper = styled.div`
  width: 390px;
  height: 319px;
  display: flex;
  flex-direction: column;
  margin-top: 526px;
  border-radius: 20px;
  background-color: #fff;
  z-index: 10px;
`;

export const KakaoBtn = styled.button`
  margin: 50px 34px 0;
  width: 322px;
  height: 44px;
  position: relative;
  border: #f2c94c solid 1px;
  border-radius: 44px;
  color: var(--sub-text-color);
  font-size: 14px;
  line-height: 18px;
`;

export const KakaoImg = styled.img`
  position: absolute;
  top: 10px;
  left: 14px;
  width: 24px;
  height: 24px;
  background: url(${sprite}) -129.5px -31.5px / 183px 144px;
`;

export const GoogleBtn = styled.button`
  margin: 10px 34px 0;
  width: 322px;
  height: 44px;
  position: relative;
  align-items: center;
  border: var(--sub-text-color) solid 1px;
  border-radius: 44px;
  color: var(--sub-text-color);
  font-size: 14px;
  line-height: 18px;
`;

export const GoogleImg = styled.img`
  position: absolute;
  top: 10px;
  left: 14px;
  width: 24px;
  height: 24px;
  background: url(${sprite}) -129.5px -60.5px / 183px 144px;
`;

export const FacebookBtn = styled.button`
  margin: 10px 34px 0;
  width: 322px;
  height: 44px;
  position: relative;
  border: #2d9cdb solid 1px;
  border-radius: 44px;
  color: var(--sub-text-color);
  font-size: 14px;
  line-height: 18px;
`;

export const FacebookImg = styled.img`
  position: absolute;
  top: 10px;
  left: 14px;
  width: 24px;
  height: 24px;
  background: url(${sprite}) -2.5px -117.5px / 183px 144px;
`;

export const LoginLink = styled.ul`
  margin: 20px auto 82px;
  display: flex;
`;

export const Email = styled.p`
  color: var(--sub-text-color);
  ::after {
    content: '|';
    color: #c4c4c4;
    margin-right: 12px;
    margin-left: 12px;
    line-height: 15px;
  }
`;

export const SignUp = styled.p`
  color: var(--sub-text-color);
`;
