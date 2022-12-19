import { Link } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import Post from '../../common/post/Post';
import Button from '../../common/button/Button';
import * as S from './Home.Style';
import logoHome from '../../assets/logo-home.svg';

const Home = () => {
  return (
    <S.Home>
      <S.HomeTit>리드미 피드</S.HomeTit>
      <TopBanner type='top-main-nav' tit='READEME' />
      {/* 게시글 혹은 팔로잉이 없을 경우 보여지는 페이지입니다 */}
      <S.NoPostsPage>
        <div>
          <S.LogoImg src={logoHome} alt='' />
          <S.SearchTxt>유저를 검색해 팔로우 해보세요!</S.SearchTxt>
          <Link to='/search'>
            <Button tit='검색하기' isActive />
          </Link>
        </div>
      </S.NoPostsPage>
      {/* 게시글이 있을 경우 보여지는 페이지입니다 */}
      {/* <S.FeedPage>
        <S.PostsContUl>
          <Post />
        </S.PostsContUl>
      </S.FeedPage> */}
      <S.TabMenuCont>
        <TabMenu />
      </S.TabMenuCont>
    </S.Home>
  );
};

export default Home;
