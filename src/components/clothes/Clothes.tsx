import React from 'react';
import './style.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../img/clothes/jacket.jpg';
import img2 from '../../img/clothes/singlet.jpg';
import img3 from '../../img/clothes/blouse.jpg';
import img4 from '../../img/clothes/t-shirt.jpg';
const Clothes = () => {

    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
    };

    return (
        <div>
            <div className="container">
                <div className="clothes-popular">
                    <h2 className='clothes-title'>Popular</h2>
                    <div className="clothes-wrapper">
                        <ul className="clothes-slider">
                            <li className="clothes-slider__item">
                                <div className="item__img">
                                    <img src={img1} alt=""/>
                                </div>
                                <div className="item__text">
                                    <h2 className='item__title'>Replay</h2>
                                    <p className='item__description'>Classic Shoes</p>
                                    <div className="item__cost">
                                        <p className='old_cost'>6100 UAH</p>
                                        <p className='new_cost'>3800 UAH</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clothes-slider__item">
                                <div className="item__img">
                                    <img src={img2} alt=""/>
                                </div>
                                <div className="item__text">
                                    <h2 className='item__title'>Replay</h2>
                                    <p className='item__description'>Classic Shoes</p>
                                    <div className="item__cost">
                                        <p className='old_cost'>6100 UAH</p>
                                        <p className='new_cost'>3800 UAH</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clothes-slider__item">
                                <div className="item__img">
                                    <img src={img3} alt=""/>
                                </div>
                                <div className="item__text">
                                    <h2 className='item__title'>Replay</h2>
                                    <p className='item__description'>Classic Shoes</p>
                                    <div className="item__cost">
                                        <p className='old_cost'>6100 UAH</p>
                                        <p className='new_cost'>3800 UAH</p>
                                    </div>
                                </div>
                            </li>
                            <li className="clothes-slider__item">
                                <div className="item__img">
                                    <img src={img4} alt=""/>
                                </div>
                                <div className="item__text">
                                    <h2 className='item__title'>Replay</h2>
                                    <p className='item__description'>Classic Shoes</p>
                                    <div className="item__cost">
                                        <p className='old_cost'>6100 UAH</p>
                                        <p className='new_cost'>3800 UAH</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clothes;