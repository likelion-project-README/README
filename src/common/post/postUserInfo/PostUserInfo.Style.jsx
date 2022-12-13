import styled from 'styled-components';
import sprite from '../../../assets/css_sprites.png';

export const UserInfo = styled.div`
  display: flex;
  margin-bottom: 11px;
`;

export const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 50%;
`;

export const UserName = styled.strong`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: var(--main-text-color);
`;

export const AccountName = styled.p`
  margin-top: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: var(--sub-text-color);
`;

export const MoreBtn = styled.button`
  width: 18px;
  height: 18px;
  margin-top: 4px;
  margin-left: auto;
  background: url(${sprite}) no-repeat -118.5px -117.5px / 183px 144px;
`;
