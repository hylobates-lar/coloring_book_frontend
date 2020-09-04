import React, { useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ColoredInImage from '../Images/ColoredInImage'
import ColorPalette from './ColorPalette';
import LoadingSpinner from '../LoadingSpinner';



export default function ColoringPage() {

    let {id} = useParams();
    const {token} = useSelector(state => state.auth);
    const [userImage, setUserImage] = useState({});
    const [color, setColor] = useState("blue");
    const [fetched, setFetched] = useState(false);
    const history = useHistory();
    
    if(!localStorage.getItem("token")){
        history.push("/login")
    }

    if (token && !fetched) {
        fetch(`https://color-by-nature-api.herokuapp.com/user_images/${id}`,{
            headers: {'Authorization': `bearer ${token}`}
        })
        .then(r => r.json())
        .then(data => {
            setUserImage(data)
            setFetched(true)
        })
    }
    
    if (!fetched) {
        return(
           <LoadingSpinner />
        )
    }

    if (fetched && !userImage.id) {
        return (
            <h1>Image not found</h1>
        )
    }


    const onFillColor = (i) => {
        let newFillColors = userImage.fill_colors.slice(0)
        newFillColors[i] = color 
    
        setUserImage({
            ...userImage,
            fill_colors: newFillColors
        })

        fetch(`https://color-by-nature-api.herokuapp.com/user_images/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`},
            body: JSON.stringify({id: userImage.id, fill_colors: newFillColors})
        })
        .then(r => r.json())
        .then(console.log)   
    }

    let currentImage = userImage.image

    return(
        <div className="coloring-page">
            <ColorPalette currentColor={color} changeColor={setColor} />
            <div id="coloring-image-container" > 
                <ColoredInImage size="large" component={userImage.image.component} onFill={onFillColor} fillColors={userImage.fill_colors}/>
                <p class="auto-save-text" >* This image will save automatically, so color away! <span role='img' aria-label='thumbs up emoji'>👍</span></p>
            </div>
            <div className="image-description">
                <h2 id="description-heading" >{currentImage.national_park} National Park</h2>
                <hr />
                <p><b>Established:</b> {currentImage.year}</p>
                <p><b>Location:</b> {currentImage.location}</p>
                <p>{currentImage.description}</p>    
            </div>
        </div>
    )
}