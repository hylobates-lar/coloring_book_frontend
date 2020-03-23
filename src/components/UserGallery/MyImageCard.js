import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import ColoredInImage from '../Images/ColoredInImage';
import MyFeaturedImage from './MyFeaturedImage';


export default function MyImageCard(props) {

    const {user, token} = useSelector(state => state.auth);
    let image = props.userImage.image
    const dispatch = useDispatch();
    const history = useHistory();

    const showFeatured = () => {
        history.push(`/featuredimage/${props.userImage.id}`)
        
    }

   
    return(
        <div id="image-card">
            <div className="image-container">
                <ColoredInImage component={image.component} onFill={()=>{}} fillColors={props.userImage.fill_colors}/>
                <button onClick={showFeatured}>View Image</button>
            </div>  
        </div>
    )


}

