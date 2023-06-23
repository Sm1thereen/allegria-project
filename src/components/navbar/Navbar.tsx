import React from 'react';

import logo from '../../img/logo.svg';
import profile from '../../img/icons/profile.svg';
import like from '../../img/icons/like.svg';
import shop from '../../img/icons/shop.svg';

import './style.css'

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <div className="nav-logo">
                            <a href="#!" >
                                <img src={logo} alt=""/>
                            </a>
                        </div>
                        <ul className="nav-list">
                            <li className="nav-list__item"><a href="" className='nav-list__link'>Women</a></li>
                            <li className="nav-list__item"><a href="" className='nav-list__link'>Men</a></li>
                            <li className="nav-list__item"><a href="" className='nav-list__link'>Search</a></li>
                            <li><input type="text" placeholder="Search.." className='search'/></li>
                        </ul>
                        <ul className='language-list'>
                            <li className='language-list__item'><a href="" className='language-list__item__link'>UA</a></li>
                            <li className='language-list__item'><a href="" className='language-list__item__link'>EN</a></li>
                        </ul>
                        <ul className="icon-list">
                            <li className="icon-list__item"><a href=""><img src={profile} alt=""/></a></li>
                            <li className="icon-list__item"><a href=""><img src={like} alt=""/></a></li>
                            <li className="icon-list__item"><a href=""><img src={shop} alt=""/></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;