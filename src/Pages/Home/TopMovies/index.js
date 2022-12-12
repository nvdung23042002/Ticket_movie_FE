import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Style.css';
import { Button } from '../../../Utils/Button/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilmServices from '../../../services/FilmServices';

function HeroList() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getAllData = () => {
    FilmServices.getFilmTopRating()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Slider {...settings}>
        {data.map((item) => (
          <div className='card'>
            <div className='card-top'>
              <img src={item.image} alt='' />
            </div>
            <div className='card-bottom'>
              <h2 className='text-truncate'>{item.name}</h2>
              <Button
                type='button'
                buttonStyle='btn--primary--outline'
                buttonSize='btn--medium'
              >
                Buy Ticket
              </Button>
              <Button
                type='button'
                buttonStyle='btn--primary--outline'
                buttonSize='btn--medium'
                onClick={() => navigate('movie-details', { state: item })}
              >
                Details
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default HeroList;
