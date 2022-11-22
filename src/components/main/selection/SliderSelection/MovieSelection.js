import React, { Component } from "react";
import Slider from "react-slick";
import { Button } from "../../../../utils/Button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function MovieSelection() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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

      const [data, setData] = useState([]);
      const getAllData = () => {
        axios
          .get("http://localhost:8080/test/movies")
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
  return (
    <Slider {...settings}>
        {data.map((item) =>(
            <div className="card">
                <div className="card-top">
                    <img src={item.image} alt="" />
                </div>
                <div className="card-bottom">
                    <h2>{item.name}</h2>
                    <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--medium">Buy Ticket</Button>
                    <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--medium">Details</Button>
                </div>
            </div>
        ))}
    </Slider>
  )
}

export default MovieSelection