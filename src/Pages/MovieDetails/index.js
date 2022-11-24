import { useState } from "react";
import {useLocation} from 'react-router-dom';
import { Button } from "../../Utils/Button/Button";
import "./Style.css"
import ReactPlayer from 'react-player'

const componentName = "MovieDetails"; 

export default function () {
  const location = useLocation();
  const [showDes, setShowDes] = useState(false)
  const [showTrailer, setShowTrailer] = useState(false)
  return (
      <div className={componentName}>
         <div className="page-title">
          <h1>Movie Content</h1>
         </div>
          <div className="content-movie">
            <div className="column1">
              <img src={location.state.image} alt="" />
            </div>
            <div className="column2">
              <h2 className="details-title-movie">{location.state.name}</h2>
              <ul className="movie-details-infos">
                <li className="movie-details-info">
                  <label>Đạo diễn:</label>
                  <span>{location.state.director}</span>
                </li>
                <li className="movie-details-info">
                  <label>Diễn viên:</label>
                  <span>{location.state.cast}</span>
                </li>
                <li className="movie-details-info">
                  <label>Thể loại:</label>
                  <span></span>
                </li>
                <li className="movie-details-info">
                  <label>Khởi chiếu:</label>
                  <span></span>
                </li>
                <li className="movie-details-info">
                  <label>Thời lượng:</label>
                  <span></span>
                </li>
                <li className="movie-details-info">
                  <label>Ngôn ngữ:</label>
                  <span></span>
                </li>
                <li className="movie-details-info">
                  <label>Rated:</label>
                  <span>C13 - PHIM CẤM KHÁN GIẢ DƯỚI 13 TUỔI</span>
                </li>
                <li className="movie-details-info">
                  <label>Rating:</label>
                  <span>{location.state.rating} /10</span>
                </li>
              </ul>

              <div className="movie-details-options">
                <div className="buy-ticket">
                  <Button>BuyTicket</Button>
                </div>
                <div className="description">
                 
                  <Button onClick={() =>setShowDes(!showDes)}>Description</Button>
                  <Button onClick={() =>setShowTrailer(!showTrailer)}>Trailer</Button>
                </div>
              </div>

            </div>
          </div>
          {
            showDes?<div className="movie-details-des">{location.state.description}</div>:null
          }
         <div className="movie-details-trailer">
          {
            showTrailer?<ReactPlayer url={location.state.trailerUrl} />:null
          }
         </div>
         <div> </div>
         <div></div>
      </div>
  )
  
}
