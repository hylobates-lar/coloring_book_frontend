import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import MyImageCard from './MyImageCard';


export default function MyGallery() {

    const {token, user} = useSelector(state => state.auth);
    const history = useHistory();
    const [userImages, setUserImages] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("Loading...")
  
    
    if(token && !fetched){
        fetch(`http://localhost:3000/user_images`,
        {
            headers: {'Authorization': `bearer ${token}`}
        })
        .then(r => r.json())
        .then(data => {
            setUserImages(data)
            setFetched(true)
            if (data.length == 0) {
                setLoadingMessage("No images found")
            }
        }) 
    } 
      
    if(!localStorage.getItem("token")){
        history.push("/login")
    }
    
    return (
        <div>
            {user && <h1>{user.username}'s Gallery</h1>}
            <div id="my-gallery">
                {userImages.length === 0 ? 
                    <h2>{loadingMessage}</h2> :
                    userImages.map(userImageObj => <MyImageCard id="my-image-card" key={userImageObj.id} userImage={userImageObj} />)
                }
            </div>
        </div>
    );
    
}
