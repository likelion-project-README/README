const getEmailLoginAPI = async (event) => {
  event.preventDefault();
  try {
    const res = await fetch('https://mandarin.api.weniv.co.kr/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const json = await res.json();
    console.log(json);

    // const token = data.user('token');
    // localStorage.setItem('token', token);
    // return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getEmailLoginAPI;
//   async getJoin(userName, email, password, id, introduce, img) {
//     const userData = {
//       user: {
//         username: userName,
//         email: email,
//         password: password,
//         accountname: id,
//         intro: introduce,
//         image: img,
//       },
//     };

//     const res = await fetch('https://mandarin.api.weniv.co.kr/user', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });

//     const json = await res.json();
//     return json;
//   },
// };
