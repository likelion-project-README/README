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

const Profile = () => {
  const [isMine, setIsMine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalData, setModalData] = useState(null);
  const loginedAccountName = useRecoilValue(accountnameData);
  const accountName = useParams().id;
  const [test, setTest] = useState(useParams().id);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState('');

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const chkIsMine = () => {
    if (loginedAccountName === accountName) {
      setIsMine(true);
    } else {
      setIsMine(false);
    }
  };

  useEffect(() => {
    chkIsMine();
  }, [test]);

  useEffect(() => {
    if (test !== accountName) {
      console.log('다른페이지');
      setTest(accountName);
    }
  });

  return (
    <>
      <S.ProfileWrap
        onClick={handleModalClose}
        className='max-width min-width wrapper-contents'
      >
        <TopBanner
          type='top-basic-nav'
          tit='프로필'
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setModalType={setModalType}
        />
        <ProfileDiv isMine={isMine} accountName={test} />
        <ProductDiv
          accountName={test}
          isModalOpen={isModalOpen}
          isMine={isMine}
          setIsModalOpen={setIsModalOpen}
          setModalType={setModalType}
          setModalData={setModalData}
        />
        <PostsDiv
          accountName={test}
          isMine={isMine}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setModalData={setModalData}
          setModalType={setModalType}
        />
        <S.FooterWrap>
          <TabMenu />
        </S.FooterWrap>
      </S.ProfileWrap>
      {/* 모달은 밖에 */}
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
      {isAlertOpen ? (
        <Alert
          alertType={alertType}
          setIsAlertOpen={setIsAlertOpen}
          modalData={modalData}
        />
      ) : null}
    </>
  );
};

export default Profile;
