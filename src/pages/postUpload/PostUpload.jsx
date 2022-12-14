import { useCallback, useRef } from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import * as S from './PostUpload.Style';

const PostUpload = () => {
  const txtRef = useRef();
  const handleResizeTextarea = useCallback(() => {
    txtRef.current.style.height = 'auto';
    txtRef.current.style.height = `${txtRef.current.scrollHeight}px`;
  }, []);

  return (
    <S.PostUpload>
      <S.PostUploadTit>게시글 업로드 페이지</S.PostUploadTit>
      <S.TopBannerCont>
        <TopBanner type='top-upload-nav' />
      </S.TopBannerCont>
      <S.UploadCont>
        <S.UserProfileImg
          src='https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943__340.jpg'
          alt=''
        />
        <S.ContentsArea>
          <S.Textarea
            placeholder='게시글 입력하기...'
            ref={txtRef}
            onInput={handleResizeTextarea}
          />
          <S.UploadedImgCont>
            <S.UploadedImg
              src='https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943__340.jpg'
              alt=''
            />
            <S.DeleteImgBtn type='button'>
              <span className='hidden'>이미지 업로드 취소</span>
            </S.DeleteImgBtn>
          </S.UploadedImgCont>
        </S.ContentsArea>
      </S.UploadCont>
      <S.AddFileLab htmlFor='uploadImg'>
        <input type='file' id='uploadImg' accept='image/*' className='hidden' />
      </S.AddFileLab>
    </S.PostUpload>
  );
};

export default PostUpload;
