import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageCard from './ImageCard.js';
import LoadingSpinner from '../LoadingSpinner.js';


export default function ImageGallery() {
 
    const dispatch = useDispatch();
    useEffect(() => {
      fetch("https://color-by-nature-api.herokuapp.com/images")
        .then(r => r.json())
        .then((resp) => {
            dispatch({
                type: 'SET_IMAGES',
                payload: resp
            });
        })  
    }, [dispatch]);

    const images = useSelector(state => state.image);

    
    return (
        <>
            {images.length === 0 ?
            <LoadingSpinner /> :
            <div>
                <h1>Choose an image to color!</h1>
                <div id="image-gallery"> 
                    {images.map(image => 
                        <ImageCard image={image} key={image.id} />
                    )}
                </div> 
            </div>
            }
        </>
    )
}

