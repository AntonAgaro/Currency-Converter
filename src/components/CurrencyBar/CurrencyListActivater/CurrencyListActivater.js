import React from 'react';

const CurrencyListActivater = props => {
  const renderText = () => {
    if (props.active && !props.mustNoToBeActive) {
      return '^';
    } else {
      return 'v';
    }
  }

  const classes = ['conventer__curr-bar-item'];
  if (props.active && !props.mustNoToBeActive) {
    classes.push('conventer__curr-bar-item--active');
  }
  return (
    <span 
        className={classes.join(' ')}
        onClick={() => props.toggleActive()}
      >
      {renderText()}
      </span>
  )
}


export default CurrencyListActivater;