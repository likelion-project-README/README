import React from 'react';
import * as S from './Comment.Style';

const Comment = () => {
  // atom으로 분리할 것
  // const [InpValue, setInpValue] = useState('');
  // const handleChange = (e) => {
  //   setInpValue(e.target.value);
  // };

  return (
    <S.CommentCont>
      <S.CommentForm>
        <S.UserImg />
        <S.CommentInp
          type='text'
          placeholder='댓글을 입력해 주세요.'
          // onChange={handleChange}
          required
        />
        {/* {InpValue.length > 0 ? (
          <S.PostBtn color='var(--main-color)'>게시</S.PostBtn>
        ) : (
          <S.PostBtn>게시</S.PostBtn>
        )} */}
        <S.PostBtn>게시</S.PostBtn>
      </S.CommentForm>
    </S.CommentCont>
  );
};

export default Comment;
