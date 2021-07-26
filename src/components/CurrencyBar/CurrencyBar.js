import CurrencyBarItem from './CurrencyBarItem/CurrencyBarItem';

const CurrencyBar = props => {
  const {items, active, onChooseActive} = props;

  return (
    <div className="conventer__curr-bar">
      {items.map((item, index) => {
        const classes = ['conventer__curr-bar-item'];
        if (active === index) {
          classes.push('conventer__curr-bar-item--active');
        }
        return <CurrencyBarItem 
          id={index} 
          key={index} 
          text={item}
          activate={() => onChooseActive(index)}
          classes={classes}
          />
      })}
      {props.children}
  </div>
  )
}

export default CurrencyBar;