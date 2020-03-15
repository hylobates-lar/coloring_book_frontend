import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import MyImageCard from './MyImageCard'


class MyGallery extends Component {

  componentDidMount() {
    if(!this.props.token){
      this.props.history.push("/login")
    }
  }

  render() {
    let {user:{images, username}} = this.props
   console.log(this.props)
    return (
      <div>
        <h1>Hi from {username}'s Gallery</h1>
        {/* {images.map(imageObj => <MyImageCard key={imageObj.id} image={imageObj} />)} */}
      </div>
    );
  }
}
export default withRouter(MyGallery);