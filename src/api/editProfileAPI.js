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
    const res = await fetch(`https://mandarin.api.weniv.co.kr/user`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    // if (!res.ok) {
    //   // eslint-disable-next-line no-alert
    //   alert(`${json.message}`);
    // }
    return json.user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default editProfileAPI;
