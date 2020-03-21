import React, { useState, useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ColoredInImage from '../Images/ColoredInImage'




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

    return(
        <div>
            <div>
                <h2>This is the featured image page</h2>
                <ColoredInImage component={userImage.image.component}  fillColors={userImage.fill_colors}/>
            </div>
            <button onClick={editImage}>Edit this Image</button>
            <button onClick={deleteImage}>Delete this Image</button>
           
        </div>
    )
}