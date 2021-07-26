import React from 'react';

const CurrencyBarItem = props => {
  const {id, text, classes, activate} = props;

  return (
    <span 
        className={classes.join(' ')}
        id={id}
        onClick={activate}
      >
      {text}
      </span>
  )
}

export default CurrencyBarItem;