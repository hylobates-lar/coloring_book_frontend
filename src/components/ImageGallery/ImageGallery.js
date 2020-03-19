import React, { useEffect } from 'react';
import ImageCard from './ImageCard.js';
import { useDispatch, useSelector } from 'react-redux';


export default function ImageGallery() {
 
    const dispatch = useDispatch();
    useEffect(() => {
      fetch("http://localhost:3000/images")
        .then(r => r.json())
        .then((resp) => {
            dispatch({
                type: 'SET_IMAGES',
                payload: resp
            });
        })  
    }, []);

    const images = useSelector(state => state.image);

    
    return (
        <div>
            <h2>Choose an image to color!</h2>
            <div id="image-gallery"> 
                {images.map((image) => {
                    return (
                        <ImageCard id="image-card" image={image} key={image.id} />    
                    )
                })}
            </div>
        </div>
    )
}

