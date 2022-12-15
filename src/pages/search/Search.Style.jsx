import styled from 'styled-components';
// 주석처리된 코드는 추후 반응형 작업 시 수정 예정입니다

export const Search = styled.section`
  position: relative;
  width: 390px;
  height: 820px;
  /* max-height: calc(100vh - 60px); */
  /* overflow-y: scroll; */
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
  height: 760px;
  margin-top: 48px;
  margin-bottom: 60px;
  padding: 20px 16px;
  overflow-y: scroll;
`;

export const TabMenuCont = styled.div`
  position: absolute;
  /* position: fixed; */
  bottom: 0px;
  background-color: #ffffff;
`;
