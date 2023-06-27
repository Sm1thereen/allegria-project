import React, {useState} from 'react';
import './style.css'
import {RxDotFilled} from "react-icons/rx";

import americanVintage from '../../img/header/AmericanVintage.jpg';
import georgeGinaLucy from '../../img/header/GeorgeGinaLucy.jpg';
import deha from '../../img/header/Deha.jpg';
import birkenstock from '../../img/header/birkenstock.jpg';



const Header = () => {
    const [currentBanner,setCurrentBanner] = useState(0);
    const banners = [
        {
            image:americanVintage,
            heading:'Brand American Vintage',
            text:'Look collection',
            textClass:'centered-text',
        },
        {
            image:georgeGinaLucy,
            heading:'Brand george gina\n lucy',
            text:'Look collection',
            textClass:'left-aligner-text',
        },
        {
            image:deha,
            heading:'DEHA',
            text:'Look collection',
            textClass:'left-aligner-text',
        },
        {
            image:birkenstock,
            heading:'birkenstock',
            text:'Look collection',
            textClass:'left-aligner-text',
        },
    ];
    const changeBanner = () => {
        const nextBanner = (currentBanner + 1) % banners.length;
        setCurrentBanner(nextBanner)
    }

    const goToSlide = (bannerIndex) =>{
        setCurrentBanner(bannerIndex);
    }

    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header__text">
                            <h2 className='header__title'>{banners[currentBanner].heading}</h2>
                            <p  className="header__subtitle">{banners[currentBanner].text}</p>
                        </div>
                        <div className="header__img">
                            <img src={banners[currentBanner].image} alt=""/>
                        </div>
                        <div className="list-wrapper">
                            <ul className="list-number">
                                    {banners.map((banner,bannerIndex)=> (
                                        <li
                                            key={bannerIndex}
                                            onClick={() => goToSlide(bannerIndex)}
                                            className={`dot-list ${currentBanner === bannerIndex ? 'active' : ''}`}
                                        >
                                            <RxDotFilled />
                                        </li>
                                    ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;

