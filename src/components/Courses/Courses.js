import React, {useState} from 'react';
import './Courses.scss';
import { useSelector } from 'react-redux';
import CurrencyTableItem from './CurrencyTableItem/CurrencyTableItem';
import CurrencyBar from '../CurrencyBar/CurrencyBar';

const Courses = () => {
  const courses = useSelector((state) => state.coursesReducer);
  const [currencyBarItems] = useState(['RUR', 'EUR', 'USD', 'GBP']); 
  const [activeCurrency, setActiveCurrency] = useState(0);
  
  const onChooseActive = id => {
    setActiveCurrency(id);
  }

  return (
    <>
      <div className="container">
        <div className="courses-header">
          <h3 className="courses-title">Курсы валют к:</h3>
          <CurrencyBar items={currencyBarItems} active={activeCurrency} onChooseActive={onChooseActive} />
        </div>
        <table className="currency-table">
          <tbody>
            <tr>
                <th>Наименование валюты</th>
                <th>Курс</th>
                <th>Единиц</th>
                <th>Цифровой код</th>
                <th>Буквенный код</th>
              </tr>
              {Object.keys(courses).map(item => {
                return <CurrencyTableItem key={courses[item].ID} currency={courses[item]}/>
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Courses;