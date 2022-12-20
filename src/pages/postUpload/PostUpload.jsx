import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import uploadImgAPI from '../../api/uploadImgAPI';
import uploadPostAPI from '../../api/uploadPostAPI';
import * as S from './PostUpload.Style';

const PostUpload = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [imgSrc, setImgSrc] = useState('');
  const [textareaVal, setTextareaVal] = useState('');
  const [btnActive, setBtnActive] = useState(false);

  const testareaRef = useRef();
  const fileInputRef = useRef();

  const handleChangeTextarea = useCallback(
    (e) => {
      testareaRef.current.style.height = 'auto';
      testareaRef.current.style.height = `${testareaRef.current.scrollHeight}px`;
      setTextareaVal(e.target.value);
    },
    [textareaVal],
  );

  const activeUploadBtn = () => {
    return textareaVal || imgSrc ? setBtnActive(true) : setBtnActive(false);
  };

  const uploadImg = async (e) => {
    const imgFile = e.target.files[0];
    const imgUrl = await uploadImgAPI(imgFile);
    setImgSrc(imgUrl);
    setBtnActive(true);
  };

  const deleteImg = () => {
    setImgSrc(null);
    fileInputRef.current.value = '';
    if (!textareaVal) {
      setBtnActive(false);
    }
  };

  const uploadPost = async (e) => {
    e.preventDefault();
    const postId = await uploadPostAPI(token, textareaVal, imgSrc);
    if (postId) {
      navigate(`/post/${postId}`, { replace: true });
    }
  };

  return (
    <S.PostUpload>
      <S.PostUploadTit>게시글 업로드 페이지</S.PostUploadTit>
      <form onSubmit={uploadPost}>
        <S.TopBannerCont>
          <TopBanner type='top-upload-nav' tit='업로드' isActive={btnActive} />
        </S.TopBannerCont>
        <S.UploadCont>
          <S.UserProfileImg src='' alt='' />
          <S.ContentsArea>
            <S.Textarea
              placeholder='게시글 입력하기...'
              ref={testareaRef}
              onInput={handleChangeTextarea}
              onKeyUp={activeUploadBtn}
            />
            {imgSrc && (
              <S.UploadedImgCont>
                <S.UploadedImg src={imgSrc} alt='' />
                <S.DeleteImgBtn type='button' onClick={deleteImg}>
                  <span className='hidden'>이미지 업로드 취소</span>
                </S.DeleteImgBtn>
              </S.UploadedImgCont>
            )}
          </S.ContentsArea>
        </S.UploadCont>
        <S.AddFileLab htmlFor='uploadImg'>
          <input
            type='file'
            id='uploadImg'
            accept='image/*'
            className='hidden'
            ref={fileInputRef}
            onChange={uploadImg}
          />
        </S.AddFileLab>
      </form>
    </S.PostUpload>
  );
};

export default PostUpload;
