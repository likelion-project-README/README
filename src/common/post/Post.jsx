/* eslint no-underscore-dangle: 0 */
import { useState } from 'react';
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
  const isMatchProfile = useMatch('/profile/:id');
  const isMatchHome = useMatch('/');
  const isMatchPostDetail = useMatch(`/post/:id`);

  const imgSrcArr = data.image.split(',');

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

  const generateCreatedDate = () => {
    const year = data.updatedAt.split('-')[0];
    const month = data.updatedAt.split('-')[1];
    const date = data.updatedAt.split('-')[2].slice(0, 2);

    return `${year}년 ${month}월 ${date}일`;
  };

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
      <S.UserInfo onClick={goToProfile}>
        <S.ProfileImg src={data.author.image} alt='' />
        <div>
          <S.UserName>{data.author.username}</S.UserName>
          <S.AccountName>{data.author.accountname}</S.AccountName>
        </div>
        <S.MoreBtn type='button' onClick={clickMoreBtn}>
          <span className='hidden'>더보기</span>
        </S.MoreBtn>
      </S.UserInfo>
      <S.PostContents onClick={goToPostDetail}>
        <S.PostTxt>{data.content}</S.PostTxt>
        {imgSrcArr.length > 1 ? (
          <S.StyledSlider dots arrows={false}>
            {imgSrcArr.map((item) => (
              <S.PostImg
                src={`https://mandarin.api.weniv.co.kr/${item}`}
                alt=''
                key={item}
              />
            ))}
          </S.StyledSlider>
        ) : (
          <S.PostImg
            src={`https://mandarin.api.weniv.co.kr/${imgSrcArr[0]}`}
            alt=''
          />
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
            <S.CommentBtn type='button'>
              <span className='hidden'>댓글 보기</span>
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
