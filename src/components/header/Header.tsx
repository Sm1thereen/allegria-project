import React from 'react';

import './style.css'

import header1 from '../../img/header/header-1.jpg'
import header2 from '../../img/header/header-2.jpg'
const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header__text">
                            <h2 className='header__title'>Brand <br/> American Vintage</h2>
                            <p className="header__subtitle">Look collection</p>
                        </div>
                        <div className="header__img">
                            <img src={header1} alt=""/>
                            <img src={header2} alt=""/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;