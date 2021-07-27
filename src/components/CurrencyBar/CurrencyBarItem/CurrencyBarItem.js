import React from 'react';
import { useState } from 'react';
import Popup from './Popup/Popup';

const CurrencyBarItem = props => {
  const {id, text, classes, activate} = props;
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  }


  return (
    <span 
        className={classes.join(' ')}
        id={id}
        onClick={activate}
        onMouseEnter={toggleActive}
        onMouseLeave={toggleActive}
      >
      {text}
      <Popup active={active} text={text} />
      </span>
  )
}

export default CurrencyBarItem;