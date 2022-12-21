import { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import likeAPI from '../../api/likeAPI';
import unlikeAPI from '../../api/unlikeAPI';
import * as S from './Post.Style';

const Post = ({ data, commentCount }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const isMatchProfile = useMatch('/profile/:id');

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

  const goToPostDetail = () => {
    if (isMatchProfile) {
      navigate(`/post/${data.id}`);
    }
  };

  return (
    <>
      <S.UserInfo>
        <S.ProfileImg src={data.author.image} alt='' />
        <div>
          <S.UserName>{data.author.username}</S.UserName>
          <S.AccountName>{data.author.accountname}</S.AccountName>
        </div>
        <S.MoreBtn type='button'>
          <span className='hidden'>더보기</span>
        </S.MoreBtn>
      </S.UserInfo>
      <S.PostContents onClick={goToPostDetail}>
        <S.PostTxt>{data.content}</S.PostTxt>
        {data.image && <S.PostImg src={data.image} alt='' />}
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
