import styled from 'styled-components';

export const Home = styled.section`
  position: relative;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
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
  min-height: calc(100vh - 109px);
  margin-bottom: 61px;
  text-align: center;
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
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const PostsContUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 16px;
  margin-bottom: 61px;
`;
