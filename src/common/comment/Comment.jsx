import { useRef, useState } from 'react';
import leaveCommentAPI from '../../api/leaveCommentAPI';
import getCommentListAPI from '../../api/getCommentListAPI';
import * as S from './Comment.Style';

const Comment = ({ postId, setCommentArr }) => {
  const token = localStorage.getItem('token');

  const inpRef = useRef();
  const [inpValue, setInpValue] = useState('');

  const handleChange = (e) => {
    setInpValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await leaveCommentAPI(inpValue, postId, token);
    const updatedCommentList = await getCommentListAPI(postId, token);
    setCommentArr(updatedCommentList);
    inpRef.current.value = '';
    setInpValue('');
  };

  return (
    <S.CommentCont>
      <S.CommentForm onSubmit={handleSubmit}>
        <S.UserImg />
        <S.CommentLab htmlFor='comment' />
        <S.CommentInp
          placeholder='댓글을 입력해 주세요.'
          onChange={handleChange}
          required
          id='comment'
          value={inpValue}
          ref={inpRef}
        />
        <S.PostBtn inpValue={inpValue}>게시</S.PostBtn>
      </S.CommentForm>
    </S.CommentCont>
  );
};

export default Comment;
