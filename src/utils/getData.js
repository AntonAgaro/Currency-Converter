const getData = async () => {
  const res =  await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await res.json();
  return data.Valute;
}

export default getData;