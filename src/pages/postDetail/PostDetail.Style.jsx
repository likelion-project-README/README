import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';
// 주석처리된 코드는 추후 반응형 작업 시 수정 예정입니다

export const PostDetail = styled.section`
  position: relative;
  width: 390px;
  height: 820px;
  /* max-height: calc(100vh - 61px); */
  /* overflow-y: scroll; */
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

export const TopBannerCont = styled.div`
  position: fixed;
  top: 0;
`;

export const ScrollWrapper = styled.div`
  height: 760px;
  margin-top: 48px;
  margin-bottom: 60px;
  overflow-y: scroll;
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

export const CommentInpWrapper = styled.div`
  position: absolute;
  /* position: fixed; */
  bottom: 0px;
  border-top: 1px solid var(--sub2-text-color);
  background-color: white;
`;
