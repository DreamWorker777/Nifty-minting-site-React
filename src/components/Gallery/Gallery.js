import { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './Gallery.scss';
import bottomTransition from '../../assets/img/gallery/bot.svg';

import slideImg1 from '../../assets/img/gallery/1.gif';
import slideImg2 from '../../assets/img/gallery/2.gif';
import slideImg3 from '../../assets/img/gallery/3.gif';
import slideImg4 from '../../assets/img/gallery/4.gif';
import slideImg5 from '../../assets/img/gallery/5.gif';
import slideImg6 from '../../assets/img/gallery/6.gif';
import slideImg7 from '../../assets/img/gallery/7.gif';
import slideImg8 from '../../assets/img/gallery/8.gif';
import slideImg9 from '../../assets/img/gallery/9.gif';

import prevImg from '../../assets/img/gallery/prev.svg';
import nextImg from '../../assets/img/gallery/next.svg';

const slideImages = [
    slideImg1, slideImg2, slideImg3, slideImg4, slideImg5, slideImg6, slideImg7, slideImg8, slideImg9
];

export const Gallery = () => {
    const slideRef = useRef();

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        slidesToShow: 3,
    };

    return (
        <section className="gallery" id="gallery">
            <div className="gallery__bottomTransition">
                <img alt="bottom" src={ bottomTransition }></img>
            </div>

            <div className="container">
                <div className="gallery__desc">
                    5 1:1 Legacy Stones, over 40 unique gem designs, 5 power levels, and 5 realms. Creating over 200 combinations and over 80 extremely rare nodestones.
                </div>

                <div className="gallery__slider">
                    <button className="gallery__slider__arrow arrowLeft" onClick={() => slideRef.current.goBack()}> <img alt="sprite" src={prevImg}></img> </button>
                    
                    <div className="gallery__slider__wrapper">
                        <Slide easing="ease" {...properties} ref={ slideRef }>
                            {slideImages.map((each, index) => (
                                <div key={index} className="gallery__slider__eachItem">
                                    <div style={{ backgroundImage: `url(${each})` }}>
                                    </div>
                                </div>
                            ))}
                        </Slide>
                    </div>

                    <button className="gallery__slider__arrow arrowRight" onClick={() => slideRef.current.goNext()}> <img alt="sprite" src={nextImg}></img> </button>
                </div>

                <div className="gallery__desc">
                    Each realm serves as its own collection with scarcity and power ranking. Plus utility galore. Grab a nodestone and begin building the future with us! 
                </div>
            </div>
        </section>
    )
}

export default Gallery;