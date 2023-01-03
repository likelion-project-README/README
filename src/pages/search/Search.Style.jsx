import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Search = styled.section`
  position: relative;
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

export const SearchedUserUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 16px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const SearchedUser = styled.div`
  max-width: 358px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #dbdbdb;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  margin-left: 12px;
  margin-right: auto;
  gap: 6px;
`;

export const UserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000;
`;

export const AccountName = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: var(--sub-text-color);
`;

export const MatchedSpan = styled.span`
  color: var(--main-color);
`;

export const UserBannerLink = styled(Link)`
  text-decoration: none;
`;

export const TabMenuCont = styled.div`
  position: fixed;
  bottom: 0px;
  background-color: #ffffff;
`;
