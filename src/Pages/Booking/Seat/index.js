import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import data from "./data";
const price = 170000;
const SeatItem = ({ seatDetail, seatSearch, setSeatSearch }) => {
    return (
        <button className="seat"
            style={{
                backgroundColor: (seatDetail == seatSearch) ? "#0081cb" : "#444451",
                height: "12px",
                width: "15px",
                margin: "3px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",

            }}
            onClick={
                e => {
                    setSeatSearch(seatDetail)
                }
            }
        >
        </button>

    )
}

const Seat = () => {
    const [seatSearch, setSeatSearch] = useState("")
    return (

        <div className="booking-wrapper grid wide">
            <div className="booking-container row">
                <div className="booking-seat-infos col l-6 m-6 c-12">
                    <div classNameName="movie-container">
                        <ul className="showcase">
                            <li>
                                <div className="seat"></div>
                                <small>N/A</small>
                            </li>
                            <li>
                                <div className="seat selected"></div>
                                <small>Selected</small>
                            </li>
                            <li>
                                <div className="seat occupied"></div>
                                <small>Occupied</small>
                            </li>
                        </ul>

                        <div className="container">
                            <div className="screen"></div>

                            <div className="row">
                                <SeatItem seatDetail={data.seat[0]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[1]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[2]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[3]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[4]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[5]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[6]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[7]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={data.seat[8]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[9]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[10]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[11]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[12]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[13]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[14]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[15]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={data.seat[16]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[17]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[18]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[19]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[20]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[21]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[22]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[23]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={data.seat[24]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[25]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[26]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[27]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[28]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[29]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[30]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[31]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={data.seat[32]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[33]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[34]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[35]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[36]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[37]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[38]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[39]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={data.seat[40]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[41]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[42]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[43]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[44]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[45]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[46]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[47]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={data.seat[48]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[49]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[50]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[51]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[52]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[53]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[54]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[55]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={data.seat[56]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[57]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[58]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[59]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[60]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[61]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[62]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={data.seat[63]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>

                        </div>

                    </div>
                </div>
                <div className="booking-ticket-infos col l-6 m-6 c-12">
                    <h1>Doctor</h1>
                </div>
            </div>
        </div>

    )
}

export default Seat;    