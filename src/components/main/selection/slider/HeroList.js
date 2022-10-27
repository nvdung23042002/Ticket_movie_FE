import React from 'react'
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from './SliderData';
import Slider from 'react-slick';
import "./Style.css"
import { Button } from '../../../../utils/Button';



function HeroList() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
        {sliderData.map((item) =>(
            <div className="card">
                <div className="card-top">
                    <img src={item.image} alt="" />
                </div>
                <div className="card-bottom">
                    <h2>{item.desc}</h2>
                    <Button type="button" buttonStyle="btn--primary--outline" buttonSize="btn--medium">Buy Ticket</Button>
                    <Button type="button" buttonStyle="btn--primary--outline" buttonSize="btn--medium">Details</Button>
                </div>
            </div>
        ))}
    </Slider>
  )
}

export default HeroList