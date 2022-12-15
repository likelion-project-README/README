import styled from 'styled-components';
import logo from '../../assets/logo-404.svg';

export const PageWrap = styled.section`
  width: 390px;
  height: 820px;
  text-align: center;
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
  width: 196px;
  height: 171px;
  margin: 212px 0 15px 0;
`;

export const Message = styled.p`
  font-size: 14px;
  color: var(--sub-text-color);
  margin-bottom: 36px;
`;
