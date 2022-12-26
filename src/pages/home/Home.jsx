import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import Post from '../../common/post/Post';
import Button from '../../common/button/Button';
import getFollowersPostsAPI from '../../api/getFollowersPostsAPI';
import logoHome from '../../assets/logo-home.svg';
import * as S from './Home.Style';

const Home = () => {
  const token = localStorage.getItem('token');

  const [feedData, setFeedData] = useState([]);

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
      {feedData.length > 0 ? (
        <S.FeedPage>
          <S.PostsContUl>
            {feedData.map((item) => (
              <li key={item.id}>
                <Post data={item} />
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
      </S.TabMenuCont>
    </S.Home>
  );
};

export default Home;
