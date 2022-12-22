const addProductAPI = async (
  token,
  productName,
  productPrice,
  productURL,
  productImg,
) => {
  try {
    const data = {
      product: {
        itemName: productName,
        price: productPrice,
        link: productURL,
        itemImage: productImg,
      },
    };
    const res = await fetch('https://mandarin.api.weniv.co.kr/product', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    // return json.product.id;
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default addProductAPI;
