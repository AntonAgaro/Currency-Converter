import React from 'react';
import './Input.scss';

const Input = props => {
  const {onChangeInputValue, onBlurInput, onFocusInput} = props;
  return (
    <input
      className="conventer__calc-input" 
      onChange={onChangeInputValue} 
      onBlur={onBlurInput}
      onFocus={onFocusInput}
    />
  )
}

export default Input;