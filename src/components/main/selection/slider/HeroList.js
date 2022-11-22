import React from 'react'
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./Style.css"
import { Button } from '../../../../utils/Button';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import MyContext from '../../../../utils/ShareState/Context';
import MovieDetails from '../movies/MovieDetails';
import { Modal } from 'bootstrap';

function HeroList() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
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
              initialSlide: 1
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

      const [data, setData] = useState([])
      const getAllData = () => {
        axios
          .get("http://localhost:8080/test/movies/toprating")
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      useEffect(() => {
        getAllData();
      }, []);
      
      const [show, setShow] = useState(false)

      const handleClick = () => {
        setShow(true)
      }

  return (
    <>
      <MyContext.Provider value={{data, setData}}>
        <Slider {...settings}>
            {data.map((item) =>(
                <div className="card">
                    <div className="card-top">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h2>{item.name}</h2>
                        <Button type="button" buttonStyle="btn--primary--outline" buttonSize="btn--medium">Buy Ticket</Button>
                        <Button type="button" buttonStyle="btn--primary--outline" buttonSize="btn--medium"
                         >Details</Button>
                    </div>
                </div>
            ))}
        </Slider>  
      </MyContext.Provider>
    </>
  )
}

export default HeroList