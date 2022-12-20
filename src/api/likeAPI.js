const likeAPI = async (postId, token) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${postId}/heart`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const json = await res.json();
    return json?.post;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default likeAPI;
