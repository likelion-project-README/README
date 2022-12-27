import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sprite from '../../../assets/css_sprites.png';

// 프로필 페이지 프로필 부분
export const ProfileDiv = styled.div`
  width: 100%;
  height: 314px;
  display: flex;
  flex-direction: column;
  margin-top: 0.5px;
  margin-bottom: 6px;
  background-color: white;
`;
export const FollowNPicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin: 30px 55px 16px;
`;
export const FollowersLink = styled(Link)`
  font-size: 18px;
  color: var(--main-text-color);
  line-height: 23px;
  font-weight: 700;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
`;

export const FollowSpan = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: var(--sub-text-color);
  margin-top: 6px;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
`;
export const FollowingsLink = styled(Link)`
  font-size: 18px;
  color: var(--sub-text-color);
  line-height: 23px;
  font-weight: 700;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
`;

export const TextsCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 24px;
`;

export const TitSpan = styled.span`
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 6px;
`;

export const IdSpan = styled.span`
  color: var(--sub-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 16px;
`;

export const ContentSpan = styled.span`
  color: var(--sub-text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const BtnsCont = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0px 91px 26px;
  gap: 12px;
`;
export const BtnOverlay = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 100%;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ChatBtn = styled.button`
  width: 21px;
  height: 21px;
  background: url(${sprite}) no-repeat -61.5px -110px/ 146px 132px;
`;
export const ShareBtn = styled.button`
  width: 20px;
  height: 20px;
  background: url(${sprite}) no-repeat -82px -110px/ 146px 132px;
`;
