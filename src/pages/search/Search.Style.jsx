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

export const SearchedUserLi = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const UserProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid var(--sub2-text-color);
`;

export const UserName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--main-text-color);
`;

export const AccountName = styled.p`
  margin-top: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--sub-text-color);
`;

export const TabMenuCont = styled.div`
  position: fixed;
  bottom: 0px;
  background-color: #ffffff;
`;
