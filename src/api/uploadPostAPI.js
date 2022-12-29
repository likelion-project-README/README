const uploadPostAPI = async (token, textVal, filenameArr) => {
  try {
    const data = {
      post: {
        content: textVal,
        image: filenameArr.join(','),
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
    if (!res.ok) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default uploadPostAPI;
