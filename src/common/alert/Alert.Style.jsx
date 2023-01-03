import styled from 'styled-components';

export const AlertBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

export const AlertCont = styled.article`
  width: 252px;
  height: 110px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  position: absolute;
`;

export const AlertOverlay = styled.div`
  width: 252px;
  height: 110px;
  top: 0;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  z-index: 10;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.0975));
`;
export const AlertTxt = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 22px 0;
  color: var(--main-text-color);
`;

export const BtnWrap = styled.div`
  display: flex;
  border-top: 0.5px solid #dbdbdb;
`;

export const Btn = styled.button`
  width: 126px;
  height: 46px;
  font-size: 14px;
  border-right: ${(p) => p.border};
  color: ${(p) => p.color};
`;
