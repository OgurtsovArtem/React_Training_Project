import React from 'react';
import buttonLogo from '../../images/cart.svg';
import Popup from "../Popup/Popup.js";

// ПЕРЕПИСАТЬ КЛАССЫ КОМПОНЕНТА
function NavigationList(props) {
    const [openPopup, setOpenPopup] = React.useState(false)

    function handleChange(params) {
        setOpenPopup(!openPopup)
    }

  return (
    <>
    <nav className={props.className}>
        <ul className="header__nav-ul">
            <li className="header__nav-li">
                <a href="#" className="header__nav-link link link-hover" >
                    Equipment
                </a>
            </li>
            <li className="header__nav-li">
                <a href="#" className="header__nav-link link link-hover" >
                    About us
                </a>
            </li>
            <li className="header__nav-li">
                <a href="#" className="header__nav-link link link-hover" >
                    Blog
                </a>
            </li>
        </ul>
    <button className="header__button button-login" onClick={handleChange} >
            <img className="header__button-img" src={buttonLogo} alt='Icon' />
            <span className="header__button-text">Account</span>
        </button>
    </nav>
    
    </>
  );
}

export default NavigationList;