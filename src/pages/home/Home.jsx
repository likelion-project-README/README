import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import Post from '../../common/post/Post';
import * as S from './Home.Style';

const Home = () => {
  return (
    <S.Home>
      <S.HomeTit>리드미 피드</S.HomeTit>
      <S.TopBannerCont>
        <TopBanner type='top-main-nav' tit='READEME' />
      </S.TopBannerCont>
      {/* 게시글 혹은 팔로잉이 없을 경우 보여지는 페이지입니다 */}
      <S.NoPostsPage>
        <div>
          <S.LogoImg src='' alt='' />
          <S.SearchTxt>유저를 검색해 팔로우 해보세요!</S.SearchTxt>
          <S.SearchBtn type='button'>검색하기</S.SearchBtn>
        </div>
      </S.NoPostsPage>
      {/* 게시글이 있을 경우 보여지는 페이지입니다
      <S.FeedPage>
        <S.PostsCont>
          <Post />
        </S.PostsCont>
      </S.FeedPage> */}
      <S.TabMenuCont>
        <TabMenu />
      </S.TabMenuCont>
    </S.Home>
  );
};

export default Home;
