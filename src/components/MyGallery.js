import React, { Component } from 'react';
import MyImageCard from './MyImageCard';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function MyGallery() {

  const {token, user} = useSelector(state => state.auth);

  const history = useHistory();

  
  if(!token){
    history.push("/login")
  }
 
  return (
    <div>
      <h1>Hi from {user.username}'s Gallery</h1>
      {/* {images.map(imageObj => <MyImageCard key={imageObj.id} image={imageObj} />)} */}
    </div>
  );
  
}
