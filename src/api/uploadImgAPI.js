const uploadImgAPI = async (imgFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imgFile);
    const res = await fetch(
      'https://mandarin.api.weniv.co.kr/image/uploadfile',
      {
        method: 'POST',
        body: formData,
      },
    );
    const json = await res.json();
    return `https://mandarin.api.weniv.co.kr/${json.filename}`;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default uploadImgAPI;
