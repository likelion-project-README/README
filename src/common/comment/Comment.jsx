import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { profileImageData } from '../../atoms/LoginData';
import leaveCommentAPI from '../../api/leaveCommentAPI';
import getCommentListAPI from '../../api/getCommentListAPI';
import * as S from './Comment.Style';

const Comment = ({ postId, setCommentDataArr, setCommentCount }) => {
  const token = localStorage.getItem('token');

  const inpRef = useRef();
  const [inpValue, setInpValue] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);

  const loginedProfileImg = useRecoilValue(profileImageData);

  const handleChange = (e) => {
    setInpValue(e.target.value);
  };

  useEffect(() => {
    if (inpValue.trim() === '') {
      setIsBtnActive(false);
    } else if (inpValue !== '') {
      setIsBtnActive(true);
    }
  }, [inpValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await leaveCommentAPI(inpValue, postId, token);
    const updatedCommentList = await getCommentListAPI(postId, token);
    setCommentDataArr(updatedCommentList);
    setCommentCount(updatedCommentList.length);
    inpRef.current.value = '';
    setInpValue('');
  };

  return (
    <S.CommentCont>
      <S.CommentForm onSubmit={handleSubmit}>
        <S.UserImg src={loginedProfileImg} alt='유저 프로필 이미지' />
        <S.CommentLab htmlFor='comment' />
        <S.CommentInp
          placeholder='댓글을 입력해 주세요.'
          onChange={handleChange}
          required
          id='comment'
          value={inpValue}
          ref={inpRef}
        />
        <S.PostBtn isBtnActive={isBtnActive}>게시</S.PostBtn>
      </S.CommentForm>
    </S.CommentCont>
  );
};

export default Comment;
