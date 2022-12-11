import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./style.css";
import data from "./data";
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";


const day = [""]
const time = [""]
const thea = [""]

const DateItem = ({ dateDetail, dateSearch, setDateSearch }) => {
  return (
    <button className="date-item-wrapper"
      style={{
        border: (dateDetail == dateSearch) ? "2px solid rgb(0, 0, 0)" : "2px solid rgb(249, 249, 249)",
        backgroundColor: (dateDetail == dateSearch) ? "#e9f5f9" : "transparent",
      }}
      onClick={e => {
        setDateSearch(dateDetail)
        day.push(dateDetail)
        console.log(day)
      }}
    >
      <div className="left-side">
        <div className="top">
          {dateDetail.day}

        </div>
        <div className="bottom">
          {dateDetail.date}
        </div>
      </div>
      <div className="right-side">
        {dateDetail.month}
      </div>
    </button>

  )
}

const CinemaItem = ({ theaDetail }) => {

  const CategoryView = () => {

    const TimeItem = ({ timeDetail }) => {
      const navigate = useNavigate()
      return (
        <button className="time-detail"
          onClick={e => {
            time.push(timeDetail)
            thea.push(theaDetail)
            navigate("/booking/seat", {
              state: {
                day: day[day.length - 1],
                time: time[time.length - 1],
                thea: thea[thea.length - 1],
              }
            })

          }}
        >
          {timeDetail.showtime}
        </button>
      )
    }

    return (
      <div className="category-view-wrapper">
        <div className="time-wrapper list-display">
          {data.time.map((showtime) => (
            <TimeItem timeDetail={showtime} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="line" />
      <div className="cinema-detail">
        <div className="name">{theaDetail.thea}</div>
        {console.log(theaDetail.thea)}
        <CategoryView />
      </div>
    </div>
  )
}


const Booking = () => {

  const [dateSearch, setDateSearch] = useState(data.date[0])
  return (

    <div className="booking-wrapper">
      <div className="date-wrapper list-display">
        {data.date.map((date) => (
          <DateItem dateDetail={date} dateSearch={dateSearch} setDateSearch={setDateSearch} />
        ))}

      </div>
      <div className="cinema-wrapper">
        {data.theater.map((thea) => (
          <CinemaItem theaDetail={thea} />
        ))}
      </div>
    </div>
  )
}
export default Booking;
