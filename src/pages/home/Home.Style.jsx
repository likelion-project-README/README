import styled from 'styled-components';
// 주석처리된 코드는 추후 반응형 작업 시 수정 예정입니다

export const Home = styled.section`
  position: relative;
  width: 390px;
  height: 820px;
  /* max-height: calc(100vh - 60px); */
  /* overflow-y: scroll; */
`;

export const HomeTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const NoPostsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 760px;
  /* min-height: calc(100vh - 110px); */
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const SearchTxt = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--sub-text-color);
`;

export const FeedPage = styled.div`
  height: 760px;
  overflow-y: scroll;
`;

export const PostsContUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 16px;
  margin-bottom: 61px;
`;

export const TabMenuCont = styled.div`
  position: absolute;
  /* position: fixed; */
  bottom: 0px;
  background-color: #ffffff;
`;
