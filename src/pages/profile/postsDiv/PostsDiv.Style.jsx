import styled, { css } from 'styled-components';
import sprite from '../../../assets/css_sprites.png';

export const PostsDiv = styled.div`
  height: 571px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-bottom: 60px;
`;

export const PostBtns = styled.div`
  display: flex;
  justify-content: right;
  gap: 16px;
  padding: 9px 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const ListBtn = styled.button`
  width: 26px;
  height: 26px;
  background: url(${sprite}) no-repeat -72px 0px / 146px 132px;
  background-position: ${(props) => (props.isList ? 'none' : '-72px -26px')};
`;

export const AlbumBtn = styled.button`
  width: 26px;
  height: 26px;
  background: url(${sprite}) no-repeat 0px -36px / 146px 132px;
  background-position: ${(props) => (!props.isList ? 'none' : '-26px -36px')};
`;

export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const ListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 114px);
  gap: 8px;
  padding: 16px;
  padding-bottom: 76px;
  overflow-y: scroll;
  margin: 0 auto;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  @media screen and (max-width: 740px) {
    grid-template-columns: repeat(5, 114px);
    margin: 0 auto;
  }

  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(4, 114px);
    margin: 0 auto;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(3, 114px);
    margin: 0 auto;
  }

  @media screen and (max-width: 380px) {
    grid-template-columns: repeat(2, 114px);
    margin: 0 auto;
  }
`;

export const PostImg = styled.a`
  position: relative;
  width: 114px;
  height: 114px;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;

  cursor: pointer;
  ${(props) =>
    props.multi &&
    css`
      ::after {
        content: '';
        position: absolute;
        top: 6px;
        right: 6px;
        width: 20px;
        height: 20px;
        background: url(${sprite}) no-repeat -52px -36px / 146px 132px;
      }
    `}
`;
