import styled, { keyframes } from 'styled-components';
import sprite from '../../assets/css_sprites.png';

const FadeIn = keyframes`
from{
  opacity: 0.7;
}
to{
  opacity: 1;
}

`;

const chatFadeIn = keyframes`
from{
  transform: translateX(20%);
  opacity: 0.3;
}
to {
  transform: translateX(0%);
  opacity: 1;
}
`;

export const ChatRoom = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  left: 0;
  right: 0;
  height: 47px;
  background-color: white;
  animation: ${FadeIn} 0.3s ease-in;
`;

export const ChatCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
  min-height: calc(100vh - 109px);
  margin-bottom: 61px;
  padding: 20px 16px 0 16px;
  animation: ${chatFadeIn} 0.2s linear;
  overflow: scroll;
`;

export const YourMsgCont = styled.div`
  display: flex;
`;

export const YourMsgProfileImg = styled.img.attrs({
  src: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  alt: '유저 프로필 이미지',
})`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 50%;
  border: 0.5px solid var(--sub2-text-color);
  object-fit: cover;
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
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 12px 16px;
  border-top: 0.5px solid var(--sub2-text-color);
  background-color: #ffffff;
  animation: ${FadeIn} 0.3s linear;
`;

export const FileInpLab = styled.label`
  width: 36px;
  height: 36px;
  background: url(${sprite}) -36px -0px / 146px 132px;
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
  color: ${(props) => (props.isBtnActive ? 'var(--main-color)' : '#c4c4c4')};
`;
