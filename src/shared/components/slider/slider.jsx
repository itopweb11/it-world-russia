import React, { useRef } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {sliderArr} from "./dataSlider";
import  arrow_dropLeft from "../../../img/arrow_dropLeft.png"
import  arrow_dropRight from "../../../img/arrow_dropRight.png"

const CompanySlider = () => {
    const sliderRef = useRef(null)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: dots => {
            console.log("dots", dots);
            return (
                <div className="slider__dots_container">
                    <div className="slider__dots_container_block">
                        <button onClick={() => (sliderRef.current.slickPrev())}>В начало</button>
                        <ul className="slider__dots"> {dots} </ul>
                        <button onClick={() => (sliderRef.current.slickNext())}>Дальше</button>
                    </div>
                </div>
            )
        },
        customPaging: i => (
            <div className="slider__dot">
                {i + 1}
            </div>
        )
    }

    return (
        <div className='slider'>
            <Slider {...settings} ref={sliderRef}>
                {sliderArr.map((card, index) => (
                    <div className="slider__block" key={index}>
                        <h2 className="slider__block_nameCompany">{card.name}</h2>
                        <img className="slider__image" alt={card.name} src={card.imageSrc} />
                        <p className="slider__block_desc">{card.desc}</p>
                    </div>
                ))}
            </Slider>
            <div className="slider__controls">
                <div onClick={() => (sliderRef.current.slickPrev())}>
                    <img src={arrow_dropLeft} alt="arrow_dropLeft"/>
                </div>
                <div onClick={() => (sliderRef.current.slickNext())}>
                    <img src={arrow_dropRight} alt="arrow_dropRight"/>
                </div>
            </div>
        </div>
    )
}

export default CompanySlider;