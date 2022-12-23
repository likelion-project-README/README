import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import Product from '../../common/product/Product';
import Post from '../../common/post/Post';
import Button from '../../common/button/Button';
import TabMenu from '../../common/tabMenu/TabMenu';
import PostModal from '../../common/postModal/PostModal';
import * as S from './Profile.Style';
import loadPostsAPI from '../../api/loadPostsAPI';
import loadProductsAPI from '../../api/loadProductsAPI';
import loadProfileAPI from '../../api/loadProfileAPI';
import Page404 from '../page404/Page404';
import profileImg from '../../assets/logo-profile.svg';
import unfollowAPI from '../../api/unfollowAPI';
import followAPI from '../../api/followAPI';
import SplashPage from '../splash/Splash';

// 로딩중 화면 및, 기능 구현 필요
const Profile = () => {
  console.log('화면 렌더링');
  //  'list' ,'album'
  const [isList, setIsList] = useState(true);
  // 프로필 사용자 유무 확인 및 데이터
  const [isProfile, setIsProfile] = useState(null);
  // 내 프로필 여부
  const [isMine, setIsMine] = useState(null);
  // 모달창 상태값 + 모달타입 상태값
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  // follow 여부
  const [isFollow, setIsFollow] = useState(false);
  // 사용자 게시물 유무 확인 및 데이터
  const [isPostLoad, setIsPostLoad] = useState(null);
  // 사용자 판매상품 유무 확인 및 데이터
  const [isProductLoad, setIsProductLoad] = useState(null);
  // 모달창데이터
  const [modalData, setModalData] = useState(null);

  // 현재 프로필페이지 id확인
  const accountName = useParams().id;
  const navigate = useNavigate();

  const clickFollow = () => {
    if (isFollow) {
      unfollowAPI(accountName);
      setIsFollow(false);
    } else {
      followAPI(accountName);
      setIsFollow(true);
    }
  };
  const loadPost = async () => {
    await loadPostsAPI(accountName).then((data) => {
      setIsPostLoad(data.post);
    });
  };
  const loadProduct = async () => {
    await loadProductsAPI(accountName).then((data) => {
      if (data.data > 0) {
        setIsProductLoad(data.product);
      }
    });
  };
  const loadProfile = async () => {
    await loadProfileAPI(accountName).then((data) => {
      if (data.profile) {
        setIsProfile(data.profile);
        setIsFollow(data.profile.isfollow);
      }
    });
  };

  const loginAPI = async () => {
    try {
      const res = await fetch(`https://mandarin.api.weniv.co.kr/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: 'JourneyJi@abab.com',
            password: 'test123',
          },
        }),
      });
      const resJson = await res.json();
      localStorage.setItem('token', resJson.user.token);
      return resJson;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    loginAPI().then((data) => {
      if (accountName === data.user.accountname) {
        setIsMine(true);
      } else {
        setIsMine(false);
      }
    });
    loadProfile();
    loadProduct();
    loadPost();
  }, []);
  /*
  const [products, setProducts] = useState(null);
  useContext(callProducts()).then((data) => {
    console.log(products);
    console.log(data.product);
  }); */
  /*
  1. 로그인한 사람의 accountname 확인 (atom에 저장된것 불러오기)
  2. 현재 페이지의 accountname 확인 (pathname에서 가져옴)
  3. 1과 2 비교하여 isMine 결정
  4. 
  */

  if (isProfile) {
    return (
      <S.ProfileWrap>
        <TopBanner
          type='top-basic-nav'
          tit='프로필'
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setModalType={setModalType}
        />
        <S.ProfileDiv>
          <S.FollowNPicDiv>
            <S.FollowersLink to={`${window.location.pathname}/followers`}>
              {isProfile.followerCount || 0}
              <S.FollowSpan>followers</S.FollowSpan>
            </S.FollowersLink>
            {isProfile.image === 'http://146.56.183.55:5050/Ellipse.png' ? (
              <S.ProfileImg src={profileImg} />
            ) : (
              <S.ProfileImg src={isProfile.image} />
            )}

            <S.FollowingsLink to={`${window.location.pathname}/followings`}>
              {isProfile.followingCount || 0}
              <S.FollowSpan>followings</S.FollowSpan>
            </S.FollowingsLink>
          </S.FollowNPicDiv>
          <S.TextsCont>
            <S.TitSpan>{isProfile ? isProfile.username : '위니브'}</S.TitSpan>
            <S.IdSpan>@ {isProfile ? isProfile.accountname : 'weniv'}</S.IdSpan>
            <S.ContentSpan>
              {isProfile.intro ? isProfile.intro : '소개글을 입력해주세요'}
            </S.ContentSpan>
          </S.TextsCont>
          <S.BtnsCont>
            {isMine !== null &&
              (isMine ? (
                <>
                  <Button
                    size='md'
                    tit='프로필 수정'
                    state=''
                    txtcolor='black'
                    onClick={() =>
                      navigate(`/profile/${accountName}/editProfile`)
                    }
                  />
                  <Button
                    size='md'
                    tit='상품 등록'
                    state=''
                    txtcolor='black'
                    onClick={() =>
                      navigate(`/profile/${accountName}/addProduct`)
                    }
                  />
                </>
              ) : (
                <>
                  <S.BtnOverlay>
                    <S.ChatBtn />
                  </S.BtnOverlay>
                  {isFollow ? (
                    <Button
                      size='md'
                      tit='언팔로우'
                      isActive={false}
                      onClick={clickFollow}
                    />
                  ) : (
                    <Button
                      size='md'
                      tit='팔로우'
                      isActive={!!true}
                      onClick={clickFollow}
                    />
                  )}
                  <S.BtnOverlay>
                    <S.ShareBtn />
                  </S.BtnOverlay>
                </>
              ))}
          </S.BtnsCont>
        </S.ProfileDiv>
        {/* 판매중인 상품 있으면 페이지로드 없으면 넘어감 */}
        {isProductLoad !== null ? (
          <S.ProductDiv>
            <S.ProductSpan>판매중인 상품</S.ProductSpan>
            <S.ProductCaro>
              {isProductLoad.map((item) => (
                <Product
                  key={item.id}
                  data={item}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  setModalType={setModalType}
                  setModalData={setModalData}
                />
              ))}
            </S.ProductCaro>
          </S.ProductDiv>
        ) : null}

        {/* 게시글 ! */}
        <S.PostsDiv>
          <S.PostBtns>
            <S.ListBtn onClick={() => setIsList(true)} isList={isList} />
            <S.AlbumBtn onClick={() => setIsList(false)} isList={isList} />
          </S.PostBtns>
          {isList ? (
            <S.PostWrap>
              {isPostLoad &&
                isPostLoad.map((item) => (
                  <Post
                    key={item.id}
                    data={item}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    setModalType={setModalType}
                  />
                ))}
            </S.PostWrap>
          ) : (
            <S.ListWrap>
              {isPostLoad &&
                isPostLoad
                  .filter((item) => item.image !== '')
                  .map((item) => (
                    <S.PostImg
                      key={item.id}
                      image={item.image}
                      onClick={() => navigate(`/post/${item.id}`)}
                    />
                  ))}
            </S.ListWrap>
          )}
        </S.PostsDiv>
        <S.FooterWrap>
          <TabMenu />
          {isModalOpen ? (
            <PostModal
              modalType={modalType}
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
              modalData={modalData}
            />
          ) : null}
        </S.FooterWrap>
      </S.ProfileWrap>
    );
  }
  return <SplashPage />;
};

export default Profile;
