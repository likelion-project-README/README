const editProfileAPI = async (userName, userId, userIntro, userImg) => {
  try {
    const data = {
      user: {
        username: userName,
        accountname: userId,
        intro: userIntro,
        image: userImg,
      },
    };
    await fetch(`https://mandarin.api.weniv.co.kr/user`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

export default editProfileAPI;
