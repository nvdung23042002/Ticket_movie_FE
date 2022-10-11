import React, {useState} from "react";
import {BiMoviePlay} from 'react-icons/bi'
import "./style.css"
import {RiCloseLine} from 'react-icons/ri'
import {AiOutlineBars} from 'react-icons/ai'

class Navbar extends React.Component {
    state = {
        showMenu: false
    }
    handleShowMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    render() {
        
        let {showMenu} = this.state
        return(
            <nav className="container-navbar">
                <div className="logo">
                    <BiMoviePlay></BiMoviePlay>
                </div>
                <menu>
                    <ul className="nav-link" id={showMenu ? "nav-link-mobile" : "nav-link-mobile-hide"}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#" className="btn-animation">Login</a></li>
                    </ul>
                </menu>
                <div className="menu-icons" onClick={() => this.handleShowMenu()}>
                    {
                        showMenu ? (
                            <RiCloseLine color = "#fff" size = {30}></RiCloseLine>
                        ) : (
                            <AiOutlineBars color="#fff" size = {27}></AiOutlineBars>
                        )
                    }
                </div>
            </nav>
        )
    }
}
export default Navbar