import styled, { css } from 'styled-components';

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d4d4d4;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const FooterWrap = styled.div`
  background-color: white;
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  margin: 0 auto;
`;
