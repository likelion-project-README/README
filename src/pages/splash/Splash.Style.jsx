import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo-splash.svg';

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
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => props.display};
`;

export const LogoImg = styled.div`
  display: inline-block;
  background: url(${logo});
  width: 218px;
  height: 275px;
  animation: ${fadeInOut} 0.5s linear forwards;
`;
