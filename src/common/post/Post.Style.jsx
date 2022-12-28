import Slider from 'react-slick';
import styled from 'styled-components';
import sprite from '../../assets/css_sprites.png';

export const UserInfoCont = styled.div`
  display: flex;
  margin-bottom: 11px;
`;

export const UserInfo = styled.div`
  display: flex;
  cursor: ${(props) => (props.isMatchProfile ? 'default' : 'pointer')};
`;

export const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.strong`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: var(--main-text-color);
`;

export const AccountName = styled.p`
  margin-top: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: var(--sub-text-color);
`;

export const MoreBtn = styled.button`
  width: 18px;
  height: 18px;
  margin-top: 4px;
  margin-left: auto;
  /* margin-right: 2px; */
  background: url(${sprite}) no-repeat -104.5px -110px / 146px 132px;
`;

export const PostContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 304px;
  margin-left: auto;
`;

export const PostTxt = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--main-text-color);
  cursor: ${(props) => (props.isMatchPostDetail ? 'default' : 'pointer')};
`;

export const PostImgUl = styled.ul`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const PostImg = styled.img`
  width: 304px;
  height: 228px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  object-fit: cover;
  cursor: ${(props) =>
    props.isMatchPostDetail && props.isSingleImg ? 'default' : 'pointer'};
`;

export const ActionBtns = styled.div`
  display: flex;
  gap: 16px;
  cursor: default;
`;

export const LikeBtn = styled.button`
  width: 20px;
  height: 20px;
  background: ${(props) =>
    props.isHearted
      ? `url(${sprite}) no-repeat -42px -110px / 146px 132px`
      : `url(${sprite}) no-repeat -22px -110px / 146px 132px`};
`;

export const CommentBtn = styled.button`
  width: 20px;
  height: 20px;
  background: url(${sprite}) no-repeat -62px -110px / 146px 132px;
  cursor: ${(props) => (props.isMatchPostDetail ? 'default' : 'pointer')};
`;

export const CountNum = styled.span`
  margin-left: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: var(--sub-text-color);
`;

export const CreatedDate = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--sub-text-color);
  cursor: default;
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    position: relative;
    width: 304px;
  }
  .slick-dots {
    position: absolute;
    bottom: 8px;
    li {
      margin-left: -7px;
    }
    button::before {
      color: #ffffff;
      opacity: 1;
    }

    .slick-active {
      button::before {
        opacity: 1;
        color: var(--main-color);
      }
    }
  }
`;
