import React from 'react';
import { useSelector } from 'react-redux';
import './Popup.scss';

const Popup = props => {
  const currencyStorage = useSelector(state => state.coursesReducer);
  
  const classes = ['Popup'];
  if (props.active) {
    classes.push('Popup--active');
  }

  const renderName = () => {
    if (!currencyStorage[props.text]) {
      return 'Российский рубль';
    } else {
      return currencyStorage[props.text].Name;
    }
  }
  return (
    <div className={classes.join(' ')}>
      { renderName() }
    </div>
  )
}

export default Popup;