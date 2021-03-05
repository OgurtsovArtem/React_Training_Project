import React from 'react';
import './ButtonBurger.css';

function ButtonBurger(props) {
  let className = `button__burger`;
  
  if(props.isActive) {
    className += ` active`;
  }

  return (
    <>
    <button className={className} onClick={props.onclick}>
    </button>
    </>
  );
}

export default ButtonBurger;
