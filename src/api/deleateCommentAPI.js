const deleteCommentAPI = async (postId, commentId, token) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${postId}/comments/${commentId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export default deleteCommentAPI;
