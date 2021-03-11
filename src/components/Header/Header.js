import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ButtonBurger  from "../ButtonBurger/ButtonBurger.js";
import NavigationList from "../NavigationList/NavigationList.js"


function Header(props) {
    const [isTimeShown, setIsTimeShown] = React.useState(false);

    function handleChange() {
      setIsTimeShown(!isTimeShown);
    }

    const navControll = `header__nav ${isTimeShown ? 'header__open' : ''}`  

  return (
      <header className="header">
        <ButtonBurger onclick={handleChange} isActive={isTimeShown} />
        <div className="header__content width-control">
            <Link to="/" className="header__logo">MNTN</Link>
            <div className="header__nav-block" >
                <NavigationList className={navControll}/>         
            </div>
        </div>
      </header>

  );
}

export default Header;
