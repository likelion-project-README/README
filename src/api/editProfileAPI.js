const editProfileAPI = async (token, userName, userId, userIntro, imgSrc) => {
  try {
    const data = {
      user: {
        username: userName,
        accountname: userId,
        intro: userIntro,
        image: imgSrc,
      },
    };
    await fetch(`https://mandarin.api.weniv.co.kr/user`, {
      method: 'PUT',
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

export default editProfileAPI;
