import React from 'react';
import { useSelector } from 'react-redux';
import CurrencyListItem from '../CurrencyListItem/CurrencyListItem';
import './CurrencyList.scss';

const CurrencyList = props => {
  const currencies = useSelector(state => state.coursesReducer);

  const classes = ['CurrencyList'];
  if (props.active && !document.querySelector('.CurrencyList--active')) {
    classes.push('CurrencyList--active')
  }


  return (
    <div className={classes.join(' ')}>
      {Object.keys(currencies).map((item, index) => {
        return (
          <CurrencyListItem 
            key={index} 
            name={currencies[item].Name} 
            charCode={currencies[item].CharCode} 
            changeCurrencyBarItems={props.changeCurrencyBarItems}
            toggleActive={props.toggleActive}  
            />
        )
      })}
    </div>
  )
}

export default CurrencyList;
