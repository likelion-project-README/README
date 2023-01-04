import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadPostsAPI } from '../../../api/mandarinAPI';
import Post from '../../../common/post/Post';
import * as S from './PostsDiv.Style';

const PostsDiv = ({
  accountName,
  isMine,
  isModalOpen,
  setIsModalOpen,
  setModalData,
  setModalType,
}) => {
  const [isList, setIsList] = useState(true);

  const [isPostLoad, setIsPostLoad] = useState(null);
  const navigate = useNavigate();

  const loadPost = async () => {
    await loadPostsAPI(accountName).then((data) => {
      setIsPostLoad(data.post);
    });
  };
  useEffect(() => {
    loadPost();
  }, [accountName]);
  return (
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
                isMine={isMine}
                setIsModalOpen={setIsModalOpen}
                setModalType={setModalType}
                setModalData={setModalData}
              />
            ))}
        </S.PostWrap>
      ) : (
        <S.ListWrap>
          {isPostLoad &&
            isPostLoad
              .filter((item) => item.image !== '' && item.image !== undefined)
              .map((item) => (
                <S.PostImg
                  key={item.id}
                  image={item.image?.split(',')[0]}
                  multi={item.image?.split(',').length > 1 && true}
                  onClick={() => {
                    navigate(`/post/${item.id}`);
                  }}
                />
              ))}
        </S.ListWrap>
      )}
    </S.PostsDiv>
  );
};

export default PostsDiv;
