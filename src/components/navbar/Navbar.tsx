import React from 'react';

import logo from '../../img/logo.svg';
import './style.css'
const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <div className="container">
                    
                    <img src={logo} alt=""/>
                    <div className="nav-row">
                        <ul className="nav-list">
                            <li className="nav-list__item"><a href="" className='nav-list__link'>Женщины</a></li>
                            <li className="nav-list__item"><a href="" className='nav-list__link'>Мужчины</a></li>
                            <li className="nav-list__item"><a href="" className='nav-list__link'>Поиск</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;