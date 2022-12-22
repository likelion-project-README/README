import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import InputBox from '../../common/inputBox/InputBox';
import uploadImgAPI from '../../api/uploadImgAPI';
import addProductAPI from '../../api/addProductAPI';
import * as S from './AddProduct.Style';
import logoProduct from '../../assets/logo-product.svg';

const AddProduct = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const fileInputRef = useRef();

  const [btnActive, setBtnActive] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productURL, setProductURL] = useState('');
  const [imgSrc, setImgSrc] = useState(logoProduct);
  const [validPrice, setValidPrice] = useState(true);

  // 이미지 업로드
  const uploadImg = async (e) => {
    const imgFile = e.target.files[0];
    const imgUrl = await uploadImgAPI(imgFile);
    setImgSrc(imgUrl);
  };

  // 상품명 공백으로 시작 방지
  const handleProductName = (e) => {
    const NameVal = e.target.value;
    const regex = /^[\s]+/;
    if (regex.test(NameVal)) {
      e.preventDefault();
      alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else {
      setProductName(NameVal);
    }
  };

  // 상품가격 원단위로 변환
  const handleProductPrice = (e) => {
    const priceVal = Number(e.target.value.replaceAll(',', ''));
    const formatValue = priceVal.toLocaleString('ko-KR');
    if (formatValue === 'NaN') {
      e.preventDefault();
    } else {
      setProductPrice(formatValue);
    }
  };

  // 상품가격 1원 이상만 입력 가능
  const handleProductPriceValid = (e) => {
    if (productPrice === '0') {
      setValidPrice(false);
    } else {
      setValidPrice(true);
    }
  };

  // 판매링크 공백으로 시작 방지
  const handleProductURL = (e) => {
    const URLVal = e.target.value;
    const regex = /^[\s]+/;
    if (regex.test(URLVal)) {
      e.preventDefault();
      alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else {
      setProductURL(URLVal);
    }
  };

  // 버튼 활성화
  useEffect(() => {
    if (
      productName.length > 0 &&
      productPrice.length > 0 &&
      productURL.length > 0 &&
      imgSrc !== logoProduct
    ) {
      setBtnActive(true);
    }
  }, [productName, productPrice, productURL, imgSrc]);

  // 상품 등록 데이터 전송
  const addProduct = async (e) => {
    e.preventDefault();
    const result = await addProductAPI(
      token,
      productName,
      Number(productPrice.replaceAll(',', '')),
      productURL,
      imgSrc,
    );
    if (result.message === '필수 입력사항을 입력해주세요.') {
      alert('상품 등록에 실패했습니다.'); // eslint-disable-line no-alert
    } else {
      alert('상품 등록이 완료되었습니다.'); // eslint-disable-line no-alert
      // 유저 프로필 페이지로 이동
      navigate('/profile/:id');
    }
  };

  return (
    <S.AddProductWrap>
      <S.AddProductTit>상품 등록 페이지</S.AddProductTit>
      <form onSubmit={addProduct}>
        <TopBanner type='top-upload-nav' tit='저장' isActive={btnActive} />
        <S.ImgWrap>
          <S.ImgUploadTit>이미지 등록</S.ImgUploadTit>
          <S.ImgBox src={imgSrc} alt='유저 상품 이미지' />
          <S.ImgUploadLab htmlFor='productImg' />
          <S.ImgUploadInp
            type='file'
            id='productImg'
            accept='image/*'
            ref={fileInputRef}
            onChange={uploadImg}
          />
        </S.ImgWrap>
        <InputBox
          label='상품명'
          id='productName'
          placeholder='2~15자 이내여야 합니다.'
          value={productName}
          min='2'
          max='15'
          onChange={handleProductName}
        />
        {validPrice ? (
          <InputBox
            label='가격'
            id='productPrice'
            placeholder='숫자만 입력 가능합니다.'
            value={productPrice}
            onChange={handleProductPrice}
            onBlur={handleProductPriceValid}
          />
        ) : (
          <InputBox
            label='가격'
            id='productPrice'
            placeholder='숫자만 입력 가능합니다.'
            value={productPrice}
            onChange={handleProductPrice}
            onBlur={handleProductPriceValid}
            bottomColor='red'
            message='가격은 1원 이상이어야 합니다.'
            display='yes'
          />
        )}
        <InputBox
          label='판매 링크'
          id='productURL'
          placeholder='URL을 입력해 주세요.'
          value={productURL}
          onChange={handleProductURL}
        />
      </form>
    </S.AddProductWrap>
  );
};

export default AddProduct;
