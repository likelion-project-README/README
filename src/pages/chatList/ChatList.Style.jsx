import styled from 'styled-components';

export const ChatListWrap = styled.section`
  position: relative;
  padding: 24px 0;
`;

export const ChatListTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const List = styled.ul`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 360px;
`;

export const ChatWrap = styled.li`
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
`;

export const UserImg = styled.img.attrs({
  alt: '유저 프로필 이미지',
})`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #dbdbdb;
  object-fit: cover;
`;

export const UnreadCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--main-color);
  position: absolute;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 5px 0 0 12px;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const UserNickName = styled.strong`
  font-size: 14px;
  font-weight: 500;
  color: var(--main-text-color);
`;

export const ChatInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 12px;
  align-items: center;
`;

export const UserChat = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: var(--sub-text-color);
  /* 한줄 말줄임 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatDate = styled.span`
  font-size: 10px;
  color: var(--sub2-text-color);
`;
