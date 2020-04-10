import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ColoredInImage from '../Images/ColoredInImage'
import ColorPalette from './ColorPalette';



export default function ColoringPage() {

    let {id} = useParams();
    const {token} = useSelector(state => state.auth);
    const [userImage, setUserImage] = useState({});
    const [color, setColor] = useState("blue");

    if (token && !userImage.id) {
        fetch(`http://localhost:3000/user_images/${id}`,{
            headers: {'Authorization': `bearer ${token}`}
        })
        .then(r => r.json())
        .then(data => {
            console.log("d", data)
            setUserImage(data)
        })
    }
    
    if (!userImage.id) {
        return <h2>Loading...</h2>
    }


    const onFillColor = (i) => {
        let newFillColors = userImage.fill_colors.slice(0)
        newFillColors[i] = color 
    
        setUserImage({
            ...userImage,
            fill_colors: newFillColors
        })

        fetch(`http://localhost:3000/user_images/${id}`,{
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
                <p class="auto-save-text" >* This image will save automatically, so color away! 👍</p>
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