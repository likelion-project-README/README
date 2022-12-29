/* eslint no-underscore-dangle: 0 */
import { useEffect, useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import likeAPI from '../../api/likeAPI';
import unlikeAPI from '../../api/unlikeAPI';
import * as S from './Post.Style';

const Post = ({
  data,
  commentCount,
  isModalOpen,
  isMine,
  setIsModalOpen,
  setModalType,
  setModalData,
}) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const imgSrcArr =
    typeof data.image === 'string' && data.image.substr(0, 4) === 'http'
      ? data.image.split(',')
      : '';
  const [isSingleImg, setIsSingleImg] = useState(false);

  useEffect(() => {
    if (imgSrcArr.length === 1) {
      setIsSingleImg(true);
    }
  }, [imgSrcArr]);

  const [isHearted, setIsHearted] = useState(data.hearted);
  const [heartCount, setHeartCount] = useState(data.heartCount);

  const clickToLike = async (e) => {
    e.stopPropagation();
    const postData = await likeAPI(data.id, token);
    setIsHearted(postData.hearted);
    setHeartCount(postData.heartCount);
  };

  const clickToUnlike = async (e) => {
    e.stopPropagation();
    const postData = await unlikeAPI(data.id, token);
    setIsHearted(postData.hearted);
    setHeartCount(postData.heartCount);
  };

  const isMatchHome = useMatch('/');
  const isMatchProfile = useMatch('/profile/:id');
  const isMatchPostDetail = useMatch(`/post/:id`);

  const goToProfile = () => {
    if (isMatchHome || isMatchPostDetail) {
      navigate(`/profile/${data.author.accountname}`);
    }
  };

  const goToPostDetail = () => {
    if (isMatchProfile || isMatchHome) {
      navigate(`/post/${data.id}`);
    }
  };

  const generateCreatedDate = () => {
    const year = data.updatedAt.split('-')[0];
    const month = data.updatedAt.split('-')[1];
    const date = data.updatedAt.split('-')[2].slice(0, 2);

    return `${year}년 ${month}월 ${date}일`;
  };

  const clickMoreBtn = (e) => {
    e.stopPropagation();
    // 현재 로그인된 accountname 과 data.author.accountname을 비교하여
    // modalType 변경

    setModalType('yourPost');
    if (isMine) {
      setModalType('myPost');
    }
    setModalData(data);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <S.UserInfoCont>
        <S.UserInfo onClick={goToProfile} isMatchProfile={isMatchProfile}>
          <S.ProfileImg src={data.author.image} alt='사용자 프로필 이미지' />
          <div>
            <S.UserName>{data.author.username}</S.UserName>
            <S.AccountName>{data.author.accountname}</S.AccountName>
          </div>
        </S.UserInfo>
        <S.MoreBtn type='button' onClick={clickMoreBtn}>
          <span className='hidden'>더보기</span>
        </S.MoreBtn>
      </S.UserInfoCont>
      <S.PostContents>
        {!data.contents && (
          <S.PostTxt
            onClick={goToPostDetail}
            isMatchPostDetail={isMatchPostDetail}
          >
            {data.content}
          </S.PostTxt>
        )}
        {imgSrcArr[0] && (
          <S.StyledSlider dots draggable>
            {imgSrcArr.map((item) => (
              <S.PostImg
                src={item}
                alt=''
                key={item}
                onClick={goToPostDetail}
                isMatchPostDetail={isMatchPostDetail}
                isSingleImg={isSingleImg}
              />
            ))}
          </S.StyledSlider>
        )}
        <S.ActionBtns>
          <div>
            <S.LikeBtn
              type='button'
              isHearted={isHearted}
              onClick={isHearted ? clickToUnlike : clickToLike}
            >
              <span className='hidden'>좋아요 버튼</span>
            </S.LikeBtn>
            <S.CountNum>{heartCount}</S.CountNum>
          </div>
          <div>
            <S.CommentBtn
              type='button'
              onClick={goToPostDetail}
              isMatchPostDetail={isMatchPostDetail}
            >
              <span className='hidden'>댓글 보기 버튼</span>
            </S.CommentBtn>
            <S.CountNum>{commentCount || data.commentCount}</S.CountNum>
          </div>
        </S.ActionBtns>
        <S.CreatedDate>{generateCreatedDate()}</S.CreatedDate>
      </S.PostContents>
    </>
  );
};

export default Post;
