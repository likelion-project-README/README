const uploadMultipleImgAPI = async (formData) => {
  try {
    const res = await fetch('http://146.56.183.55:5050/image/uploadfiles', {
      method: 'POST',
      body: formData,
    });
    const json = await res.json();
    const filenameArr = json.map((item) => item.filename);
    return filenameArr;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default uploadMultipleImgAPI;
