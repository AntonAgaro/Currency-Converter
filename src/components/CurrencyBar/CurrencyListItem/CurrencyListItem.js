import React from 'react';
import './CurrencyListItem.scss';

const CurrencyListItem = props => {
  return (
    <div 
      onClick={() => {
        props.changeCurrencyBarItems(props.charCode);
        props.toggleActive();
      }} 
      className="CurrencyListItem"
    >
    <div>{props.name}</div>
    <div className="CurrencyListItem__CharCode">{props.charCode}</div>
  </div>
  )
}

export default CurrencyListItem;