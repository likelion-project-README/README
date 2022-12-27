import styled from 'styled-components';

export const ChatListWrap = styled.section`
  position: relative;
  width: 390px;
  height: 820px;
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

export const ListCont = styled.div`
  padding: 24px 0;
  /* overflow-y: scroll; */
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  height: 712px;
`;

export const List = styled.ul`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ChatWrap = styled.li`
  width: 358px;
  height: 42px;
  display: flex;
  cursor: pointer;
`;

export const UserImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #dbdbdb;
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
  justify-content: center;
  gap: 4px;
  margin-left: 12px;
`;

export const UserNickName = styled.strong`
  font-size: 14px;
  font-weight: 500;
  color: var(--main-text-color);
`;

export const ChatInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserChat = styled.p`
  width: 238px;
  font-size: 12px;
  line-height: 15px;
  color: var(--sub-text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatDate = styled.span`
  font-size: 10px;
  align-self: flex-end;
  text-align: right;
  color: var(--sub2-text-color);
  margin-left: 20px;
`;

export const TabMenuWrap = styled.div`
  position: absolute;
  bottom: 0px;
`;
