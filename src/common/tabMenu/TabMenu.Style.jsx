import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const TabMenuCont = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 0.5px solid var(--sub2-text-color);
`;

export const TabMenuUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  max-width: 800px;
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
  background: url(${sprite}) ${(p) => p.backgroundPosition} / 146px 132px;
`;

export const IconTit = styled.span`
  color: var(--sub-text-color);
  font-size: 10px;
`;
