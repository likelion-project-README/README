import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Post.Style';

const Post = ({ data }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const generateCreatedDate = () => {
    const year = data.updatedAt.split('-')[0];
    const month = data.updatedAt.split('-')[1];
    const date = data.updatedAt.split('-')[2].slice(0, 2);

    return `${year}년 ${month}월 ${date}일`;
  };

  const [isHearted, setIsHearted] = useState(data.hearted);

  const toHearted = async (e) => {
    e.stopPropagation();
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/post/${data.id}/heart`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      const json = await res.json();
      setIsHearted(json?.post?.hearted);
    } catch (error) {
      console.log(error);
    }
  };

  const toUnhearted = async (e) => {
    e.stopPropagation();
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/post/${data.id}/unheart`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );
      const json = await res.json();
      setIsHearted(json?.post?.hearted);
    } catch (error) {
      console.log(error);
    }
  };

  const goToPostDetail = () => {
    navigate(`/post/${data.id}`);
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
              onClick={isHearted ? toUnhearted : toHearted}
            >
              <span className='hidden'>좋아요 버튼</span>
            </S.LikeBtn>
            <S.CountNum>{isHearted ? '1' : '0'}</S.CountNum>
          </div>
          <div>
            <S.CommentBtn type='button'>
              <span className='hidden'>댓글 보기</span>
            </S.CommentBtn>
            <S.CountNum>0</S.CountNum>
          </div>
        </S.ActionBtns>
        <S.CreatedDate>{generateCreatedDate()}</S.CreatedDate>
      </S.PostContents>
    </>
  );
};

export default Post;
