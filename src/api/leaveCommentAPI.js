const leaveCommentAPI = async (txtVal, postId, token) => {
  try {
    const data = {
      comment: {
        content: txtVal,
      },
    };
    await fetch(`https://mandarin.api.weniv.co.kr/post/${postId}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

export default leaveCommentAPI;
