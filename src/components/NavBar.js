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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/images">Image Gallery</NavLink>
          </li>
        </ul>
        )
      :
        (
          <ul className="nav-bar">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/logout">Log Out</NavLink>
            </li>
            <li>
              <NavLink to="/mygallery">My Images</NavLink>
            </li>
            <li>
              <NavLink to="/images">Image Gallery</NavLink>
            </li>
          </ul>
        )
    
  )
};

export default NavBar;