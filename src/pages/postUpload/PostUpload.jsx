import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import uploadPostAPI from '../../api/uploadPostAPI';
import * as S from './PostUpload.Style';
import uploadMultipleImgAPI from '../../api/uploadMultipleImgAPI';

const PostUpload = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

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

    const imgUrlList = [...imgPreviewUrls];
    const imgFileList = [...imgFiles];

    if (imgUrlList.length + attachedFiles.length <= 3) {
      [...e.target.files].forEach((imgFile) => {
        const imgUrl = URL.createObjectURL(imgFile);
        imgUrlList.push(imgUrl);
        imgFileList.push(imgFile);
      });
    } else if (imgUrlList.length + attachedFiles.length > 3) {
      alert('이미지는 세 장까지 업로드 가능합니다');
    }
    setImgPreviewUrls(imgUrlList);
    setImgFiles(imgFileList);
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
    const filenameArr = await uploadMultipleImgAPI(formData);
    const {
      post: { id },
    } = await uploadPostAPI(token, textareaVal, filenameArr);
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
          <S.UserProfileImg src='' alt='' />
          <S.ContentsArea>
            <S.Textarea
              placeholder='게시글 입력하기...'
              ref={textareaRef}
              onInput={handleChangeTextarea}
            />
            {imgPreviewUrls &&
              (imgPreviewUrls.length === 1 ? (
                <S.UploadedImgCont>
                  <S.UploadedImg src={imgPreviewUrls[0]} alt='' />
                  <S.DeleteImgBtn type='button' onClick={deleteImg}>
                    <span className='hidden'>이미지 업로드 취소</span>
                  </S.DeleteImgBtn>
                </S.UploadedImgCont>
              ) : (
                <S.MultipleImgScrollCont>
                  {imgPreviewUrls.map((item, index) => (
                    <S.MultipleUploadedImgCont key={item} id={index}>
                      <S.MultipleUploadedImg src={item} alt='' />
                      <S.DeleteImgBtn
                        type='button'
                        onClick={() => deleteImg(index)}
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
