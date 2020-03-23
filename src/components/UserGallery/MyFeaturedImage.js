import React, { useState, useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ColoredInImage from '../Images/ColoredInImage';
import {saveSvgAsPng} from 'save-svg-as-png';



export default function MyFeaturedImage(props) {
    let {id} = useParams();
    const {token} = useSelector(state => state.auth);
    const [userImage, setUserImage] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();
    
    
    if (token && !userImage.id) {
        fetch(`http://localhost:3000/user_images/${id}`,{
            headers: {'Authorization': `bearer ${token}`}
        })
        .then(r => r.json())
        .then(data => {
            setUserImage(data)
        })   
    }

    if (!token || !userImage.id) {
        return(
            <h2>Loading...</h2>
        )
    }

    const deleteImage = () => {
        fetch(`http://localhost:3000/user_images/${id}`,{
            method: 'DELETE',
            headers: {'Authorization': `bearer ${token}`}
        })
        .then(r => r.json())
        .then(data => {
            dispatch({
                type: 'SET_IMAGES',
                payload: data
              });
              history.push(`/mygallery`)
            })      
    }

    const editImage = () => {
        history.push(`/coloringpage/${userImage.id}`)
    }

    const backToGallery = () => {
        history.push('/mygallery')
    }

    const saveImage = () => {
        saveSvgAsPng(document.getElementById("svg-image"), "myimage.png");
    }

    return(
        <div className="featured-image-page">
            <div className="featured-image-container">
                <ColoredInImage component={userImage.image.component}  fillColors={userImage.fill_colors}/>
            </div>
            <div id="buttons">
                <button onClick={editImage}>Edit this Image</button>
                <button onClick={saveImage}>Download this Image</button>
                <button onClick={backToGallery}>Back to My Images</button>
                <button onClick={deleteImage}>Delete this Image</button>
            </div>
           
        </div>
    )
}