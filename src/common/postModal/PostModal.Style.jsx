import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 390px;
`;
export const ModalOverlay = styled.div`
  position: absolute;
  width: 390px;
  background-color: white;
  bottom: 0;
  z-index: 10;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
`;
