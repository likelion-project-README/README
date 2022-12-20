import Btn from './Button.Style';

/*
 * size     - lg, md, sm, xs (피그마 참고)
 *          - 작성하지 않을 경우 default 사이즈로 들어갑니다
 *
 * tit      - 버튼 내부에 들어갈 텍스트를 자유롭게 작성하시면 됩니다
 *
 * state    - active, disabled (배경색을 의미합니다)
 *          - 작성하지 않을 경우 기본값인 흰색으로 들어갑니다
 *
 * txtcolor - black
 *          - 작성하지 않을 경우 기본값인 흰색으로 들어갑니다
 * isActive - true, false
 *          - 작성하지 않을 경우 기본값인 흰색으로 들어갑니다
 */

const Button = ({ size, tit, type, isActive, txtcolor, onClick, disabled }) => {
  return (
    <Btn
      type={type}
      isActive={isActive}
      size={size}
      txtcolor={txtcolor}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{tit}</span>
    </Btn>
  );
};

export default Button;
