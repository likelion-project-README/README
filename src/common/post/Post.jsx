import PostUserInfo from './postUserInfo/PostUserInfo';
import PostContents from './postContents/PostContents';
import PostUl from './Post.Style';

const Post = () => {
  return (
    <PostUl>
      {/* 포스트 데이터를 순회하며 li 배열을 반환합니다 */}
      <li>
        <PostUserInfo />
        <PostContents />
      </li>
    </PostUl>
  );
};

export default Post;
