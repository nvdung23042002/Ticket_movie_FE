import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./style.css";
import data from "./data";


const DateItem = ({ dateDetail, dateSearch, setDateSearch }) => {
  return (
    <button className="date-item-wrapper"
      style={{
        border: (dateDetail.day == dateSearch) ? "2px solid rgb(0, 0, 0)" : "2px solid rgb(249, 249, 249)",
        backgroundColor: "transparent"
      }}
      onClick={e => { setDateSearch(dateDetail.day) }}
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
            navigate("/booking/seat")
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
  const [dateSearch, setDateSearch] = useState(data.date[0].day)
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
