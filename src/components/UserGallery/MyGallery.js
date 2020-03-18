import React, { useState, useEffect } from 'react';
import MyImageCard from './MyImageCard';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function MyGallery() {

  const {token, user} = useSelector(state => state.auth);
  const history = useHistory();
  const [userImages, setUserImages] = useState([]);
  
  if (token && userImages.length === 0) {
    fetch(`http://localhost:3000/user_images`,{
        headers: {'Authorization': `bearer ${token}`}
    })
    .then(r => r.json())
    .then(data => {
        setUserImages(data)
    })  
  }
  
  if(!token){
    history.push("/login")
  }
 
  return (
    <div>
      <h1>Hi from {user.username}'s Gallery</h1>
     
      {userImages.map(userImageObj => <MyImageCard key={userImageObj.id} userImage={userImageObj} />)}
    </div>
  );
  
}
