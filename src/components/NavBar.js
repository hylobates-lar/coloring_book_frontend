import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function NavBar() {
    const {token} = useSelector(state => state.auth);
    const [mobileActive, setMobileActive] = useState(false); 
    const activeClass = mobileActive ? "active" : ""

    const toggleActive = () => {
        setMobileActive(!mobileActive)
    }
    
    return (
        <>
        <img src="/white-hamburger-menu.png" id="hamburger-menu" onClick={toggleActive}/>
        {(!token) ?
            ( 
            <ul className={`nav-bar ${activeClass}`}>
            <li>
                <NavLink onClick={toggleActive} className="nav-bar-link" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink onClick={toggleActive} className="nav-bar-link" to="/images">Image Gallery</NavLink>
            </li>
            <li>
                <NavLink onClick={toggleActive} className="nav-bar-link" to="/login">Login/Create Account</NavLink>
            </li>
            </ul>
            )
        :
            (
            <ul className={`nav-bar ${activeClass}`}>
                <li>
                <NavLink onClick={toggleActive} className="nav-bar-link" to="/">Home</NavLink>
                </li>
                <li>
                <NavLink onClick={toggleActive} className="nav-bar-link" to="/mygallery">My Images</NavLink>
                </li>
                <li>
                <NavLink onClick={toggleActive} className="nav-bar-link" to="/images">Image Gallery</NavLink>
                </li>
                <li>
                <NavLink onClick={toggleActive} className="nav-bar-link" to="/logout">Log Out</NavLink>
                </li>
            </ul>
            )}
        </>

    )
};
