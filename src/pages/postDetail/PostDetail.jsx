import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import TopBanner from '../../common/topBanner/TopBanner';
import Post from '../../common/post/Post';
import Comment from '../../common/comment/Comment';
import PostModal from '../../common/postModal/PostModal';
import getPostDetailAPI from '../../api/getPostDetailAPI';
import getCommentListAPI from '../../api/getCommentListAPI';
import * as S from './PostDetail.Style';
import { accountnameData } from '../../atoms/LoginData';
import Alert from '../../common/alert/Alert';

const PostDetail = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  // 모달창 온오프
  const modalRef = useRef();
  const backgroundRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  // 게시글 상세, 댓글 목록, 댓글 카운트 표시
  const [postDetailData, setPostDetailData] = useState();
  const [commentDataArr, setCommentDataArr] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [isMine, setIsMine] = useState(false);
  const loginedAccountName = useRecoilValue(accountnameData);
  const [commentId, setCommentId] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState('');

  const handleModalOpen = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
    console.log(modalRef.current);
  };

  const handleModalClose = (e) => {
    if (!e.target.dataset.morebtn) {
      setIsModalOpen(false);
    }
  };

  // isMine ?
  const chkIsMine = (accountName) => {
    if (loginedAccountName === accountName) {
      setIsMine(true);
    } else {
      setIsMine(false);
    }
  };
  // accountState,

  const clickMoreBtn = (data) => {
    setModalType('yourComment');
    if (loginedAccountName === data.author.accountname) {
      setModalType('myComment');
    }
    setIsModalOpen(!isModalOpen);
    setCommentId(data);
  };

  useEffect(() => {
    const getPostDetail = async () => {
      const postData = await getPostDetailAPI(id, token);
      setPostDetailData(postData);
      console.log(postData.author.accountname);
      chkIsMine(postData.author.accountname);
    };
    getPostDetail();
    const getCommentList = async () => {
      const commentList = await getCommentListAPI(id, token);
      setCommentDataArr(commentList);
      setCommentCount(commentList.length);
    };
    getCommentList();
  }, []);

  // 댓글 작성시간 계산
  const calCreatedTime = (createdAt) => {
    const differenceMilliseconds = new Date() - new Date(createdAt);
    const seconds = Math.floor(differenceMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return '방금 전';
    }
    if (minutes < 60) {
      return `${minutes}분 전`;
    }
    if (hours < 24) {
      return `${hours}시간 전`;
    }
    if (days < 7) {
      return `${days}일 전`;
    }
    if (weeks < 5) {
      return `${weeks}주 전`;
    }
    if (months < 12) {
      return `${months}개월 전`;
    }
    return `${years}년 전`;
  };

  const goToProfile = (accountname) => {
    navigate(`/profile/${accountname}`);
  };

  return (
    <>
      <S.PostDetail ref={backgroundRef} onClick={handleModalClose}>
        <S.PostDetailTit>게시글 상세 페이지</S.PostDetailTit>
        <TopBanner
          type='top-basic-nav'
          tit='프로필'
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setModalType={setModalType}
        />
        {postDetailData && (
          <S.ScrollWrapper>
            <S.PostCont>
              <Post
                key={postDetailData.id}
                data={postDetailData}
                commentCount={commentCount}
                isMine={isMine}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setModalType={setModalType}
                setModalData={setPostDetailData}
              />
            </S.PostCont>
            {commentDataArr?.length > 0 && (
              <S.CommentUl>
                {commentDataArr?.map((data) => (
                  <li key={data.id}>
                    <S.CommentUserInfo>
                      <S.CommentUserImg
                        src={data.author.image}
                        alt=''
                        onClick={() => goToProfile(data.author.accountname)}
                      />
                      <S.CommentUserName
                        onClick={() => goToProfile(data.author.accountname)}
                      >
                        {data.author.username}
                        <S.CommentCreatedTime>
                          &middot;
                          {`\t${calCreatedTime(data.createdAt)}`}
                        </S.CommentCreatedTime>
                      </S.CommentUserName>
                      <S.MoreBtn
                        type='button'
                        data-morebtn='true'
                        onClick={() => {
                          clickMoreBtn(data);
                        }}
                      >
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
          <Comment
            postId={id}
            setCommentDataArr={setCommentDataArr}
            setCommentCount={setCommentCount}
          />
        </S.CommentInpWrapper>
      </S.PostDetail>
      {isModalOpen ? (
        <div ref={modalRef}>
          <PostModal
            modalType={modalType}
            modalData={postDetailData}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            commentId={commentId}
            isAlertOpen={isAlertOpen}
            setIsAlertOpen={setIsAlertOpen}
            setAlertType={setAlertType}
          />
        </div>
      ) : null}
      {isAlertOpen ? (
        <Alert
          alertType={alertType}
          setIsAlertOpen={setIsAlertOpen}
          modalData={postDetailData}
          commentId={commentId}
        />
      ) : null}
    </>
  );
};

export default PostDetail;
