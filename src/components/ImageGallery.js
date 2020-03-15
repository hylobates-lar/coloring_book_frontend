import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ImageCard from './ImageCard.js'


class ImageGallery extends Component {

    state = {
        images: [],
      }
    
    componentDidMount() {
    fetch("http://localhost:3000/images")
        .then(r => r.json())
        .then(imageData => {
            this.setState({
                images: imageData,
            })
        }) 
    }


    render() {
    
        return (
            <div id="image-gallery"> 
            {/* <Row gutter={[48, 24]}> */}
            <h1>Hi from Image Gallery</h1>
                {this.state.images.map((image) => {
                    return (
                    // <Col span={8}>
                        <ImageCard image={image} key={image.id} user={this.props.user} addOneImage={this.props.addOneImage}/>    
                    // </Col>
                    )
                })}
            {/* </Row> */}
            </div>
        )}
}

export default withRouter(ImageGallery);