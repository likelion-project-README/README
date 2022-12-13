import * as S from './PostUserInfo.Style';

const UserInfo = () => {
  return (
    <S.UserInfo>
      <S.ProfileImg
        src='https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943__340.jpg'
        alt='프로필 이미지'
      />
      <div>
        <S.UserName>유저이름</S.UserName>
        <S.AccountName>계정명</S.AccountName>
      </div>
      <S.MoreBtn type='button'>
        <span className='hidden'>더보기</span>
      </S.MoreBtn>
    </S.UserInfo>
    // 여기에 모달 컴포넌트가 들어갑니다
  );
};

export default UserInfo;
