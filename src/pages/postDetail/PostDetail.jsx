import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import Post from '../../common/post/Post';
import Comment from '../../common/comment/Comment';
import PostModal from '../../common/postModal/PostModal';
import getPostDetailAPI from '../../api/getPostDetailAPI';
import * as S from './PostDetail.Style';

const PostDetail = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');

  const moreBtnRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [postDetailData, setPostDetailData] = useState();

  useEffect(() => {
    const getPostDetail = async () => {
      const postData = await getPostDetailAPI(id, token);
      setPostDetailData(postData);
    };
    getPostDetail();
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = (e) => {
    if (e.target !== moreBtnRef.current) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <S.PostDetail onClick={handleModalClose}>
        <S.PostDetailTit>게시글 상세 페이지</S.PostDetailTit>
        <TopBanner
          type='top-basic-nav'
          tit='프로필'
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        {postDetailData && (
          <S.ScrollWrapper>
            <S.PostCont>
              <Post data={postDetailData} />
            </S.PostCont>
            <S.CommentUl>
              <li>
                <S.CommentUserInfo>
                  <S.CommentUserImg
                    src='https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943__340.jpg'
                    alt=''
                  />
                  <S.CommentUserName>
                    서귀포 책벌레
                    <S.CommentCreatedTime>&middot; 5분 전</S.CommentCreatedTime>
                  </S.CommentUserName>
                  <S.MoreBtn
                    type='button'
                    ref={moreBtnRef}
                    onClick={handleModalOpen}
                  >
                    <span className='hidden'>더보기 버튼</span>
                  </S.MoreBtn>
                </S.CommentUserInfo>
                <S.CommentContents>좋은 책 추천 감사해요~!!</S.CommentContents>
              </li>
            </S.CommentUl>
          </S.ScrollWrapper>
        )}
        <S.CommentInpWrapper>
          <Comment />
        </S.CommentInpWrapper>
      </S.PostDetail>
      {isModalOpen ? (
        <PostModal modalType='profile' setIsModalOpen={setIsModalOpen} />
      ) : null}
    </>
  );
};

export default PostDetail;
