import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


export default function ImageCard(props) {

    const {user, token} = useSelector(state => state.auth);
    let image = props.image
    const dispatch = useDispatch();
    const history = useHistory();

    const colorImage = () => { 
        if(!token){
            history.push("/login")
            return
        } 

        let newImage = {image_id: image.id, user_id: user.id}

        fetch(`http://localhost:3000/user_images`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization': `bearer ${token}`
            },
            body: JSON.stringify(newImage)
        })
        .then(r => r.json())
        .then((resp) => {
            dispatch({
                type: 'ADD_USER_IMAGE',
                payload: resp
            });
            history.push(`/coloringpage/${resp.id}`)    
        })
    }

   
    return(
        <div className="image-card">
                <h4>{image.national_park} National Park</h4>
                <img className="new-image" src={`http://localhost:3000${image.svg_url}`} />
                <button onClick={colorImage}>Color Me!</button>
        </div>
    )
    

}

