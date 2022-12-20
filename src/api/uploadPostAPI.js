const uploadPostAPI = async (token, textVal, imgSrc) => {
  try {
    const data = {
      post: {
        content: textVal,
        image: imgSrc,
      },
    };
    const res = await fetch('https://mandarin.api.weniv.co.kr/post', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json?.post?.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default uploadPostAPI;
