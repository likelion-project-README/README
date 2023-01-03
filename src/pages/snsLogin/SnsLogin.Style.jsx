import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo-login.svg';
import sprite from '../../assets/css_sprites.png';

export const SnsLoginSec = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
`;

export const LogoImg = styled.div`
  width: 218px;
  height: 275px;
  position: fixed;
  margin-top: 180px;
  background: url(${logo});
`;

export const SnsLoginWrapper = styled.div`
  height: 320px;
  width: 100%;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  padding: 50px 34px;
  background-color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
`;

export const KakaoBtn = styled.button`
  position: relative;
  width: 320px;
  padding: 0 14px;
  margin-bottom: 10px;
  border-radius: 44px;
  color: var(--sub-text-color);
  font-size: 14px;
  line-height: 42px;
  border: #f2c94c solid 1px;
`;

export const KakaoImg = styled.div`
  background: url(${sprite}) no-repeat -96px -86px / 146px 132px;
  position: absolute;
  top: 10px;
  left: 14px;
  width: 24px;
  height: 24px;
`;

export const GoogleBtn = styled.button`
  position: relative;
  width: 320px;
  padding: 0 14px;
  margin-bottom: 10px;
  border-radius: 44px;
  color: var(--sub-text-color);
  font-size: 14px;
  line-height: 42px;
  border: var(--sub-text-color) solid 1px;
`;

export const GoogleImg = styled.div`
  position: absolute;
  top: 10px;
  left: 14px;
  width: 24px;
  height: 24px;
  background: url(${sprite}) -122px 0px / 146px 132px;
`;

export const FacebookBtn = styled.button`
  position: relative;
  width: 320px;
  padding: 0 14px;
  margin-bottom: 10px;
  border-radius: 44px;
  color: var(--sub-text-color);
  font-size: 14px;
  line-height: 42px;
  border: #2d9cdb solid 1px;
`;

export const FacebookImg = styled.div`
  position: absolute;
  top: 10px;
  left: 14px;
  width: 24px;
  height: 24px;
  background: url(${sprite}) -122px -24px / 146px 132px;
`;

export const LoginLink = styled.ul`
  margin: 20px auto;
  display: flex;
  font-size: 12px;
  line-height: 15px;
`;

export const EmailLink = styled(Link)`
  text-decoration: none;
  color: var(--sub-text-color);
  margin: 20px auto;
  display: flex;
  ::after {
    content: '|';
    color: #c4c4c4;
    margin-right: 12px;
    margin-left: 12px;
    line-height: 15px;
  }
`;

export const SignUpLink = styled(Link)`
  color: var(--sub-text-color);
  text-decoration: none;
  margin: 20px auto;
`;
