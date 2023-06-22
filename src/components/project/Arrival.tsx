import React from 'react';
import './style.css'

import img1 from '../../img/project/new-arrival1.jpg';
import img2 from '../../img/project/new-arrival2.jpg';
const Arrival = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="new-arrival-wrapper">
                        <div className="new-arrival">
                            <div className="new-arrival__text">
                                <div className="new-arrival__title">
                                    <h1>New <br/> Arrival</h1>
                                </div>
                                <div className="new-arrival__description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos id ipsa iure maxime, pariatur quibusdam?</p>
                                </div>
                                <div className="new-arrival__link">
                                    <p> Look Collection</p>
                                </div>
                            </div>
                            <div className="new-arrival__img">
                                <img src={img1} alt=""/>
                            </div>
                        </div>
                        <div className="new-arrival__2">
                            <div className="content">
                                <div className="content__img">
                                    <div className="content__text">Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Optio, quis?</div>
                                    <img src={img2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Arrival;