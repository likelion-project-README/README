import TopBanner from '../../common/topBanner/TopBanner';
import PostUserInfo from '../../common/post/postUserInfo/PostUserInfo';
import PostContents from '../../common/post/postContents/PostContents';
import Comment from '../../common/comment/Comment';
import * as S from './PostDetail.Style';

const PostDetail = () => {
  return (
    <S.PostDetail>
      <S.PostDetailTit>게시글 상세 페이지</S.PostDetailTit>
      <S.TopBannerCont>
        <TopBanner type='top-basic-nav' />
      </S.TopBannerCont>
      <S.ScrollWrapper>
        <S.PostCont>
          <PostUserInfo />
          <PostContents />
        </S.PostCont>
        <S.CommentUl>
          <li>
            <S.CommentUserInfo>
              <S.CommentUserImg
                src='https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943__340.jpg'
                alt=''
              />
              <S.CommentUserName>
                유저이름
                <S.CommentCreatedTime>&middot; 5분 전</S.CommentCreatedTime>
              </S.CommentUserName>
              <S.MoreBtn type='button'>
                <span className='hidden'>더보기 버튼</span>
              </S.MoreBtn>
            </S.CommentUserInfo>
            <S.CommentContents>게시글 답글 ~~ !! 최고최고</S.CommentContents>
          </li>
        </S.CommentUl>
      </S.ScrollWrapper>
      <S.CommentInpWrapper>
        <Comment />
      </S.CommentInpWrapper>
    </S.PostDetail>
  );
};

export default PostDetail;
