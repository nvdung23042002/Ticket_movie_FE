import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./style.css"
import { Button } from "../../../../Utils/Button/Button"
import { ImCancelCircle } from 'react-icons/im'
import TicketServices from "../../../../services/TicketServices"
import axios from "axios"
export default function ({ closeModal }) {
    const location = useLocation();
    const navigate = useNavigate()

    const [cinemaID, setCinemaID] = useState((location.state.id))
    const [roomId, setRoomID] = useState('')
    const [movieID, setMovieID] = useState('')
    const [showDay, setShowDay] = useState('')
    const [showMonth, setShowMonth] = useState('')
    const [showTime, setShowTime] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    //

    const saveShow = (e) => {
        e.preventDefault();
        const shows = { cinemaID, roomId, movieID, showDay, showMonth, showTime, category, price }
        TicketServices.addShow({
            'cinemasId': cinemaID,
            'roomId': roomId,
            'movieId': movieID,
            'showDate': showDay,
            'showMonth': showMonth,
            'showTime': showTime,
            'category': category,
            'price': price
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="modal-background ">
            <div className="modal-container">
                <ImCancelCircle className="btn-close"
                    onClick={() => closeModal(false)} />
                <div className="title">
                    Add Show Ticket
                </div>
                <div className="body">
                    <form>
                        <label className="left">RoomID:</label>
                        <input type="text"
                            placeholder="Enter room"
                            name="room"
                            className="form-control"
                            value={roomId}
                            onChange={(e) => setRoomID(e.target.value)}
                        />
                    </form>

                    <form>
                        <label className="left">MovieID:</label>
                        <input type="text"
                            placeholder="Enter movie ID"
                            name="movie"
                            className="form-control"
                            value={movieID}
                            onChange={(e) => setMovieID(e.target.value)}
                        />
                    </form>

                    <form>
                        <label className="left">Show Day:</label>
                        <input type="text"
                            placeholder="Enter day of show movie"
                            name="showDay"
                            className="form-control"
                            value={showDay}
                            onChange={(e) => setShowDay(e.target.value)}
                        />
                    </form>

                    <form>
                        <label className="left">Show Month:</label>
                        <input type="text"
                            placeholder="Enter month of show movie"
                            name="showMonth"
                            className="form-control"
                            value={showMonth}
                            onChange={(e) => setShowMonth(e.target.value)}
                        />
                    </form>

                    <form>
                        <label className="left">Show Time:</label>
                        <input type="time"
                            placeholder="Enter time of show movie"
                            name="showTime"
                            className="form-control"
                            value={showTime}
                            onChange={(e) => setShowTime(e.target.value)}
                        />
                    </form>

                    <form>
                        <label className="left">Category:</label>
                        <input type="text"
                            placeholder="Enter category of show movie"
                            name="category"
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </form>

                    <form>
                        <label className="left">Price:</label>
                        <input type="text"
                            placeholder="Enter price for a ticket of movie show"
                            name="price"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </form>

                </div>
                <div className="footer">
                    <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--small"
                        onClick={(e) => {
                            closeModal(false)
                            saveShow(e)
                        }}>Save</Button>
                    <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--small"
                        onClick={() => closeModal(false)}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}