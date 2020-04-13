import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import MyImageCard from './MyImageCard';
import LoadingSpinner from '../LoadingSpinner';


export default function MyGallery() {

    const {token, user} = useSelector(state => state.auth);
    const history = useHistory();
    const [userImages, setUserImages] = useState([]);
    const [fetched, setFetched] = useState(false);
      
    if(!localStorage.getItem("token")){
        history.push("/login")
    }
    
    if(token && !fetched){
        fetch(`http://localhost:3000/user_images`,
        {
            headers: {'Authorization': `bearer ${token}`}
        })
        .then(r => r.json())
        .then(data => {
            setUserImages(data)
            setFetched(true)
        }) 
    } 
    
    return (
        <div>
            {user && <h1>{user.username}'s Gallery</h1>}
            {!fetched ? <LoadingSpinner /> : 
                userImages.length === 0 ? 
                    <h2>No images yet!</h2>
                 :
                    <div id="my-gallery">
                        {userImages.map(userImageObj => <MyImageCard id="my-image-card" key={userImageObj.id} userImage={userImageObj} />)}
                    </div>
                }
            }
        </div>
    );
    
}
