import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home = () => (
  <div className="home">
    <h2>This is home</h2> 
    <div className="carousel-container">
      <Carousel showArrows={true} autoPlay={true} showThumbs={false}>
            <div>
                <img src="https://assets3.thrillist.com/v1/image/2850831/size/gn-gift_guide_variable_c_2x.jpg" />
                <p className="legend">Zion National Park</p>
            </div>
            <div>
                <img src="https://www.nationalparks.org/sites/default/files/styles/wysiwyg_full_1x/public/iStock_47779594_MEDIUM.jpg?itok=iULrv-R-" />
                <p className="legend">Grand Canyon National Park</p>
            </div>
            <div>
                <img src="https://www.nationalparks.org/sites/default/files/styles/list_1x/public/shutterstock_176085914.jpg?itok=Sjw35HEd&timestamp=1468268901" />
                <p className="legend">Canyonlands National Park</p>
            </div>
            <div>
                <img src="https://www.wildmoments.net/images/large/brycedone1.jpg" />
                <p className="legend">Bryce Canyon National Park</p>
            </div>
            <div>
                <img src="assets/5.jpeg" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img src="assets/6.jpeg" />
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
        );
    
    </div>
  </div>
);

export default Home;