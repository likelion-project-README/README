import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import uploadImgAPI from '../../api/uploadImgAPI';
import uploadPostAPI from '../../api/uploadPostAPI';
import * as S from './PostUpload.Style';

const PostUpload = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [imgSrcArr, setImgSrcArr] = useState([]);
  const [textareaVal, setTextareaVal] = useState('');
  const [btnActive, setBtnActive] = useState(false);

  const textareaRef = useRef();
  const fileInputRef = useRef();

  useEffect(() => {
    if (textareaVal || imgSrcArr.length > 0) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [textareaVal, imgSrcArr]);

  const handleChangeTextarea = useCallback(
    (e) => {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setTextareaVal(e.target.value);
    },
    [textareaVal],
  );

  const showImgPreview = async (e) => {
    const attachedFile = e.target.files[0];
    const attachedFiles = e.target.files;
    const imgUrl = await uploadImgAPI(attachedFile);
    if (imgSrcArr.length + attachedFiles.length < 4) {
      setImgSrcArr([...imgSrcArr, imgUrl]);
      console.log(imgSrcArr);
    } else {
      alert('이미지는 세 장까지 업로드 가능합니다');
    }
  };

  const deleteImg = (key) => {
    if (imgSrcArr.length === 1) {
      setImgSrcArr([]);
      fileInputRef.current.value = '';
    } else {
      setImgSrcArr(imgSrcArr.filter((item) => item !== key));
    }
  };

  const uploadPost = async (e) => {
    e.preventDefault();
    const postId = await uploadPostAPI(token, textareaVal, imgSrcArr);
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
              ref={textareaRef}
              onInput={handleChangeTextarea}
            />
            {imgSrcArr &&
              (imgSrcArr.length === 1 ? (
                <S.UploadedImgCont>
                  <S.UploadedImg src={imgSrcArr[0]} alt='' />
                  <S.DeleteImgBtn type='button' onClick={deleteImg}>
                    <span className='hidden'>이미지 업로드 취소</span>
                  </S.DeleteImgBtn>
                </S.UploadedImgCont>
              ) : (
                <S.MultipleImgScrollCont>
                  {imgSrcArr.map((item) => (
                    <S.MultipleUploadedImgCont key={item}>
                      <S.MultipleUploadedImg src={item} alt='' />
                      <S.DeleteImgBtn
                        type='button'
                        onClick={() => deleteImg(item)}
                      >
                        <span className='hidden'>이미지 업로드 취소</span>
                      </S.DeleteImgBtn>
                    </S.MultipleUploadedImgCont>
                  ))}
                </S.MultipleImgScrollCont>
              ))}
          </S.ContentsArea>
        </S.UploadCont>
        <S.AddFileLab htmlFor='uploadImg'>
          <input
            type='file'
            id='uploadImg'
            accept='image/*'
            multiple
            className='hidden'
            ref={fileInputRef}
            onChange={showImgPreview}
          />
        </S.AddFileLab>
      </form>
    </S.PostUpload>
  );
};

export default PostUpload;
