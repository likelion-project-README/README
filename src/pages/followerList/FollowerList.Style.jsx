import styled from 'styled-components';

export const FollowerListWrap = styled.section`
  position: relative;
`;

export const FollowerListTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const ListCont = styled.div`
  display: flex;
  /* overflow-y: scroll; */
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  /* height: 712px; */
`;

export const List = styled.ul`
  padding: 20px 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TabMenuWrap = styled.div`
  position: absolute;
  bottom: 0px;
`;
