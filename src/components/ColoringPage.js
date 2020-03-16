import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sunflower from './Sunflower';

const components = {
    "Sunflower": Sunflower
}

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
            setUserImage(data)
        })
    }
    

    if (!userImage.id) {
        return <h1> not found </h1>
    }

    const image = userImage.image
    const ColorImage = components[image.component]

    const onFillColor = (i) => {
        let newFillColors = userImage.fill_colors.slice(0)
        newFillColors[i] = color 
    
        setUserImage({
            ...userImage,
            fill_colors: newFillColors
        })
    }

    return(
        <div>
            <h1>This is the Coloring Page</h1>
            <ColorImage onFill={onFillColor} fillColors={userImage.fill_colors}/>
        </div>
    )
}