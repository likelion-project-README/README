import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';
// 주석처리된 코드는 추후 반응형 작업 시 수정 예정입니다

export const PostUpload = styled.section`
  position: relative;
  width: 390px;
  max-height: 100vh;
  /* height: 820px; */
  overflow-y: scroll;
`;

export const PostUploadTit = styled.h2`
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
  z-index: 10;
`;

export const UploadCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding: 20px 16px;
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
  border: 0.5px solid var(--sub2-text-color);
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
  background: url(${sprite}) -122px -48px / 146px 132px;
`;

export const MultipleImgScrollCont = styled.div`
  display: flex;
  width: 304px;
  padding: 10px 0;
  gap: 8px;
  overflow-x: scroll;
`;

export const MultipleUploadedImgCont = styled.div`
  position: relative;
`;

export const MultipleUploadedImg = styled.img`
  width: 168px;
  height: 126px;
  border: 0.5px solid var(--sub2-text-color);
  border-radius: 10px;
  object-fit: cover;
`;

export const AddFileLab = styled.label`
  display: block;
  position: fixed;
  /* position: absolute; */
  left: 324px;
  bottom: 30px;
  width: 36px;
  height: 36px;
  background: url(${sprite}) -36px -0px / 146px 132px;
  cursor: pointer;
`;
