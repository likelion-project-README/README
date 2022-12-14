import styled, { keyframes } from 'styled-components';
import logo from './README.svg';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SplashPageWrapper = styled.section`
  width: 390px;
  height: 820px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 196px;
  height: 216px;
  border: 0;
  align-items: center;
  background: url(${logo}) no-repeat;
  animation: ${fadeInOut} 0.5s linear forwards;
`;
