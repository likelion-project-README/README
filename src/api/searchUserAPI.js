const searchUserAPI = async (token, keyword) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${keyword}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const json = await res.json();
    return json?.splice(0, 10);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default searchUserAPI;
