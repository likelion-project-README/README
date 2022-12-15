import TopBanner from '../../common/topBanner/TopBanner';
import Product from '../../common/product/Product';
import Post from '../../common/post/Post';
import Button from '../../common/button/Button';
import TabMenu from '../../common/tabMenu/TabMenu';
import * as S from './Profile.Style';

const YourProfile = () => {
  const type = 'top-basic-nav';
  const tit = '프로필';
  // postType = 'list' ,'album'
  const postType = 'album';
  const isMine = true;

  // 판매중인 상품 보유 여부
  const isProduct = true;
  return (
    <S.ProfileWrap>
      <TopBanner type={type} tit={tit} />
      <S.ProfileDiv>
        <S.FollowNPicDiv>
          <S.FollowersLink>
            2950
            <S.FollowersSpan>followers</S.FollowersSpan>
          </S.FollowersLink>
          <S.ProfileImg />
          <S.FollowingsSpan>
            128
            <S.FollowersSpan>followings</S.FollowersSpan>
          </S.FollowingsSpan>
        </S.FollowNPicDiv>
        <S.TextsCont>
          <S.TitSpan>애월읍 위니브 감귤농장</S.TitSpan>
          <S.IdSpan>@ weniv_Mandarin</S.IdSpan>
          <S.ContentSpan>
            애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장
          </S.ContentSpan>
        </S.TextsCont>
        <S.BtnsCont>
          {isMine ? (
            <>
              <Button size='md' tit='프로필 수정' state='' txtcolor='black' />
              <Button size='md' tit='상품 등록' state='' txtcolor='black' />
            </>
          ) : (
            <>
              <S.ChatBtn />
              <Button size='md' tit='팔로우' state='active' txtcolor='' />
              <S.ShareBtn />
            </>
          )}
        </S.BtnsCont>
      </S.ProfileDiv>
      {/* 판매중인 상품 있으면 페이지로드 없으면 넘어감 */}
      {isProduct ? (
        <S.ProductDiv>
          <S.ProductSpan>판매중인 상품</S.ProductSpan>
          <S.ProductCaro>
            <Product />
            <Product />
            <Product />
          </S.ProductCaro>
        </S.ProductDiv>
      ) : null}
      <S.PostsDiv>
        <S.PostBtns>
          <S.ListBtn />
          <S.AlbumBtn />
        </S.PostBtns>
        {postType === 'list' ? (
          <S.PostWrap>
            <Post />
            <Post />
          </S.PostWrap>
        ) : (
          <S.ListWrap>
            <S.PostImg />
            <S.PostImg />
            <S.PostImg />
            <S.PostImg />
            <S.PostImg />
            <S.PostImg />
            <S.PostImg />
            <S.PostImg />
            <S.PostImg />
            <S.PostImg />
            <S.PostImg />
            <S.PostImg />
          </S.ListWrap>
        )}
      </S.PostsDiv>
      <S.FooterWrap>
        <TabMenu />
      </S.FooterWrap>
    </S.ProfileWrap>
  );
};

export default YourProfile;
