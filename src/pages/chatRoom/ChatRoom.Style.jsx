import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const ChatRoom = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 390px;
  min-height: calc(100vh - 61px);
  overflow-y: scroll;
  background-color: #f2f2f2;
`;

export const ChatRoomTit = styled.h2`
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

export const ChatCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100vh - 110px);
  padding: 20px 16px;
`;

export const YourMsgCont = styled.div`
  display: flex;
`;

export const YourMsgProfileImg = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 50%;
  border: 0.5px solid var(--sub2-text-color);
`;

export const YourMsgTxt = styled.p`
  max-width: 240px;
  padding: 12px;
  margin-right: 6px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  border-top-left-radius: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--main-text-color);
  background-color: #ffffff;
`;

export const YourMsgImg = styled.img`
  width: 240px;
  height: 240px;
  margin-right: 6px;
  border-radius: 10px;
`;

export const MyMsgCont = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const MyMsgTxt = styled.p`
  max-width: 240px;
  padding: 12px;
  margin-left: 6px;
  border-radius: 10px;
  border-top-right-radius: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  background-color: var(--main-color);
`;

export const MyMsgImg = styled.img`
  width: 240px;
  height: 240px;
  margin-left: 6px;
  border-radius: 10px;
`;

export const CreatedTime = styled.p`
  align-self: flex-end;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: var(--sub-text-color);
`;

export const ChatForm = styled.form`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 18px;
  width: 390px;
  padding: 13px 16px 12px;
  border-top: 0.5 solid var(--sub2-text-color);
  background-color: #ffffff;
`;

export const FileInpLab = styled.label`
  width: 36px;
  height: 36px;
  background: url(${sprite}) -57.5px -2.5px / 183px 144px;
  cursor: pointer;
`;

export const TxtInp = styled.input`
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--main-text-color);
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const SubmitBtn = styled.button`
  margin-left: auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #c4c4c4;
`;
