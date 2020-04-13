import React, { useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {saveSvgAsPng} from 'save-svg-as-png';
import swal from 'sweetalert';
import ColoredInImage from '../Images/ColoredInImage';
import LoadingSpinner from '../LoadingSpinner';



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
           <LoadingSpinner />
        )
    }

    const deleteImage = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this image",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
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
                    swal("Image Deleted", "This image has been removed from your gallery", "success");
                    history.push(`/mygallery`)
                })        
            }
          });
    }

    const editImage = () => {
        history.push(`/coloringpage/${userImage.id}`)
    }

    const backToGallery = () => {
        history.push('/mygallery')
    }

    const saveImage = () => {
        saveSvgAsPng(document.getElementById("svg-image"), "myimage.png");
        swal("Download Complete", "This image has been saved to your Downloads", "success");
    }

    return(
        <div className="featured-image-page">
            <div id="quote" >
                <p >"Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."<b> - Albert Einstein</b></p>
            </div>
            <div className="featured-image-container">
                <ColoredInImage size={'large'} component={userImage.image.component}  fillColors={userImage.fill_colors}/>
            </div>
            <div id="featured-buttons">
                <button onClick={editImage}>Edit</button>
                <button onClick={saveImage}>Download</button>
                <button onClick={backToGallery}>Back to My Images</button>
                <button onClick={deleteImage}>Delete</button>
            </div>
           
        </div>
    )
}