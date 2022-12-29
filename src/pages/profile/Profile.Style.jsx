import styled, { css } from 'styled-components';

export const ProfileWrap = styled.div`
  width: 390px;
  height: 820px;
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
  width: 390px;
  height: 60px;
  top: 760px;
`;
