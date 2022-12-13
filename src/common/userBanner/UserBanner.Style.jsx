import styled from 'styled-components';

export const UserBannerWrapper = styled.article`
  max-width: 358px;
  position: relative;
  display: flex;
  background-color: #fff;
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #dbdbdb;
`;

export const UserInfo = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

export const UserNickName = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 6px;
  color: #000000;
`;

export const UserId = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: var(--sub-text-color);
`;

export const FollowBtn = styled.button`
  width: 56px;
  height: 28px;
  margin-top: 11px;
  margin-left: auto;
  background-color: var(--main-color);
  border-radius: 30px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
`;
