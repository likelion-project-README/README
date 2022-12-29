import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import Post from '../../common/post/Post';
import Button from '../../common/button/Button';
import getFollowersPostsAPI from '../../api/getFollowersPostsAPI';
import logoHome from '../../assets/logo-home.svg';
import * as S from './Home.Style';
import PostModal from '../../common/postModal/PostModal';

const Home = () => {
  const token = localStorage.getItem('token');
  const [feedData, setFeedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalData, setModalData] = useState('');
  useEffect(() => {
    const getFollowersPosts = async () => {
      const followersPosts = await getFollowersPostsAPI(token);
      setFeedData(followersPosts);
    };
    getFollowersPosts();
  }, []);

  return (
    <S.Home>
      <S.HomeTit>리드미 피드</S.HomeTit>
      <TopBanner type='top-main-nav' tit='READEME' />
      {feedData?.length > 0 ? (
        <S.FeedPage>
          <S.PostsContUl>
            {feedData.map((item) => (
              <li key={item.id}>
                <Post
                  key={item.id}
                  data={item}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  setModalType={setModalType}
                  setModalData={setModalData}
                />
              </li>
            ))}
          </S.PostsContUl>
        </S.FeedPage>
      ) : (
        <S.NoPostsPage>
          <div>
            <S.LogoImg src={logoHome} alt='' />
            <S.SearchTxt>유저를 검색해 팔로우 해보세요!</S.SearchTxt>
            <Link to='/search'>
              <Button tit='검색하기' isActive />
            </Link>
          </div>
        </S.NoPostsPage>
      )}
      <S.TabMenuCont>
        <TabMenu />
        {isModalOpen ? (
          <PostModal
            modalType={modalType}
            modalData={modalData}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        ) : null}
      </S.TabMenuCont>
    </S.Home>
  );
};

export default Home;
