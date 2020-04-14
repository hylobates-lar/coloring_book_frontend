import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Home() {

    return (
        <div className="home">
            <h1>Welcome to Color by Nature</h1>
            <h2 class="home-title">A National Parks Digital Coloring Book</h2> 
            <div className="carousel-container">
                <Carousel showArrows={true} autoPlay={true} showThumbs={false} infiniteLoop={true}>
                    <div>
                        <img src="/zion.jpg" alt="Zion National Park"/>
                        <p className="legend">Zion National Park</p>
                    </div>
                    <div>
                        <img src="/grand-canyon.jpg" alt="Grand Canyon National Park"/>
                        <p className="legend">Grand Canyon National Park</p>
                    </div>
                    <div>
                        <img src="/yosemite.jpg" alt="Yosemite National Park"/>
                        <p className="legend">Yosemite National Park</p>
                    </div>
                    <div>
                        <img src="/bryce-canyon.jpg" alt="Bryce Canyon National Park"/>
                        <p className="legend">Bryce Canyon National Park</p>
                    </div>
                    <div>
                        <img src="/saguaro.jpg" alt="Saguaro National Park"/>
                        <p className="legend">Saguaro National Park</p>
                    </div>
                    <div>
                        <img src="/yellowstone.jpeg" alt="Yellowstone National Park"/>
                        <p className="legend">Yellowstone National Park</p>
                    </div>
                    <div>
                        <img src="/canyonlands.jpg" alt="Canyonlands National Park"/>
                        <p className="legend">Canyonlands National Park</p>
                    </div>
                    <div>
                        <img src="/great-smoky-mountains.jpg" alt="Great Smoky Mountains National Park"/>
                        <p className="legend">Great Smoky Mountains National Park</p>
                    </div>
                </Carousel>
                
            </div>
            <div className="home-text">
                <h3 style={{textAlign: "center"}}>About the National Parks</h3>
                <p >The United States has 62 protected areas known as national parks that are operated by the National Park Service, an agency of the Department of the Interior. National parks must be established by an act of the United States Congress. A bill creating the first national park, Yellowstone, was signed into law by President Ulysses S. Grant in 1872, followed by Mackinac National Park in 1875 (decommissioned in 1895), and then Rock Creek Park (later merged into National Capital Parks), Sequoia and Yosemite in 1890. The Organic Act of 1916 created the National Park Service "to conserve the scenery and the natural and historic objects and wildlife therein, and to provide for the enjoyment of the same in such manner and by such means as will leave them unimpaired for the enjoyment of future generations." Many current national parks had been previously protected as national monuments by the president under the Antiquities Act before being upgraded by Congress. Seven national parks (including six in Alaska) are paired with a national preserve, areas with different levels of protection that are administered together but considered separate units. Criteria for the selection of national parks include natural beauty, unique geological features, unusual ecosystems, and recreational opportunities (though these criteria are not always considered together). National monuments, on the other hand, are frequently chosen for their historical or archaeological significance. Fourteen national parks are designated UNESCO World Heritage Sites (WHS), while 21 national parks are designated UNESCO Biosphere Reserves (BR). Eight national parks are designated in both UNESCO programs.</p>
            </div>
        </div>
    )
}

