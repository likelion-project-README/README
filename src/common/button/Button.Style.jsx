import styled from 'styled-components';

const Btn = styled.button`
  width: ${(props) => {
    switch (props.size) {
      case 'lg':
        return '100%';
      case 'md':
        return '120px';
      case 'sm':
        return '90px';
      case 'xs':
        return '56px';
      default:
        return '120px';
    }
  }};

  height: ${(props) => {
    switch (props.size) {
      case 'lg':
        return '44px';
      case 'md':
        return '34px';
      case 'sm':
        return '32px';
      case 'xs':
        return '28px';
      default:
        return '44px';
    }
  }};
  border: ${(props) =>
    props.txtcolor === 'black' ? '1px solid var(--sub2-text-color)' : 'none'};
  border-radius: ${(props) => {
    switch (props.size) {
      case 'lg':
        return '44px';
      case 'md':
        return '30px';
      case 'sm':
        return '32px';
      case 'xs':
        return '26px';
      default:
        return '44px';
    }
  }};
  font-weight: ${(props) => (props.size === 'xs' ? '400' : '500')};
  font-size: ${(props) => (props.size === 'xs' ? '12px' : '14px')};
  line-height: ${(props) => (props.size === 'xs' ? '15px' : '18px')};
  background-color: ${(props) => {
    switch (props.isActive) {
      case true:
        return 'var(--main-color)';
      case false:
        return 'var(--main-disabled-color)';
      default:
        return '#ffffff';
    }
  }};
  color: ${(props) =>
    props.txtcolor === 'black' ? 'var(--sub-text-color)' : 'white'};
`;

export default Btn;
