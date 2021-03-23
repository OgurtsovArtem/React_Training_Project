import React from 'react';
import buttonLogo from '../../images/cart.svg';
import { NavLink } from 'react-router-dom';

// ПЕРЕПИСАТЬ КЛАССЫ КОМПОНЕНТА
function NavigationList(props) {
    const [openPopup, setOpenPopup] = React.useState(false)

    function handleChange() {
        setOpenPopup(!openPopup)
    }

  return (
    <>
    <nav className={props.className}>
        <ul className="header__nav-ul">
            <li className="header__nav-li">
                <NavLink to="/gallery" className="header__nav-link link link-hover" >
                    Gallery
                </NavLink>
            </li>
            <li className="header__nav-li">
                <NavLink to="/about-us" className="header__nav-link link link-hover" >
                    About us
                </NavLink>
            </li>
            <li className="header__nav-li">
                <NavLink to="/blog" className="header__nav-link link link-hover" >
                    Blog
                </NavLink>
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