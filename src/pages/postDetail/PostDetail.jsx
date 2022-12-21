import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import Post from '../../common/post/Post';
import Comment from '../../common/comment/Comment';
import PostModal from '../../common/postModal/PostModal';
import getPostDetailAPI from '../../api/getPostDetailAPI';
import getCommentListAPI from '../../api/getCommentListAPI';
import * as S from './PostDetail.Style';

const PostDetail = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');

  const modalRef = useRef();
  const backgroundRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };

  const handleModalClose = (e) => {
    console.log(e.target);
    if (e.target !== modalRef.current) {
      setIsModalOpen(false);
    }
  };

  const [postDetailData, setPostDetailData] = useState();
  const [commentArr, setCommentArr] = useState([]);

  useEffect(() => {
    const getPostDetail = async () => {
      const postData = await getPostDetailAPI(id, token);
      setPostDetailData(postData);
    };
    getPostDetail();

    const getCommentList = async () => {
      const commentList = await getCommentListAPI(id, token);
      setCommentArr(commentList);
    };
    getCommentList();
  }, []);

  console.log('렌더링');
  return (
    <>
      <S.PostDetail onClick={handleModalClose} ref={backgroundRef}>
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
            {commentArr?.length > 0 && (
              <S.CommentUl>
                {commentArr?.map((data) => (
                  <li key={data.id}>
                    <S.CommentUserInfo>
                      <S.CommentUserImg src={data.author.image} alt='' />
                      <S.CommentUserName>
                        {data.author.username}
                        <S.CommentCreatedTime>
                          &middot; 방금 전
                        </S.CommentCreatedTime>
                      </S.CommentUserName>
                      <S.MoreBtn type='button' onClick={handleModalOpen}>
                        <span className='hidden'>더보기 버튼</span>
                      </S.MoreBtn>
                    </S.CommentUserInfo>
                    <S.CommentContents>{data.content}</S.CommentContents>
                  </li>
                ))}
              </S.CommentUl>
            )}
          </S.ScrollWrapper>
        )}
        <S.CommentInpWrapper>
          <Comment postId={id} setCommentArr={setCommentArr} />
        </S.CommentInpWrapper>
      </S.PostDetail>
      {isModalOpen ? (
        <div ref={modalRef}>
          <PostModal modalType='profile' setIsModalOpen={setIsModalOpen} />
        </div>
      ) : null}
    </>
  );
};

export default PostDetail;
