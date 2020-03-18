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
        <div id="image-gallery"> 
        {/* <Row gutter={[48, 24]}> */}
        <h1>Hi from Image Gallery</h1>
            {images.map((image) => {
                return (
                // <Col span={8}>
                    <ImageCard image={image} key={image.id} />    
                // </Col>
                )
            })}
        {/* </Row> */}
        </div>
    )
}

