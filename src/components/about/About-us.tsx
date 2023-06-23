import React from 'react';
import './style.css'


import woman from '../../img/about-us/woman.jpg';
import ellipse from '../../img/about-us/Ellipse.svg';
const AboutUs = () => {
    return (
        <div>
            <div className="container">
                <div className="about-us">
                    <div className="about-us__text">
                        <h1 className='about-us__title'>About <br/> us</h1>
                        <p className='about-us__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam aspernatur assumenda atque ducimus enim eveniet facere id incidunt ipsa iste iure labore laboriosam maxime nemo nesciunt nostrum praesentium qui quos, sed sit, suscipit totam? Aperiam aspernatur, ea est excepturi libero neque odio placeat provident quia, quis reiciendis repellat velit?</p>
                    </div>
                    <div className="about-us__img">
                        <img src={ellipse} alt="" className='ellipse'/>
                        <img src={woman} alt="" className='woman'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;