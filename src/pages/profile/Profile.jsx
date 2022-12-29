import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import PostModal from '../../common/postModal/PostModal';
import * as S from './Profile.Style';
import { accountnameData } from '../../atoms/LoginData';
import ProfileDiv from './profileDiv/ProfileDiv';
import ProductDiv from './productDiv/ProductDiv';
import PostsDiv from './postsDiv/PostsDiv';
import Alert from '../../common/alert/Alert';

// 로딩중 화면 및, 기능 구현 필요
const Profile = () => {
  console.log('화면 렌더링');
  // 내 프로필 여부
  const [isMine, setIsMine] = useState(null);
  // 모달창 상태값 + 모달타입 상태값
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  // 모달창데이터
  const [modalData, setModalData] = useState(null);
  // 로그인된 accountname
  const loginedAccountName = useRecoilValue(accountnameData);
  // 현재 프로필페이지 id확인
  const accountName = useParams().id;
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState('');
  const test = useRecoilValue(accountnameData);

  const chkIsMine = () => {
    if (loginedAccountName === accountName) {
      setIsMine(true);
    } else {
      setIsMine(false);
    }
  };

  useEffect(() => {
    console.log(test);
    chkIsMine();
  }, []);

  return (
    <S.ProfileWrap>
      <TopBanner
        type='top-basic-nav'
        tit='프로필'
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setModalType={setModalType}
      />
      <ProfileDiv isMine={isMine} accountName={accountName} />
      {/* 판매중인 상품 있으면 페이지로드 없으면 넘어감 */}
      <ProductDiv
        accountName={accountName}
        isModalOpen={isModalOpen}
        isMine={isMine}
        setIsModalOpen={setIsModalOpen}
        setModalType={setModalType}
        setModalData={setModalData}
      />
      <PostsDiv
        accountName={accountName}
        isMine={isMine}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setModalData={setModalData}
        setModalType={setModalType}
      />
      <S.FooterWrap>
        <TabMenu />
        {isModalOpen ? (
          <PostModal
            modalType={modalType}
            modalData={modalData}
            isModalOpen={isModalOpen}
            isAlertOpen={isAlertOpen}
            setIsModalOpen={setIsModalOpen}
            setIsAlertOpen={setIsAlertOpen}
            setAlertType={setAlertType}
          />
        ) : null}
      </S.FooterWrap>
      {isAlertOpen ? (
        <Alert
          alertType={alertType}
          setIsAlertOpen={setIsAlertOpen}
          modalData={modalData}
        />
      ) : null}
    </S.ProfileWrap>
  );
};

export default Profile;
