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
  border-bottom: 1px solid #dbdbdb;
  text-overflow: ellipsis;
  &::placeholder {
    color: #dbdbdb;
  }
`;
