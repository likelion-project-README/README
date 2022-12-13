import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const TabMenuCont = styled.div`
  width: 390px;
  height: 60px;
`;

export const TabMenuUl = styled.ul`
  display: flex;
  gap: 14px;
  justify-content: space-around;
  padding: 0 6px 0 6px;
`;

export const TabMenuLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84px;
  height: 60px;
  padding: 12px 0 2px 0;
  gap: 4px;
  cursor: pointer;
`;

export const IconImg = styled.div`
  width: 24px;
  height: 24px;
  background: url(${sprite}) ${(p) => p.backgroundPosition} / 183px 144px;
`;

export const IconTit = styled.span`
  color: var(--sub-text-color);
  font-size: 10px;
`;
