import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CurrencyBar from '../CurrencyBar/CurrencyBar';
import CurrencyListActivater from '../CurrencyBar/CurrencyListActivater/CurrencyListActivater';
import CurrencyList from '../CurrencyBar/CurrencyList/CurrencyList';
import Input from '../UI/Input/Input';
import './Converter.scss';
import transfer from './transfer.svg';

const Converter = () => {
  const currencyStorage = useSelector(state => state.coursesReducer);
  const [currencyBarItems, setCurrencyBarItems] = useState(['RUR', 'EUR', 'USD', 'GBP']);
  const [purchasingBarItems, setPurchasingBarItems] = useState(['RUR', 'EUR', 'USD', 'GBP']);
  const [activeAvailableList, setActiveAvailableList] = useState(false);
  const [activePurchaseList, setActivePurchaseList] = useState(false);
  const [availableActive, setAvailableActive] = useState(0);
  const [availableInfo, setAvailableInfo] = useState(0);
  const [purchasingInfo, setPurchasingInfo] = useState(0);
  const [purchasingActive, setPurchasingActive] = useState(0);
  const [availableValue, setAvailableValue] = useState(0);
  const [resultCost, setResultCost] = useState(0);
  
  const onChooseAvailableActive = id => {
    setAvailableActive(id);
  }

  const onChoosePurchasingActive = id => {
    setPurchasingActive(id);
  }

  const validateInputValue = value => {
    value = value.slice(0, 10).replace(/[^\d.]/g, '');
    if (value.match(/\./) && value.match(/\./g).length > 1) {
      value = value.substring(0, value.lastIndexOf('.'));
    }
    return value;
  }

  const splitDigitsOfNumber = value => {
    const arrayOfValueParts = value.toString().split('.');
    arrayOfValueParts[0] = arrayOfValueParts[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    return arrayOfValueParts.join('.');
  }

  const onChangeInputValue = event => {
    event.target.value = validateInputValue(event.target.value);
    setAvailableValue(+event.target.value);
  }

  const onFocusInput = event => {
    if (availableValue > 0) {
      event.target.value = availableValue;
    } else {
      event.target.value = '';
    }
  }

  const onBlurInput = event => {
    event.target.value = splitDigitsOfNumber(event.target.value);
  }

  const calculateResult = () => {
    const available = currencyStorage[currencyBarItems[availableActive]];
    const purchasing = currencyStorage[purchasingBarItems[purchasingActive]];
    if (purchasing) {
      //Если текущая валюта RUR
      if (!available) {
        setResultCost(availableValue / (purchasing.Value / purchasing.Nominal));
        setAvailableInfo((1 / (purchasing.Value / purchasing.Nominal)).toFixed(4));
        setPurchasingInfo(purchasing.Value / purchasing.Nominal);
      }
      // Текущая любая другая
      if (available) {
        setResultCost(availableValue * ((available.Value / available.Nominal) / (purchasing.Value / purchasing.Nominal)));
        setAvailableInfo(((available.Value / available.Nominal) / purchasing.Value / purchasing.Nominal).toFixed(4));
        setPurchasingInfo(((purchasing.Value / purchasing.Nominal) / (available.Value / available.Nominal)).toFixed(4));
      }
    }
    //Если приобретаемая RUR
    if (!purchasing) {
      //Если и текущая RUR
      if (!available) {
        setResultCost(availableValue);
        setAvailableInfo(1);
        setPurchasingInfo(1);
      }
      //Если текущая любая другая
      if (available) {
        setResultCost(availableValue * (available.Value / available.Nominal));
        setAvailableInfo(((available.Value / available.Nominal)).toFixed(4));
        setPurchasingInfo((1 / (available.Value / available.Nominal)).toFixed(4));
      }
    }
  }

  useEffect(() => {
    calculateResult();
  })

  //Регулятор размера шрифта в инпуте результата
  const fontSizeRegulator = () => {
    if (resultCost.toString().split('.')[0].length > 10) {
      return '1.5rem';
    } else {
      return '2rem';
    }
  }

  //Активация блока со всей валютой
  const toggleAvailableList = () => {
    setActiveAvailableList(!activeAvailableList);
  }

  const togglePurchasingList = () => {
    setActivePurchaseList(!activePurchaseList);
  }

  //Изменение панели с валютой
  const changeCurrencyBarItems = newItem => {
    const newBar = currencyBarItems.slice();
    newBar.pop();
    newBar.push(newItem);
    setCurrencyBarItems(newBar);
  }

  const changePurchasingBarItems = newItem => {
    const newBar = purchasingBarItems.slice();
    newBar.pop();
    newBar.push(newItem);
    setPurchasingBarItems(newBar);
  }
  
  return (
    <>
      <div className="container">
        <div className="conventer__wrapper">
        <CurrencyList active={activeAvailableList} changeCurrencyBarItems={changeCurrencyBarItems} toggleActive={toggleAvailableList}/>
        <CurrencyList active={activePurchaseList} changeCurrencyBarItems={changePurchasingBarItems} toggleActive={togglePurchasingList}/>
        <div className="conventer__header">
          <div className="conventer__header-item">
            <h3 className="conventer__title">У меня есть:</h3>
            <CurrencyBar items={currencyBarItems} active={availableActive} onChooseActive={onChooseAvailableActive}>
            <CurrencyListActivater active={activeAvailableList} toggleActive={toggleAvailableList}/>
            </CurrencyBar>
          </div>
          <div className="conventer__header-item">
            <h3 className="conventer__title">Хочу приобрести:</h3>
            <CurrencyBar items={purchasingBarItems} active={purchasingActive} onChooseActive={onChoosePurchasingActive}>
            <CurrencyListActivater active={activePurchaseList} toggleActive={togglePurchasingList}/>
            </CurrencyBar>
          </div>
        </div>
        <div className="conventer__calc">
          <div className="conventer__calc-item">
            <Input onChangeInputValue={onChangeInputValue} value={availableValue} onFocusInput={onFocusInput} onBlurInput={onBlurInput}/>
            <div className="conventer__calc-info">
              {availableValue === 0 ? null : `1 ${currencyBarItems[availableActive]} = ${availableInfo} ${purchasingBarItems[purchasingActive]}`}
            </div>
          </div>
          <img className="conventer__calc-img"  src={transfer} alt="transfer" />
          <div className="conventer__calc-item">
            <div style={{fontSize: `${fontSizeRegulator()}`}} className="conventer__calc-input">
              {resultCost === 0 ? '' : splitDigitsOfNumber(resultCost.toFixed(4))}
            </div>
            <div className="conventer__calc-info">
              {resultCost === 0 ? null : `1 ${purchasingBarItems[purchasingActive]} = ${purchasingInfo} ${currencyBarItems[availableActive]}`}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Converter;