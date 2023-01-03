import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const PostDetail = styled.section`
  position: relative;
`;

export const PostDetailTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const ScrollWrapper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const PostCont = styled.div`
  padding: 20px 16px 42px;
  border-bottom: 1px solid var(--sub2-text-color);
  overflow: hidden;
`;

export const CommentUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 16px;
  margin-bottom: 60px;
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
  object-fit: cover;
  cursor: pointer;
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
  cursor: pointer;
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
  background: url(${sprite}) -0px -62px / 146px 132px;
`;

export const CommentContents = styled.div`
  margin-left: 48px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--main-text-color);
`;

export const CommentInpWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  border-top: 1px solid var(--sub2-text-color);
  background-color: white;
`;
