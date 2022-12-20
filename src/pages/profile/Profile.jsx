import { useEffect, useState } from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import Product from '../../common/product/Product';
import Post from '../../common/post/Post';
import Button from '../../common/button/Button';
import TabMenu from '../../common/tabMenu/TabMenu';
import PostModal from '../../common/postModal/PostModal';
import * as S from './Profile.Style';

const YourProfile = () => {
  // postType = 'list' ,'album'
  const [isList, setIsList] = useState('list');
  // 내 프로필 여부
  const isMine = false;

  // 판매중인 상품 보유 여부
  const isProduct = true;

  // 모달창 상태값 + 모달타입 상태값
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  // follow 여부
  const [isFollow, setIsFollow] = useState(false);

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
            2950
            <S.FollowSpan>followers</S.FollowSpan>
          </S.FollowersLink>
          <S.ProfileImg />
          <S.FollowingsLink to={`${window.location.pathname}/followings`}>
            128
            <S.FollowSpan>followings</S.FollowSpan>
          </S.FollowingsLink>
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
              <S.BtnOverlay>
                <S.ChatBtn />
              </S.BtnOverlay>
              {isFollow ? (
                <Button
                  size='md'
                  tit='언팔로우'
                  isActive={false}
                  onClick={() => setIsFollow(!isFollow)}
                />
              ) : (
                <Button
                  size='md'
                  tit='팔로우'
                  isActive={!!true}
                  onClick={() => setIsFollow(!isFollow)}
                />
              )}
              <S.BtnOverlay>
                <S.ShareBtn />
              </S.BtnOverlay>
            </>
          )}
        </S.BtnsCont>
      </S.ProfileDiv>
      {/* 판매중인 상품 있으면 페이지로드 없으면 넘어감 */}
      {isProduct ? (
        <S.ProductDiv>
          <S.ProductSpan>판매중인 상품</S.ProductSpan>
          <S.ProductCaro>
            <Product
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setModalType={setModalType}
            />
            <Product
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setModalType={setModalType}
            />
            <Product
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setModalType={setModalType}
            />
          </S.ProductCaro>
        </S.ProductDiv>
      ) : null}
      <S.PostsDiv>
        <S.PostBtns>
          <S.ListBtn onClick={() => setIsList(true)} isList={isList} />
          <S.AlbumBtn onClick={() => setIsList(false)} isList={isList} />
        </S.PostBtns>
        {isList ? (
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
        {/* 음,, modalType을 적절히 바꿔줘야하는데,, */}
        {isModalOpen ? (
          <PostModal modalType={modalType} setIsModalOpen={setIsModalOpen} />
        ) : null}
      </S.FooterWrap>
    </S.ProfileWrap>
  );
};

export default YourProfile;
