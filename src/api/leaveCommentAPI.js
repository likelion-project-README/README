const leaveCommentAPI = async (txtVal, postId, token) => {
  try {
    const data = {
      comment: {
        content: txtVal,
      },
    };
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${postId}/comments`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    const json = await res.json();
    if (!res.ok) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export default leaveCommentAPI;
