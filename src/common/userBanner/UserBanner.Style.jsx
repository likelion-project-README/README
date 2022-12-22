import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserBannerWrapper = styled.div`
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

export const UserInfo = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  margin-left: 12px;
  margin-right: auto;
  gap: 6px;
  text-decoration: none;
`;

export const UserNickName = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000;
`;

export const UserId = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: var(--sub-text-color);
`;
