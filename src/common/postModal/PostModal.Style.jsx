import styled, { keyframes } from 'styled-components';

const modalUp = keyframes`
  from{
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

export const ModalWrap = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 390px;
  animation: ${modalUp} 0.5s;
`;
export const ModalOverlay = styled.div`
  position: absolute;
  width: 390px;
  background-color: white;
  bottom: 0;
  z-index: 10;
  //box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.0975));
`;
export const ModalCancleBtn = styled.div`
  width: 50px;
  height: 4px;
  background-color: #dbdbdb;
  border-radius: 5px;
  text-align: center;
  margin: 16px auto;
`;
export const ModalTxt = styled.button`
  width: 100%;
  height: 46px;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  padding: 16px 24px;
  z-index: 20;
`;
