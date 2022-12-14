import styled from 'styled-components';

export const FollowerListWrap = styled.section`
  position: relative;
  width: 390px;
  height: 820px;
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
  padding: 24px 0;
  overflow-y: scroll;
  height: 712px;
`;

export const List = styled.ul`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TabMenuWrap = styled.div`
  position: absolute;
  bottom: 0px;
`;
