import React from 'react';

class ImageCard extends React.Component {

    colorImage = () => {
        let image = this.props.image
        let images = this.props.user.images
        let newImage = {image_id: image.id, user_id: this.props.user.id, fill_colors: []}
    
        fetch(`http://localhost:3000/user_images`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newImage)
        })
        .then(r => r.json())
        .then((userData) => {
            this.props.addOneImage(userData)
        })    
      }

    render(){
        let image = this.props.image
        return(
            <div id="image-card">
                <h1>Image Card</h1>
                <p>{image.title}</p>
                < img src={`http://localhost:3000${image.svg_url}`} />
                <span onClick={this.colorImage}>Color Me!</span>
            </div>
        )
    }

}

export default ImageCard;