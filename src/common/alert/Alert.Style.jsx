import styled from 'styled-components';

export const AlertCont = styled.article`
  width: 252px;
  height: 110px;
  border-radius: 10px;
  text-align: center;
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
