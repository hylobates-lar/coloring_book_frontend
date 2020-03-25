import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home = () => (
  <div className="home">
    <h2>This is home</h2> 
    <div className="carousel-container">
      <Carousel showArrows={true} autoPlay={true} showThumbs={false} infiniteLoop={true}>
            <div>
                <img src="https://images.prismic.io/rvshare/936b26fe018a6a3aae817aed4e4329bfd5e5d7da_zion-8.jpg?auto=compress,format" />
                <p className="legend">Zion National Park</p>
            </div>
            <div>
                <img src="https://www.nationalparks.org/sites/default/files/styles/wysiwyg_full_1x/public/iStock_47779594_MEDIUM.jpg?itok=iULrv-R-" />
                <p className="legend">Grand Canyon National Park</p>
            </div>
            <div>
                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/valley-view-yosemite-national-park-scott-mcguire.jpg" />
                <p className="legend">Yosemite National Park</p>
            </div>
            <div>
                <img src="https://www.wildmoments.net/images/large/brycedone1.jpg" />
                <p className="legend">Bryce Canyon National Park</p>
            </div>
            <div>
                <img src="http://www.destinationparks.com/images/park/saguaro-national-park-1280x853.jpg" />
                <p className="legend">Saguaro National Park</p>
            </div>
            <div>
                <img src="https://www.scenic-safaris.com/files/large/950b806f511401b" />
                <p className="legend">Yellowstone National Park</p>
            </div>
            <div>
                <img src="https://www.davesoldanoimages.com/img/s/v-10/p244139833-3.jpg" />
                <p className="legend">Canyonlands National Park</p>
            </div>
            <div>
                <img src="https://www.chaletvillage.com/wp-content/uploads/2017/05/Sunrise-in-the-mountains-near-Gatlinburg.jpg" />
                <p className="legend">Great Smoky Mountains National Park</p>
            </div>
        </Carousel>
        );
    
    </div>
  </div>
);

export default Home;