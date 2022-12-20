import styled from 'styled-components';

export const Box = styled.div`
  width: 322px;
  height: 48px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 34px 16px 34px;
`;

export const BoxTit = styled.label`
  margin-left: 2px;
  font-weight: 500;
  font-size: 12px;
  color: var(--sub-text-color);
`;

export const BoxInp = styled.input`
  font-size: 14px;
  color: var(--main-text-color);
  padding-bottom: 8px;
  border: none;
  border-bottom: ${(p) =>
    p.bottomColor === 'red'
      ? '1px solid #EB5757'
      : '1px solid var(--sub2-text-color)'};
  text-overflow: ellipsis;
  &::placeholder {
    color: #dbdbdb;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid var(--main-color);
  }
`;

export const InpMessage = styled.p`
  font-size: 12px;
  color: #eb5757;
  margin: -10px 0 16px 34px;
  display: ${(p) => (p.display === 'yes' ? 'block' : 'none')};
`;
