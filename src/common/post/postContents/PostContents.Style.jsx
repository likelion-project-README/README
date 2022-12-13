import styled from 'styled-components';
import sprite from '../../../assets/css_sprites.png';

export const PostContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 304px;
  float: right;
`;

export const PostTxt = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--main-text-color);
`;

export const PostImg = styled.img`
  width: 100%;
  height: 228px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  object-fit: cover;
`;

export const ActionBtns = styled.div`
  display: flex;
  gap: 16px;
`;

export const LikeBtn = styled.button`
  width: 20px;
  height: 20px;
  background: url(${sprite}) no-repeat -98.5px -62.5px / 183px 144px;
`;

export const CommentBtn = styled.button`
  width: 20px;
  height: 20px;
  background: url(${sprite}) no-repeat -158.5px -86px / 183px 144px;
`;

export const CountNum = styled.span`
  margin-left: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: var(--sub-text-color);
`;

export const CreatedDate = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--sub-text-color);
`;
