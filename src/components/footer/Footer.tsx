import React from 'react';
import './style.css'


import arrow from '../../img/footer/arrow.svg'
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <h1 className='footer__title'>Stay up to date</h1>
                        <div className="footer__search">
                        <input type="text" placeholder="Search.."  className='footer__search__input'/>
                            <button className='btn-search'>
                                <img src={arrow} alt=""/>
                            </button>
                        </div>
                        <div className="footer__text">
                            <p className='footer__text__item'>About us</p>
                            <p className='footer__text__item'>Common Questions</p>
                            <p className='footer__text__item'>Brands</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;