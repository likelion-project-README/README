import styled from 'styled-components';

export const Home = styled.section`
  width: 390px;
  max-height: calc(100vh - 60px);
  overflow-y: scroll;
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

export const TopBannerCont = styled.div`
  position: fixed;
  top: 0;
`;

export const NoPostsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: calc(100vh - 110px);
  margin-top: 48px;
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

export const SearchBtn = styled.button`
  padding: 13px 34px;
  border-radius: 44px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  background-color: var(--main-color);
`;

export const FeedPage = styled.div`
  margin-top: 48px;
`;

export const PostsCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 16px;
`;

export const TabMenuCont = styled.div`
  position: fixed;
  bottom: 0px;
  background-color: #ffffff;
`;
