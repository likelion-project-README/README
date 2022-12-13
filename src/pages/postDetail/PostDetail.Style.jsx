import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const PostDetail = styled.div`
  width: 390px;
`;

export const PostCont = styled.div`
  padding: 20px 16px 24px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  overflow: hidden;
`;

export const CommentUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 236px;
  padding: 20px 16px 0 16px;
  border-bottom: 1px solid #dbdbdb;
  overflow-y: scroll;
`;

export const CommentUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
  width: 100%;
`;

export const CommentUserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const CommentUserName = styled.strong`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--main-text-color);
`;

export const CommentCreatedTime = styled.span`
  margin-left: 6px;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: var(--sub-text-color);
`;

export const MoreBtn = styled.button`
  width: 24px;
  height: 24px;
  margin-left: auto;
  background: url(${sprite}) -31.5px -117.5px / 183px 144px;
`;

export const CommentContents = styled.div`
  margin-left: 48px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--main-text-color);
`;
