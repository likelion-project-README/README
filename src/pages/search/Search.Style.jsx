import styled from 'styled-components';

export const Search = styled.section`
  width: 390px;
  max-height: calc(100vh - 60px);
  overflow-y: scroll;
`;

export const SearchTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const TopBannerCont = styled.div`
  position: fixed;
  top: 0;
`;

export const SearchedUserUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;
  padding: 20px 16px;
`;

export const TabMenuCont = styled.div`
  position: fixed;
  bottom: 0px;
  background-color: #ffffff;
`;
