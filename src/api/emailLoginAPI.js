const url = 'https://mandarin.api.weniv.co.kr';

const EmailLoginAPI = {
  async getLogin(email, password) {
    const res = await fetch(`${url}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    });
    const json = await res.json();
    console.log(json);

    const token = data.user('token');
    localStorage.setItem('token', token);
    return data;
  },

  async getJoin(userName, email, password, id, introduce, img) {
    const userData = {
      user: {
        username: userName,
        email: email,
        password: password,
        accountname: id,
        intro: introduce,
        image: img,
      },
    };

    const res = await fetch(`${url}/user`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const json = await res.json();
    return json;
  },
};

export default EmailLoginAPI;
