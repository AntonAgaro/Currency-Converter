import React from 'react';

const CurrencyTableItem = props => {
  const {Name, Value, Nominal, NumCode, CharCode} = props.currency;

  return (
    <tr className="with-hover">
      <td>{Name}</td>
      <td>{Value}</td>
      <td>{Nominal}</td>
      <td>{NumCode}</td>
      <td>{CharCode}</td>
    </tr>
  )
}

export default CurrencyTableItem;
