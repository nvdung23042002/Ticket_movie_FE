import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"
import data from "./data";
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import axios from "axios";
const SeatItem = ({ seatDetail, seatSold, seatSearch, setSeatSearch }) => {
    return (
        <button className="seat"
            style={{
                backgroundColor: (seatSold == true) ? "fff" : (seatSearch.includes(seatDetail)) ? "#0081cb" : "#444451",
                height: "12px",
                width: "15px",
                margin: "3px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",

            }}
            onClick={
                e => {
                    setSeatSearch(prevState => [...prevState, seatDetail])
                }
            }
        >
        </button>

    )
}
const check = [5828, 5829]
const price = 150000;
const dataTicketId = []
const dataTicketFilm = []
const dataTicketPayment = []
const Seat = () => {
    const location = useLocation()
    const [seatSearch, setSeatSearch] = useState([])
    const [tickets, setTickets] = useState([])
    console.log(seatSearch)
    useEffect(() => {
        axios.get("http://localhost:8080/test/tickets/movieId/1").then((response) => {
            setTickets(response.data)
            // console.log(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    tickets.map((data) => {
        dataTicketId.push(data.id)
    })
    tickets.map((data) => {
        dataTicketFilm.push(data.movieName)
    })
    tickets.map((data) => {
        dataTicketPayment.push(data.paymentStatus)
    })
    const [pays, setPays] = useState([])
    useEffect(() => {
        axios.post("http://localhost:8080/test/payment/create-payment/11", {
            'description': "mua ve xem phim",
            'ticketsId': seatSearch
        }).then((response) => {
            setPays(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [seatSearch])
    console.log(pays.url)
    const navigate = useNavigate;


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
                                <SeatItem seatDetail={dataTicketId[0]} seatSold={dataTicketPayment[0]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[1]} seatSold={dataTicketPayment[1]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[2]} seatSold={dataTicketPayment[2]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[3]} seatSold={dataTicketPayment[3]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[4]} seatSold={dataTicketPayment[4]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[5]} seatSold={dataTicketPayment[5]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[6]} seatSold={dataTicketPayment[6]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[7]} seatSold={dataTicketPayment[7]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={dataTicketId[8]} seatSold={dataTicketPayment[8]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[9]} seatSold={dataTicketPayment[9]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[10]} seatSold={dataTicketPayment[10]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[11]} seatSold={dataTicketPayment[11]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[12]} seatSold={dataTicketPayment[12]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[13]} seatSold={dataTicketPayment[13]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[14]} seatSold={dataTicketPayment[14]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[15]} seatSold={dataTicketPayment[15]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={dataTicketId[16]} seatSold={dataTicketPayment[16]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[17]} seatSold={dataTicketPayment[17]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[18]} seatSold={dataTicketPayment[18]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[19]} seatSold={dataTicketPayment[19]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[20]} seatSold={dataTicketPayment[20]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[21]} seatSold={dataTicketPayment[21]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[22]} seatSold={dataTicketPayment[22]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[23]} seatSold={dataTicketPayment[23]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={dataTicketId[24]} seatSold={dataTicketPayment[24]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[25]} seatSold={dataTicketPayment[25]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[26]} seatSold={dataTicketPayment[26]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[27]} seatSold={dataTicketPayment[27]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[28]} seatSold={dataTicketPayment[28]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[29]} seatSold={dataTicketPayment[29]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[30]} seatSold={dataTicketPayment[30]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[31]} seatSold={dataTicketPayment[31]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={dataTicketId[32]} seatSold={dataTicketPayment[32]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[33]} seatSold={dataTicketPayment[33]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[34]} seatSold={dataTicketPayment[34]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[35]} seatSold={dataTicketPayment[35]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[36]} seatSold={dataTicketPayment[36]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[37]} seatSold={dataTicketPayment[37]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[38]} seatSold={dataTicketPayment[38]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[39]} seatSold={dataTicketPayment[39]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={dataTicketId[40]} seatSold={dataTicketPayment[40]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[41]} seatSold={dataTicketPayment[41]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[42]} seatSold={dataTicketPayment[42]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[43]} seatSold={dataTicketPayment[43]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[44]} seatSold={dataTicketPayment[44]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[45]} seatSold={dataTicketPayment[45]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[46]} seatSold={dataTicketPayment[46]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[47]} seatSold={dataTicketPayment[47]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={dataTicketId[48]} seatSold={dataTicketPayment[48]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[49]} seatSold={dataTicketPayment[49]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[50]} seatSold={dataTicketPayment[50]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[51]} seatSold={dataTicketPayment[51]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[52]} seatSold={dataTicketPayment[52]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[53]} seatSold={dataTicketPayment[53]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[54]} seatSold={dataTicketPayment[54]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[55]} seatSold={dataTicketPayment[55]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>
                            <div className="row">
                                <SeatItem seatDetail={dataTicketId[56]} seatSold={dataTicketPayment[56]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[57]} seatSold={dataTicketPayment[57]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[58]} seatSold={dataTicketPayment[58]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[59]} seatSold={dataTicketPayment[59]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[60]} seatSold={dataTicketPayment[60]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[61]} seatSold={dataTicketPayment[61]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[62]} seatSold={dataTicketPayment[62]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                                <SeatItem seatDetail={dataTicketId[63]} seatSold={dataTicketPayment[63]} seatSearch={seatSearch} setSeatSearch={setSeatSearch} />
                            </div>

                        </div>

                    </div>
                </div>
                <div className="booking-ticket-infos col l-6 m-6 c-12">
                    <h1 className="movie-name">{dataTicketFilm[dataTicketFilm.length - 1]}</h1>
                    <div className="time">Giờ: {location.state.time.showtime} </div>
                    <div className="date">Ngày tháng: {location.state.day.day + "/" + location.state.day.month + "/" + "2022"} </div>
                    <div className="theater">Rạp: {location.state.thea.thea}</div>
                    <div className="ticket-code">Mã vé: {seatSearch + " "}</div>
                    <div className="price-ticket">Giá vé: {price * seatSearch.length}</div>
                    <button className="pay" onClick={e => {
                        window.open(pays.url);
                    }} > Pay </button>

                </div>
            </div>
        </div>

    )
}

export default Seat;    