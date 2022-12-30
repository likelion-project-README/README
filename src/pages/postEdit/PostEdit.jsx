import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import TopBanner from '../../common/topBanner/TopBanner';
import getPostDetailAPI from '../../api/getPostDetailAPI';
import uploadMultipleImgAPI from '../../api/uploadMultipleImgAPI';
import editPostAPI from '../../api/editPostAPI';
import { profileImageData } from '../../atoms/LoginData';
import * as S from './PostEdit.Style';

const PostEdit = () => {
  const token = localStorage.getItem('token');
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const previousUrl = location.state.prevUrl;

  const userProfileImg = useRecoilValue(profileImageData);

  const [imgPreviewUrls, setImgPreviewUrls] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [textareaVal, setTextareaVal] = useState('');
  const [btnActive, setBtnActive] = useState(false);

  useEffect(() => {
    const getPostDetail = async () => {
      const postData = await getPostDetailAPI(id, token);
      setTextareaVal(postData.content);
      if (postData.image) {
        setImgPreviewUrls(postData.image.split(','));
        setImgFiles(postData.image.split(','));
      }
    };
    getPostDetail();
  }, []);

  useEffect(() => {
    if (textareaVal || imgFiles.length > 0) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [textareaVal, imgPreviewUrls]);

  const textareaRef = useRef();
  const fileInputRef = useRef();

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
      alert('이미지는 세 장까지 업로드 가능합니다'); // eslint-disable-line no-alert
    }
  };

  const deleteImg = (imgId) => {
    if (imgPreviewUrls.length === 1) {
      setImgPreviewUrls([]);
      setImgFiles([]);
      fileInputRef.current.value = '';
    } else {
      setImgPreviewUrls(imgPreviewUrls.filter((_, index) => index !== imgId));
      setImgFiles(imgFiles.filter((_, index) => index !== imgId));
    }
  };

  const urlToFileObject = async (imgUrl) => {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg', { type: blob.type });
    return file;
  };

  const editPost = async (e) => {
    e.preventDefault();
    if (btnActive) {
      const convertImgUrlToFile = async () => {
        const convertedFileArr = await Promise.all(
          imgFiles.map(async (item) => {
            if (typeof item !== 'object') {
              const convertedFile = await urlToFileObject(item);
              return convertedFile;
            }
            return item;
          }),
        );
        return convertedFileArr;
      };

      const formData = new FormData();
      const imgFileArr = await convertImgUrlToFile();
      imgFileArr.forEach((file) => formData.append('image', file));

      const imgUrlArr = await uploadMultipleImgAPI(formData);
      await editPostAPI(id, token, textareaVal, imgUrlArr);

      if (previousUrl === 'post') {
        navigate(-1, { replace: true });
      } else if (previousUrl === 'profile') {
        navigate(`/post/${id}`, { replace: true });
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('내용 또는 이미지를 입력해주세요.');
    }
  };

  return (
    <S.PostEdit>
      <S.PostEditTit>게시글 수정 페이지</S.PostEditTit>
      <form onSubmit={editPost}>
        <S.TopBannerCont>
          <TopBanner type='top-upload-nav' tit='저장' isActive={btnActive} />
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
    </S.PostEdit>
  );
};

export default PostEdit;
