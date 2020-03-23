import React from 'react';
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';


function NavBar() {
  const {token} = useSelector(state => state.auth);
  
  return (
    (!token) ?
        ( 
        <ul className="nav-bar">
          <li>
            <NavLink className="nav-bar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="/images">Image Gallery</NavLink>
          </li>
          <li>
            <NavLink className="nav-bar-link" to="/login">Login/Create Account</NavLink>
          </li>
        </ul>
        )
      :
        (
          <ul className="nav-bar">
            <li>
              <NavLink className="nav-bar-link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav-bar-link" to="/mygallery">My Images</NavLink>
            </li>
            <li>
              <NavLink className="nav-bar-link" to="/images">Image Gallery</NavLink>
            </li>
            <li>
              <NavLink className="nav-bar-link" to="/logout">Log Out</NavLink>
            </li>
          </ul>
        )
    
  )
};

export default NavBar;