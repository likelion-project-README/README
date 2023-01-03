import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import TopBanner from '../../common/topBanner/TopBanner';
import { uploadPostAPI, uploadMultipleImgAPI } from '../../api/mandarinAPI';
import * as S from './PostUpload.Style';
import { profileImageData } from '../../atoms/LoginData';

const PostUpload = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const userProfileImg = useRecoilValue(profileImageData);

  const [imgPreviewUrls, setImgPreviewUrls] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [textareaVal, setTextareaVal] = useState('');
  const [btnActive, setBtnActive] = useState(false);

  const textareaRef = useRef();
  const fileInputRef = useRef();

  useEffect(() => {
    if (textareaVal || imgFiles.length > 0) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [textareaVal, imgPreviewUrls]);

  const handleChangeTextarea = useCallback(
    (e) => {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setTextareaVal(e.target.value);
    },
    [textareaVal],
  );

  const showImgPreview = (e) => {
    const attachedFiles = [...e.target.files];
    const imgPreviews = [...imgPreviewUrls];

    if (imgPreviews.length + attachedFiles.length <= 3) {
      attachedFiles.forEach((imgFile) => {
        const imgUrl = URL.createObjectURL(imgFile);
        setImgPreviewUrls((prev) => [...prev, imgUrl]);
        setImgFiles((prev) => [...prev, imgFile]);
      });
    } else if (imgPreviews.length + attachedFiles.length > 3) {
      // alert('이미지는 세 장까지 업로드 가능합니다'); // eslint-disable-line no-alert
    }
  };

  const deleteImg = (id) => {
    if (imgPreviewUrls.length === 1) {
      setImgPreviewUrls([]);
      setImgFiles([]);
      fileInputRef.current.value = '';
    } else {
      setImgPreviewUrls(imgPreviewUrls.filter((_, index) => index !== id));
      setImgFiles(imgFiles.filter((_, index) => index !== id));
    }
  };

  const uploadPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    imgFiles.forEach((file) => formData.append('image', file));
    const imgUrlArr = await uploadMultipleImgAPI(formData);
    const {
      post: { id },
    } = await uploadPostAPI(token, textareaVal, imgUrlArr);
    if (id) {
      navigate(`/post/${id}`, { replace: true });
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
          <S.UserProfileImg src={userProfileImg} alt='' />
          <S.ContentsArea>
            <S.Textarea
              placeholder='게시글 입력하기...'
              value={textareaVal}
              ref={textareaRef}
              onInput={handleChangeTextarea}
            ></S.Textarea>
            {imgPreviewUrls &&
              (imgPreviewUrls.length === 1 ? (
                <S.SingleImgCont>
                  <S.SingleImg src={imgPreviewUrls[0]} alt='' />
                  <S.DeleteImgBtn type='button' onClick={deleteImg}>
                    <span className='hidden'>이미지 업로드 취소</span>
                  </S.DeleteImgBtn>
                </S.SingleImgCont>
              ) : (
                <S.MultipleImgScrollCont>
                  {imgPreviewUrls.map((item, index) => (
                    <S.MultipleImgCont key={item} id={index}>
                      <S.MultipleImg src={item} alt='' />
                      <S.DeleteImgBtn
                        type='button'
                        onClick={() => deleteImg(index)}
                      >
                        <span className='hidden'>이미지 업로드 취소</span>
                      </S.DeleteImgBtn>
                    </S.MultipleImgCont>
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
