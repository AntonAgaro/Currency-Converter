import React from 'react';
import './Courses.scss';
import { useSelector } from 'react-redux';
import CurrencyTableItem from './CurrencyTableItem/CurrencyTableItem';

const Courses = () => {
  const courses = useSelector((state) => state.coursesReducer);

  const date = new Date();

  return (
    <>
      <div className="container">
        <div className="courses-header">
          <h3 className="courses-title">Курсы иностранных валют к рублю Российской Федерации на {date.toLocaleDateString()}:</h3>
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