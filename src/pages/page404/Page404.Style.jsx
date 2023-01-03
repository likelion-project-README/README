import styled from 'styled-components';
import logo from '../../assets/logo-404.svg';

export const PageWrap = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--main-color);
`;

export const PageTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const LogoImg = styled.div`
  display: inline-block;
  background: url(${logo});
  width: 202px;
  height: 187px;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 36px;
`;
