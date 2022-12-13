import styled from 'styled-components';

export const TextActiveWrapper = styled.article`
  width: 322px;
  height: 48px;
  background-color: #fff;
  ::after {
    /* position: absolute; */
    content: '';
    display: inline-block;
    background-color: var(--main-color);
    width: 322px;
    height: 1px;
  }
`;

export const TextEmail = styled.p`
  color: var(--sub-text-color);
  font-weight: 500;
  font-size: 12px;
  align-items: flex-end;
`;

export const InputEmail = styled.input`
  color: #000000;
  font-size: 14px;
  display: flex;
  margin-top: 10px;
`;
