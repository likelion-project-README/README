import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const ProfileEditWrap = styled.section`
  width: 390px;
  height: 820px;
`;

export const ProfileEditTit = styled.h2`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const ImgWrap = styled.div`
  margin: 30px 140px;
`;

export const UserImg = styled.img`
  width: 110px;
  height: 110px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
  background-image: url('https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');
  background-size: contain;
`;

export const ImgUploadBtn = styled.button`
  position: relative;
  top: -53px;
  left: 70px;
  /* 스프라이트 수정 후 width, height 36px로 고칠 예정 */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url(${sprite}) -2.5px -2.5px / 183px 144px;
`;

export const ImgUploadLab = styled.label`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const ImgUploadInp = styled.input`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const InputBox = styled.div`
  width: 322px;
  height: 48px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 34px 16px 34px;
`;

export const InputBoxTit = styled.label`
  margin-left: 2px;
  font-weight: 500;
  font-size: 12px;
  color: var(--sub-text-color);
`;

export const InputBoxInp = styled.input`
  font-size: 14px;
  color: var(--main-text-color);
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  text-overflow: ellipsis;

  &::placeholder {
    color: #dbdbdb;
  }
`;
