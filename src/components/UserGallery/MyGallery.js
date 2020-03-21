import React, { useState, useEffect } from 'react';
import MyImageCard from './MyImageCard';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function MyGallery() {

  const {token, user} = useSelector(state => state.auth);
  const history = useHistory();
  const [userImages, setUserImages] = useState([]);
  const [fetched, setFetched] = useState(false);
  
  useEffect(() => {
    const abortController = new AbortController()

    if(token && !fetched)
      fetch(`http://localhost:3000/user_images`,
      {
        headers: {'Authorization': `bearer ${token}`}
      })
      .then(r => r.json())
      .then(data => {
          setUserImages(data)
          setFetched(true)
      })  
  }, [])
  
  
  if(!token){
    history.push("/login")
  }
 
  return (
    <div>
      <h2>{user.username}'s Gallery</h2>
      <div id="my-gallery">
      {userImages.length === 0 ? <h2>No images yet!</h2> :
        userImages.map(userImageObj => <MyImageCard id="my-image-card" key={userImageObj.id} userImage={userImageObj} />)}
      </div>
    </div>
  );
  
}
