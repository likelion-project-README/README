import * as S from './PostContents.Style';

const PostContents = () => {
  return (
    <S.PostContents>
      <S.PostTxt>
        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
        이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
        뛰노는 인생의 힘있다.
      </S.PostTxt>
      <S.PostImg
        src='https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943__340.jpg'
        alt=''
      />
      <S.ActionBtns>
        <div>
          <S.LikeBtn type='button'>
            <span className='hidden'>좋아요 버튼</span>
          </S.LikeBtn>
          <S.CountNum>0</S.CountNum>
        </div>
        <div>
          <S.CommentBtn type='button'>
            <span className='hidden'>댓글 보기</span>
          </S.CommentBtn>
          <S.CountNum>0</S.CountNum>
        </div>
      </S.ActionBtns>
      <S.CreatedDate>0000년 00월 00일</S.CreatedDate>
    </S.PostContents>
  );
};

export default PostContents;
