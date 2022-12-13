import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const PostUpload = styled.div`
  width: 390px;
  height: 820px;
`;

export const UploadCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 16px 0;
  border-top: 1px solid #dbdbdb;
`;

export const UserProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

export const ContentsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Textarea = styled.textarea`
  width: 304px;
  margin-top: 12px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--main-text-color);
  resize: none;
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const UploadedImgCont = styled.div`
  position: relative;
  width: 304px;
  height: 228px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  overflow: hidden;
`;

export const UploadedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DeleteImgBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  background: url(${sprite}) -158.5px -2.5px / 183px 144px;
`;

export const AddFileLab = styled.label`
  display: block;
  position: fixed;
  left: 324px;
  bottom: 30px;
  width: 36px;
  height: 36px;
  background: url(${sprite}) -2px -1.9px / 130.7px 103.8px;
  cursor: pointer;
`;
